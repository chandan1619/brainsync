import { TRPCError } from '@trpc/server'
import { DeepseekProvider } from './providers/deepseek/deepseek.provider'
import { GeminiProvider } from './providers/gemini/gemini.provider'
import { OpenaiProvider } from './providers/openai/openai.provider'
import { AiProvider } from './providers/provider'

export class AiServiceFactory {
  static create(providerType: 'openai' | 'gemini' | 'deepseek'): AiProvider {
    let provider: AiProvider

    switch (providerType) {
      case 'openai':
        provider = new OpenaiProvider()
        break
      case 'gemini':
        provider = new GeminiProvider()
        break
      case 'deepseek':
        provider = new DeepseekProvider()
        break
      default:
        throw new Error(`Unsupported AI provider: ${providerType}`)
    }

    if (!provider.isActive()) {
      let message = ''
      switch (providerType) {
        case 'openai':
          message = 'Set SERVER_OPENAI_API_KEY in your .env to activate OpenAI'
          break
        case 'gemini':
          message = 'Set SERVER_GEMINI_API_KEY in your .env to activate Gemini'
          break
        case 'deepseek':
          message =
            'Set SERVER_DEEPSEEK_API_KEY in your .env to activate Deepseek'
          break
      }
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message,
      })
    }

    return provider
  }
}
