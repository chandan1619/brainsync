import { Typography, Card, Row, Col, Progress, List, Spin } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function StudyDashboardPage() {
  const { user } = useUserContext()

  // Fetch enrollments with course details
  const { data: enrollments, isLoading: loadingEnrollments } =
    Api.enrollment.findMany.useQuery({
      where: { userId: user?.id },
      include: { course: true },
    })

  // Fetch test attempts with test details
  const { data: testAttempts, isLoading: loadingTests } =
    Api.testAttempt.findMany.useQuery({
      where: { userId: user?.id },
      include: { test: true },
    })

  // Calculate overall progress
  const overallProgress =
    enrollments?.reduce((acc, curr) => {
      return acc + parseInt(curr.progress || '0')
    }, 0) / (enrollments?.length || 1)

  // Get subject performance
  const subjectPerformance = testAttempts?.reduce((acc: any, attempt) => {
    const subject = attempt.test?.subject || 'Unknown'
    if (!acc[subject]) {
      acc[subject] = { total: 0, count: 0 }
    }
    acc[subject].total += parseInt(attempt.score || '0')
    acc[subject].count += 1
    return acc
  }, {})

  // Get weak subjects (below 60% average)
  const weakSubjects = Object.entries(subjectPerformance || {})
    .filter(([_, data]: any) => data.total / data.count < 60)
    .map(([subject]) => subject)

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>
          <i className="las la-chart-line" style={{ marginRight: '8px' }}></i>
          Study Dashboard
        </Title>
        <Text type="secondary">
          Track your progress and performance across all subjects
        </Text>

        {loadingEnrollments || loadingTests ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Spin size="large" />
          </div>
        ) : (
          <>
            <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <>
                      <i className="las la-graduation-cap"></i> Overall Progress
                    </>
                  }
                >
                  <Progress
                    type="circle"
                    percent={Math.round(overallProgress || 0)}
                    format={percent => `${percent}%`}
                  />
                </Card>
              </Col>
              <Col xs={24} lg={16}>
                <Card
                  title={
                    <>
                      <i className="las la-chart-bar"></i> Subject Performance
                    </>
                  }
                >
                  {Object.entries(subjectPerformance || {}).map(
                    ([subject, data]: any) => (
                      <div key={subject} style={{ marginBottom: '16px' }}>
                        <Text>{subject}</Text>
                        <Progress
                          percent={Math.round(data.total / data.count)}
                          status={
                            data.total / data.count < 60
                              ? 'exception'
                              : 'active'
                          }
                        />
                      </div>
                    ),
                  )}
                </Card>
              </Col>
            </Row>

            <Card
              title={
                <>
                  <i className="las la-lightbulb"></i> Recommended Focus Areas
                </>
              }
              style={{ marginTop: '24px' }}
            >
              <List
                dataSource={weakSubjects}
                renderItem={subject => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <i
                          className="las la-exclamation-circle"
                          style={{ color: '#ff4d4f', fontSize: '24px' }}
                        ></i>
                      }
                      title={subject}
                      description={`Your performance in ${subject} is below average. Consider focusing more on this subject.`}
                    />
                  </List.Item>
                )}
                locale={{ emptyText: 'Great job! No weak areas detected.' }}
              />
            </Card>

            <Card
              title={
                <>
                  <i className="las la-history"></i> Recent Test Attempts
                </>
              }
              style={{ marginTop: '24px' }}
            >
              <List
                dataSource={testAttempts?.slice(0, 5)}
                renderItem={attempt => (
                  <List.Item>
                    <List.Item.Meta
                      title={attempt.test?.title}
                      description={`Score: ${
                        attempt.score
                      }% - Completed: ${dayjs(attempt.completedAt).format(
                        'MMM D, YYYY',
                      )}`}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </>
        )}
      </div>
    </PageLayout>
  )
}
