import { create } from 'zustand'

export interface Message {
  id: string
  roomId: string
  senderId: string
  senderName: string
  senderAvatar: string
  content: string
  timestamp: Date
  isAi?: boolean
}

export interface Participant {
  id: string
  name: string
  avatar: string
  isAi?: boolean
  role?: 'host' | 'member'
}

interface ChatState {
  messages: Record<string, Message[]>
  participants: Record<string, Participant[]>
  addMessage: (roomId: string, message: Message) => void
  addParticipant: (roomId: string, participant: Participant) => void
  removeParticipant: (roomId: string, participantId: string) => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: {},
  participants: {},
  addMessage: (roomId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [roomId]: [...(state.messages[roomId] || []), message],
      },
    })),
  addParticipant: (roomId, participant) =>
    set((state) => ({
      participants: {
        ...state.participants,
        [roomId]: [...(state.participants[roomId] || []), participant],
      },
    })),
  removeParticipant: (roomId, participantId) =>
    set((state) => ({
      participants: {
        ...state.participants,
        [roomId]: (state.participants[roomId] || []).filter((p) => p.id !== participantId),
      },
    })),
}))