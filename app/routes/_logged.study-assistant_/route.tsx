import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useUploadPublic } from '@/plugins/upload/client'
import {
  Button,
  Card,
  Divider,
  Input,
  List,
  Select,
  Space,
  Typography,
  Upload,
} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input

export default function AIStudyAssistantPage() {
  const { user } = useUserContext()
  const [question, setQuestion] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [selectedModel, setSelectedModel] = useState('deepseek')

  // API Hooks
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: generateAnswer } = Api.ai.generateText.useMutation()
  const { data: conversations, refetch } = Api.aIConversation.findMany.useQuery(
    {
      where: { userId: user?.id },
      orderBy: { timestamp: 'desc' },
    },
  )
  const { mutateAsync: saveConversation } =
    Api.aIConversation.create.useMutation()

  // Handle question submission
  const handleAskQuestion = async () => {
    if (!question.trim()) return

    try {
      let imageUrl = ''
      if (imageFile) {
        const uploadResult = await uploadFile({ file: imageFile })
        imageUrl = uploadResult.url
      }

      const aiResponse = await generateAnswer({
        prompt: question,
        provider: selectedModel as 'openai' | 'gemini' | 'deepseek',
      })

      await saveConversation({
        data: {
          query: question,
          response: aiResponse.answer,
          imageUrl: imageUrl || null,
          timestamp: new Date().toISOString(),
          model: selectedModel,
          user: {
            connect: {
              id: user?.id,
            },
          },
        },
      })

      setQuestion('')
      setImageFile(null)
      refetch()
    } catch (error) {
      console.error('Error processing question:', error)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Title level={2}>
            <i className="las la-robot" style={{ marginRight: 10 }}></i>
            AI Study Assistant
          </Title>
          <Paragraph>
            Ask any questions about your studies and get instant help from our
            AI assistant. You can also upload images of problems for detailed
            explanations.
          </Paragraph>
        </div>

        <Card>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <TextArea
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              rows={4}
            />

            <Space>
              <Select
                value={selectedModel}
                onChange={setSelectedModel}
                style={{ width: 150 }}
                options={[
                  { label: 'Deepseek', value: 'deepseek' },
                  { label: 'GPT-4', value: 'openai' },
                ]}
              />

              <Upload
                beforeUpload={file => {
                  setImageFile(file)
                  return false
                }}
                maxCount={1}
                showUploadList={true}
              >
                <Button icon={<i className="las la-image"></i>}>
                  Upload Image
                </Button>
              </Upload>

              <Button
                type="primary"
                onClick={handleAskQuestion}
                icon={<i className="las la-paper-plane"></i>}
              >
                Ask Question
              </Button>
            </Space>
          </Space>
        </Card>

        <Divider>Previous Conversations</Divider>

        <List
          itemLayout="vertical"
          dataSource={conversations}
          renderItem={(conversation: {
            query: string
            response: string
            imageUrl?: string
            timestamp: Date
            model?: string
          }) => (
            <Card style={{ marginBottom: 16 }}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <div>
                  <Text strong>
                    <i className="las la-question-circle"></i> Question:
                  </Text>
                  <Paragraph>{conversation.query}</Paragraph>
                </div>

                {conversation.imageUrl && (
                  <img
                    src={conversation.imageUrl}
                    alt="Problem"
                    style={{ maxWidth: 300, maxHeight: 300 }}
                  />
                )}

                <div>
                  <Text strong>
                    <i className="las la-comment"></i> Answer:
                    {conversation.model === 'openai' ? 'GPT-4' : 'Deepseek'}
                  </Text>
                  <Paragraph>{conversation.response}</Paragraph>
                </div>

                <Text type="secondary">
                  <i className="las la-clock"></i>
                  {dayjs(conversation.timestamp).format('MMMM D, YYYY h:mm A')}
                </Text>
              </Space>
            </Card>
          )}
        />
      </div>
    </PageLayout>
  )
}
