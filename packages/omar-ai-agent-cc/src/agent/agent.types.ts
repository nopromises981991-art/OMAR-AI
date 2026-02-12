import { Message } from '@prisma/client';
import { MessageContentBlock } from '@omar-ai/shared';

export interface OMAR AIAgentResponse {
  contentBlocks: MessageContentBlock[];
  tokenUsage: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
}

export interface OMAR AIAgentService {
  generateMessage(
    systemPrompt: string,
    messages: Message[],
    model: string,
    useTools: boolean,
    signal?: AbortSignal,
  ): Promise<OMAR AIAgentResponse>;
}

export interface OMAR AIAgentModel {
  provider: 'anthropic' | 'openai' | 'google' | 'proxy';
  name: string;
  title: string;
  contextWindow?: number;
}

export class OMAR AIAgentInterrupt extends Error {
  constructor() {
    super('OMAR AIAgentInterrupt');
    this.name = 'OMAR AIAgentInterrupt';
  }
}
