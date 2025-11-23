import { create } from 'zustand'

export interface Room {
  id: string
  name: string
  description: string
  hostId: string
  participantsCount: number
  tags: string[]
  createdAt: Date
}

interface RoomState {
  rooms: Room[]
  addRoom: (room: Room) => void
  setRooms: (rooms: Room[]) => void
}

// Mock initial data
const initialRooms: Room[] = [
  {
    id: '1',
    name: 'Cyberpunk Lounge',
    description: 'A place to discuss the future of tech and neon aesthetics.',
    hostId: 'system',
    participantsCount: 12,
    tags: ['Tech', 'Design'],
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'AI Ethics Debate',
    description: 'Discussing the moral implications of artificial intelligence.',
    hostId: 'system',
    participantsCount: 8,
    tags: ['AI', 'Philosophy'],
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'React Developers',
    description: 'Share your components and hooks.',
    hostId: 'system',
    participantsCount: 25,
    tags: ['Coding', 'React'],
    createdAt: new Date()
  }
]

export const useRoomStore = create<RoomState>((set) => ({
  rooms: initialRooms,
  addRoom: (room) => set((state) => ({ rooms: [room, ...state.rooms] })),
  setRooms: (rooms) => set({ rooms }),
}))