import {
  Typography,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Progress,
  List,
  Space,
  Tag,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PracticeTestsPage() {
  const { user } = useUserContext()
  const [selectedTest, setSelectedTest] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  // Fetch available tests
  const { data: tests } = Api.test.findMany.useQuery({
    include: {
      questions: true,
    },
  })

  // Fetch user's test attempts
  const { data: attempts } = Api.testAttempt.findMany.useQuery({
    where: {
      userId: user?.id,
    },
    include: {
      test: true,
    },
  })

  // Start test mutation
  const { mutateAsync: startTest } = Api.testAttempt.create.useMutation()

  // AI explanation mutation
  const { mutateAsync: getAiExplanation } = Api.ai.generateText.useMutation()

  const handleStartTest = async (testId: string) => {
    try {
      await startTest({
        data: {
          userId: user?.id,
          testId: testId,
          score: '0',
          completedAt: dayjs().format(),
        },
      })
      setSelectedTest(testId)
    } catch (error) {
      Modal.error({ title: 'Error starting test' })
    }
  }

  const handleGetExplanation = async (questionId: string) => {
    try {
      const explanation = await getAiExplanation({
        prompt: `Explain the solution for question ${questionId} in detail`,
      })
      Modal.info({
        title: 'AI Explanation',
        content: explanation.answer,
        width: 600,
      })
    } catch (error) {
      Modal.error({ title: 'Error getting explanation' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-graduation-cap"></i> Practice Tests
        </Title>
        <Text>
          Prepare for JEE/NEET with our comprehensive mock tests and get
          AI-powered explanations
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24} lg={16}>
            <Card
              title={
                <>
                  <i className="las la-book"></i> Available Tests
                </>
              }
            >
              <List
                dataSource={tests}
                renderItem={test => (
                  <List.Item
                    actions={[
                      <Button
                        type="primary"
                        onClick={() => handleStartTest(test.id)}
                        icon={<i className="las la-play"></i>}
                      >
                        Start Test
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      title={test.title}
                      description={
                        <Space>
                          <Tag color="blue">{test.examType}</Tag>
                          <Tag color="green">{test.subject}</Tag>
                          <Text type="secondary">
                            <i className="las la-clock"></i>{' '}
                            {test.duration?.toString()} mins
                          </Text>
                          <Text type="secondary">
                            <i className="las la-question-circle"></i>{' '}
                            {test.totalQuestions?.toString()} questions
                          </Text>
                        </Space>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-chart-bar"></i> Your Performance
                </>
              }
            >
              {attempts?.map(attempt => (
                <div key={attempt.id} style={{ marginBottom: 16 }}>
                  <Text strong>{attempt.test?.title}</Text>
                  <Progress
                    percent={Number(attempt.score)}
                    status={Number(attempt.score) >= 70 ? 'success' : 'normal'}
                  />
                  <Space>
                    <Button
                      size="small"
                      onClick={() => setShowResults(true)}
                      icon={<i className="las la-eye"></i>}
                    >
                      View Results
                    </Button>
                    <Button
                      size="small"
                      type="primary"
                      onClick={() => handleGetExplanation(attempt.testId || '')}
                      icon={<i className="las la-robot"></i>}
                    >
                      Get AI Explanation
                    </Button>
                  </Space>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
