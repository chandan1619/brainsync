import { Typography, Card, Select, Row, Col, Button, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CourseLibraryPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  const [selectedExamType, setSelectedExamType] = useState<string>('')

  // Fetch all courses with filters
  const { data: courses } = Api.course.findMany.useQuery({
    where: {
      ...(selectedSubject && { subject: selectedSubject }),
      ...(selectedExamType && { examType: selectedExamType }),
    },
  })

  // Enroll mutation
  const { mutateAsync: createEnrollment } = Api.enrollment.create.useMutation()

  // Handle enrollment
  const handleEnroll = async (courseId: string) => {
    try {
      if (!user) {
        message.error('Please login to enroll in courses')
        return
      }

      await createEnrollment({
        data: {
          progress: '0',
          enrollDate: new Date().toISOString(),
          userId: user.id,
          courseId: courseId,
        },
      })

      message.success('Successfully enrolled in the course!')
      navigate(`/courses/${courseId}`)
    } catch (error) {
      message.error('Failed to enroll in the course')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Title level={2}>
            <i className="las la-graduation-cap"></i> Course Library
          </Title>
          <Text>
            Browse and enroll in our comprehensive JEE and NEET preparation
            courses
          </Text>
        </div>

        {/* Filters Section */}
        <div style={{ marginBottom: 24 }}>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Select
                style={{ width: '100%' }}
                placeholder="Select Subject"
                value={selectedSubject}
                onChange={setSelectedSubject}
                allowClear
              >
                <Select.Option value="Physics">Physics</Select.Option>
                <Select.Option value="Chemistry">Chemistry</Select.Option>
                <Select.Option value="Mathematics">Mathematics</Select.Option>
                <Select.Option value="Biology">Biology</Select.Option>
              </Select>
            </Col>
            <Col xs={24} sm={12}>
              <Select
                style={{ width: '100%' }}
                placeholder="Select Exam Type"
                value={selectedExamType}
                onChange={setSelectedExamType}
                allowClear
              >
                <Select.Option value="JEE">JEE</Select.Option>
                <Select.Option value="NEET">NEET</Select.Option>
              </Select>
            </Col>
          </Row>
        </div>

        {/* Courses Grid */}
        <Row gutter={[16, 16]}>
          {courses?.map(course => (
            <Col xs={24} sm={12} md={8} key={course.id}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      height: 160,
                      background: '#f0f2f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <i className="las la-book" style={{ fontSize: 48 }}></i>
                  </div>
                }
              >
                <Card.Meta
                  title={course.title}
                  description={
                    <>
                      <p>
                        <i className="las la-layer-group"></i> {course.subject}
                      </p>
                      <p>
                        <i className="las la-file-alt"></i> {course.examType}
                      </p>
                      <p>
                        <i className="las la-signal"></i> {course.level}
                      </p>
                    </>
                  }
                />
                <div style={{ marginTop: 16 }}>
                  <Button
                    type="primary"
                    block
                    onClick={() => handleEnroll(course.id)}
                    icon={<i className="las la-sign-in-alt"></i>}
                  >
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {(!courses || courses.length === 0) && (
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <i
              className="las la-search"
              style={{ fontSize: 48, color: '#999' }}
            ></i>
            <Title level={4}>No courses found</Title>
            <Text>Try adjusting your filters to find more courses</Text>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
