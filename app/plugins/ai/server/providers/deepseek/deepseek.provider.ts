import { TRPCError } from '@trpc/server'
import { ReadStream } from 'fs'
import { AiProvider } from '../provider'

export class DeepseekProvider implements AiProvider {
  private apiKey: string | undefined
  private fireworksApiKey: string | undefined

  constructor() {
    this.apiKey = process.env.SERVER_DEEPSEEK_API_KEY
    this.fireworksApiKey = process.env.SERVER_FIREWORKS_API_KEY
  }

  isActive(): boolean {
    return !!this.apiKey
  }

  // async generateText(prompt: string): Promise<string> {
  //   console.log('Generating text with Deepseek')
  //   try {
  //     const response = await fetch(
  //       'https://api.deepseek.com/v1/chat/completions',

  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${this.apiKey}`,
  //         },
  //         body: JSON.stringify({
  //           model: 'deepseek-chat-1.3b',
  //           messages: [{ role: 'user', content: prompt }],
  //           temperature: 0.7,
  //           max_tokens: 1000,
  //         }),
  //       },
  //     )

  //     if (!response.ok) {
  //       const error = await response.json()
  //       console.error('Deepseek raw error:', error)
  //       throw new Error(
  //         `Deepseek API error: ${error.message || response.statusText}`,
  //       )
  //     }

  //     const data = await response.json()
  //     return data.choices[0].message.content
  //   } catch (error) {
  //     console.error('Error calling Deepseek API:', error)
  //     throw new TRPCError({
  //       code: 'INTERNAL_SERVER_ERROR',
  //       message: 'Failed to generate text with Deepseek',
  //     })
  //   }
  // }

  async generateText(prompt: string): Promise<string> {
    console.log('Generating text with Deepseek through Fireworks')
    try {
      const response = await fetch(
        'https://api.fireworks.ai/inference/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.fireworksApiKey}`,
          },
          body: JSON.stringify({
            model: 'accounts/fireworks/models/deepseek-r1',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 4096,
            temperature: 0.6,
            top_p: 1,
            top_k: 40,
            presence_penalty: 0,
            frequency_penalty: 0,
          }),
        },
      )

      if (!response.ok) {
        const error = await response.json()
        console.error('Fireworks API error:', error)
        throw new Error(
          `Fireworks API error: ${error.message || response.statusText}`,
        )
      }

      const data = await response.json()
      return data.choices[0].message.content
    } catch (error) {
      console.error('Error calling Fireworks API:', error)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to generate text with Fireworks',
      })
    }
  }

  async generateJson<T>(
    instruction: string,
    content: string,
    schema: any,
    attachmentUrls?: string[],
  ): Promise<T> {
    try {
      const systemPrompt = `You are a JSON generator. You must respond with valid JSON that matches this schema: ${JSON.stringify(
        schema.shape,
      )}`

      const response = await fetch(
        'https://api.cloud.deepseek.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
          body: JSON.stringify({
            model: 'deepseek-chat',
            messages: [
              { role: 'system', content: systemPrompt },
              {
                role: 'user',
                content: `Instruction: ${instruction}\nContent: ${content}`,
              },
            ],
            temperature: 0.1, // Lower temperature for more deterministic JSON output
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`Deepseek API error: ${response.statusText}`)
      }

      const data = await response.json()
      const jsonString = data.choices[0].message.content
      const parsedJson = JSON.parse(jsonString)

      return schema.parse(parsedJson)
    } catch (error) {
      console.error('Error generating JSON with Deepseek:', error)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to generate JSON with Deepseek',
      })
    }
  }

  async generateImage(prompt: string): Promise<string> {
    throw new TRPCError({
      code: 'NOT_IMPLEMENTED',
      message: 'Image generation is not supported by Deepseek provider',
    })
  }

  async fromAudioToText(audioStream: ReadStream): Promise<string> {
    throw new TRPCError({
      code: 'NOT_IMPLEMENTED',
      message: 'Audio to text conversion is not supported by Deepseek provider',
    })
  }

  async fromTextToAudio(text: string): Promise<Buffer> {
    throw new TRPCError({
      code: 'NOT_IMPLEMENTED',
      message: 'Text to audio conversion is not supported by Deepseek provider',
    })
  }
}
