import { Typography, Card, Row, Col, Progress, List, Button } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch enrolled courses with progress
  const { data: enrollments } = Api.enrollment.findMany.useQuery({
    where: { userId: user?.id },
    include: { course: true },
  })

  // Fetch recent test attempts
  const { data: testAttempts } = Api.testAttempt.findMany.useQuery({
    where: { userId: user?.id },
    include: { test: true },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-graduation-cap" /> My Learning Dashboard
        </Title>
        <Text type="secondary">
          Track your progress, access your courses, and view recommended
          materials
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          {/* Enrolled Courses */}
          <Col xs={24} lg={16}>
            <Card
              title={
                <span>
                  <i className="las la-book" /> My Enrolled Courses
                </span>
              }
            >
              <List
                dataSource={enrollments}
                renderItem={enrollment => (
                  <List.Item
                    actions={[
                      <Button
                        type="link"
                        onClick={() =>
                          navigate(`/courses/${enrollment.courseId}`)
                        }
                      >
                        Continue Learning
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      title={enrollment.course?.title}
                      description={
                        <div>
                          <Text type="secondary">
                            {enrollment.course?.subject}
                          </Text>
                          <Progress
                            percent={parseInt(enrollment.progress)}
                            size="small"
                            status="active"
                          />
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Quick Links */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <span>
                  <i className="las la-link" /> Quick Links
                </span>
              }
            >
              <List>
                <List.Item>
                  <Button
                    type="link"
                    icon={<i className="las la-brain" />}
                    onClick={() => navigate('/study-assistant')}
                  >
                    AI Study Assistant
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    type="link"
                    icon={<i className="las la-question-circle" />}
                    onClick={() => navigate('/practice-tests')}
                  >
                    Practice Tests
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    type="link"
                    icon={<i className="las la-comments" />}
                    onClick={() => navigate('/doubts')}
                  >
                    Doubt Forum
                  </Button>
                </List.Item>
              </List>
            </Card>

            {/* Recent Test Attempts */}
            <Card
              style={{ marginTop: '24px' }}
              title={
                <span>
                  <i className="las la-chart-bar" /> Recent Test Attempts
                </span>
              }
            >
              <List
                dataSource={testAttempts}
                renderItem={attempt => (
                  <List.Item>
                    <List.Item.Meta
                      title={attempt.test?.title}
                      description={
                        <>
                          <Text type="secondary">Score: {attempt.score}</Text>
                          <br />
                          <Text type="secondary">
                            {dayjs(attempt.completedAt).format('MMM D, YYYY')}
                          </Text>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
