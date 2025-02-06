import {
  Typography,
  Input,
  Button,
  Card,
  List,
  Space,
  Spin,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DoubtForumPage() {
  const { user } = useUserContext()
  const [searchQuery, setSearchQuery] = useState('')
  const [newDoubtTitle, setNewDoubtTitle] = useState('')
  const [newDoubtContent, setNewDoubtContent] = useState('')
  const [replyContent, setReplyContent] = useState('')
  const [selectedDoubtId, setSelectedDoubtId] = useState<string | null>(null)

  // Fetch all doubts with user and replies included
  const {
    data: doubts,
    isLoading,
    refetch,
  } = Api.doubt.findMany.useQuery({
    include: {
      user: true,
      doubtReplys: {
        include: {
          user: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  // Mutations
  const createDoubt = Api.doubt.create.useMutation()
  const createReply = Api.doubtReply.create.useMutation()
  const generateAiReply = Api.ai.generateText.useMutation()

  // Filter doubts based on search query
  const filteredDoubts = doubts?.filter(
    doubt =>
      doubt.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doubt.content?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCreateDoubt = async () => {
    if (!newDoubtTitle || !newDoubtContent) {
      message.error('Please fill in both title and content')
      return
    }

    try {
      await createDoubt.mutateAsync({
        data: {
          title: newDoubtTitle,
          content: newDoubtContent,
          userId: user?.id,
          status: 'OPEN',
        },
      })
      setNewDoubtTitle('')
      setNewDoubtContent('')
      refetch()
      message.success('Doubt posted successfully')
    } catch (error) {
      message.error('Failed to post doubt')
    }
  }

  const handleCreateReply = async (doubtId: string, isAi: boolean = false) => {
    if (!replyContent && !isAi) {
      message.error('Please enter a reply')
      return
    }

    try {
      let content = replyContent
      if (isAi) {
        const doubt = doubts?.find(d => d.id === doubtId)
        const aiResponse = await generateAiReply.mutateAsync({
          prompt: `Please help answer this student's doubt: ${doubt?.content}`,
        })
        content = aiResponse.answer
      }

      await createReply.mutateAsync({
        data: {
          content,
          doubtId,
          userId: user?.id,
          isAiGenerated: isAi,
        },
      })
      setReplyContent('')
      setSelectedDoubtId(null)
      refetch()
      message.success('Reply posted successfully')
    } catch (error) {
      message.error('Failed to post reply')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-question-circle"></i> Student Doubt Forum
        </Title>
        <Paragraph>
          Ask questions and get answers from AI and fellow students
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card title="Post a New Doubt">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input
                placeholder="Doubt Title"
                value={newDoubtTitle}
                onChange={e => setNewDoubtTitle(e.target.value)}
                prefix={<i className="las la-heading"></i>}
              />
              <TextArea
                placeholder="Describe your doubt in detail..."
                value={newDoubtContent}
                onChange={e => setNewDoubtContent(e.target.value)}
                rows={4}
              />
              <Button
                type="primary"
                onClick={handleCreateDoubt}
                icon={<i className="las la-paper-plane"></i>}
              >
                Post Doubt
              </Button>
            </Space>
          </Card>

          <Input
            placeholder="Search doubts..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            prefix={<i className="las la-search"></i>}
          />

          {isLoading ? (
            <Spin size="large" />
          ) : (
            <List
              dataSource={filteredDoubts}
              renderItem={doubt => (
                <List.Item>
                  <Card style={{ width: '100%' }}>
                    <Title level={4}>{doubt.title}</Title>
                    <Paragraph>{doubt.content}</Paragraph>
                    <Text type="secondary">
                      Posted by {doubt.user?.name} on{' '}
                      {dayjs(doubt.createdAt).format('MMMM D, YYYY')}
                    </Text>

                    <List
                      style={{ marginTop: 16 }}
                      dataSource={doubt.doubtReplys}
                      renderItem={reply => (
                        <List.Item>
                          <Card type="inner" style={{ width: '100%' }}>
                            <Space>
                              {reply.isAiGenerated && (
                                <i className="las la-robot"></i>
                              )}
                              <Text strong>{reply.user?.name}</Text>
                            </Space>
                            <Paragraph>{reply.content}</Paragraph>
                          </Card>
                        </List.Item>
                      )}
                    />

                    {selectedDoubtId === doubt.id ? (
                      <Space
                        direction="vertical"
                        style={{ width: '100%', marginTop: 16 }}
                      >
                        <TextArea
                          placeholder="Write your reply..."
                          value={replyContent}
                          onChange={e => setReplyContent(e.target.value)}
                          rows={3}
                        />
                        <Space>
                          <Button onClick={() => handleCreateReply(doubt.id)}>
                            <i className="las la-reply"></i> Reply
                          </Button>
                          <Button
                            onClick={() => handleCreateReply(doubt.id, true)}
                          >
                            <i className="las la-robot"></i> Get AI Help
                          </Button>
                        </Space>
                      </Space>
                    ) : (
                      <Button
                        style={{ marginTop: 16 }}
                        onClick={() => setSelectedDoubtId(doubt.id)}
                      >
                        <i className="las la-comment"></i> Add Reply
                      </Button>
                    )}
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
