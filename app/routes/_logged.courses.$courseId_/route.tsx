import {
  Typography,
  Card,
  Progress,
  List,
  Button,
  Space,
  Row,
  Col,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CourseContentPage() {
  const { courseId } = useParams()
  const { user } = useUserContext()
  const [selectedContent, setSelectedContent] = useState<string | null>(null)

  // Fetch course details with contents
  const { data: course } = Api.course.findFirst.useQuery({
    where: { id: courseId },
    include: { contents: true },
  })

  // Fetch user's enrollment for this course
  const { data: enrollment } = Api.enrollment.findFirst.useQuery({
    where: {
      userId: user?.id,
      courseId: courseId,
    },
  })

  // Update progress mutation
  const { mutateAsync: updateProgress } = Api.enrollment.update.useMutation()

  const handleContentComplete = async (contentId: string) => {
    if (!enrollment) return

    const currentProgress = parseInt(enrollment.progress || '0')
    const newProgress = Math.min(currentProgress + 10, 100)

    try {
      await updateProgress({
        where: { id: enrollment.id },
        data: { progress: newProgress.toString() },
      })
      message.success('Progress updated!')
    } catch (error) {
      message.error('Failed to update progress')
    }
  }

  const renderContent = (content: any) => {
    if (content.type === 'video') {
      return (
        <div style={{ width: '100%', aspectRatio: '16/9' }}>
          <iframe
            width="100%"
            height="100%"
            src={content.resourceUrl}
            title={content.title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )
    }
    return (
      <iframe
        src={content.resourceUrl}
        style={{ width: '100%', height: '600px', border: 'none' }}
        title={content.title}
      />
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Card>
              <Title level={2}>
                <i className="las la-graduation-cap" /> {course?.title}
              </Title>
              <Text>{course?.description}</Text>
              {enrollment && (
                <Progress
                  percent={parseInt(enrollment.progress || '0')}
                  status="active"
                  style={{ marginTop: 16 }}
                />
              )}
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              title={
                <>
                  <i className="las la-list" /> Course Contents
                </>
              }
            >
              <List
                dataSource={course?.contents?.sort(
                  (a, b) => (a.sequence || 0) - (b.sequence || 0),
                )}
                renderItem={(content: any) => (
                  <List.Item>
                    <Space>
                      <Button
                        type={
                          selectedContent === content.id ? 'primary' : 'text'
                        }
                        onClick={() => setSelectedContent(content.id)}
                      >
                        {content.type === 'video' ? (
                          <i className="las la-play-circle" />
                        ) : (
                          <i className="las la-file-alt" />
                        )}
                        {content.title}
                      </Button>
                      <Button
                        type="link"
                        onClick={() => handleContentComplete(content.id)}
                        icon={<i className="las la-check-circle" />}
                      >
                        Mark as Complete
                      </Button>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} md={16}>
            <Card
              title={
                <>
                  <i className="las la-book-reader" /> Learning Material
                </>
              }
            >
              {selectedContent ? (
                course?.contents?.find(c => c.id === selectedContent) &&
                renderContent(
                  course.contents.find(c => c.id === selectedContent),
                )
              ) : (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <i
                    className="las la-hand-point-left"
                    style={{ fontSize: '48px' }}
                  />
                  <Title level={4}>
                    Select a content from the list to start learning
                  </Title>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
