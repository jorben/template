import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Send, ArrowLeft, Users, Bot, Plus } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Avatar } from "../components/ui/Avatar"
import { Badge } from "../components/ui/Badge"
import { Dialog } from "../components/ui/Dialog"
import { useUserStore } from "../store/useUserStore"
import { useRoomStore } from "../store/useRoomStore"
import { useChatStore, type Message, type Participant } from "../store/useChatStore"
import { cn } from "../lib/utils"
import { format } from "date-fns"

const AI_PERSONAS = [
  { id: "ai-1", name: "Tech Guru", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Tech", role: "Expert in Technology" },
  { id: "ai-2", name: "Creative Muse", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Muse", role: "Creative Writer" },
  { id: "ai-3", name: "Logic Bot", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Logic", role: "Analytical Thinker" },
]

export default function ChatRoom() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const user = useUserStore((state) => state.user)
  const { rooms } = useRoomStore()
  const { messages, participants, addMessage, addParticipant } = useChatStore()
  
  const [inputValue, setInputValue] = useState("")
  const [showParticipants, setShowParticipants] = useState(false)
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const room = rooms.find((r) => r.id === roomId)
  const roomMessages = messages[roomId!] || []
  const roomParticipants = participants[roomId!] || []

  // Initialize room participants if empty
  useEffect(() => {
    if (roomId && user && (!participants[roomId] || participants[roomId].length === 0)) {
      addParticipant(roomId, {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        role: room?.hostId === user.id ? 'host' : 'member'
      })
    }
  }, [roomId, user, participants, addParticipant, room])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [roomMessages])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !user || !roomId) return

    const newMessage: Message = {
      id: crypto.randomUUID(),
      roomId,
      senderId: user.id,
      senderName: user.name,
      senderAvatar: user.avatar,
      content: inputValue,
      timestamp: new Date(),
    }

    addMessage(roomId, newMessage)
    setInputValue("")

    // Check for AI mentions
    const mentionedAI = roomParticipants.find(p => p.isAi && inputValue.includes(`@${p.name}`))
    if (mentionedAI) {
      setTimeout(() => {
        const aiResponse: Message = {
          id: crypto.randomUUID(),
          roomId,
          senderId: mentionedAI.id,
          senderName: mentionedAI.name,
          senderAvatar: mentionedAI.avatar,
          content: `Hello ${user.name}! I noticed you mentioned me. As ${mentionedAI.name}, I think that's an interesting point.`,
          timestamp: new Date(),
          isAi: true
        }
        addMessage(roomId, aiResponse)
      }, 1500)
    }
  }

  const handleInviteAI = (persona: typeof AI_PERSONAS[0]) => {
    if (!roomId) return
    
    const newParticipant: Participant = {
      id: persona.id,
      name: persona.name,
      avatar: persona.avatar,
      isAi: true,
      role: 'member'
    }
    
    addParticipant(roomId, newParticipant)
    setIsInviteOpen(false)
    
    // AI Introduction
    addMessage(roomId, {
      id: crypto.randomUUID(),
      roomId,
      senderId: persona.id,
      senderName: persona.name,
      senderAvatar: persona.avatar,
      content: `Hello everyone! I'm ${persona.name}, and I'm excited to join this conversation as a ${persona.role}.`,
      timestamp: new Date(),
      isAi: true
    })
  }

  if (!room) return <div>Room not found</div>

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex h-screen flex-col bg-background"
    >
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-white/10 bg-background/50 px-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/lobby")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">{room.name}</h1>
            <p className="text-xs text-muted-foreground">{roomParticipants.length} online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsInviteOpen(true)}
            title="Invite AI"
          >
            <Bot className="h-5 w-5 text-primary" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowParticipants(!showParticipants)}
          >
            <Users className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {roomMessages.map((msg) => {
              const isMe = msg.senderId === user?.id
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-3 max-w-[80%]",
                    isMe ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <Avatar src={msg.senderAvatar} fallback={msg.senderName} size="sm" />
                  <div className={cn(
                    "flex flex-col gap-1",
                    isMe ? "items-end" : "items-start"
                  )}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{msg.senderName}</span>
                      {msg.isAi && <Badge variant="glass" className="text-[10px] px-1 py-0 h-4">AI</Badge>}
                      <span className="text-[10px] text-muted-foreground/50">
                        {format(new Date(msg.timestamp), "HH:mm")}
                      </span>
                    </div>
                    <div className={cn(
                      "rounded-2xl px-4 py-2 text-sm shadow-sm",
                      isMe 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-card border border-white/10 rounded-tl-none"
                    )}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-background/50 backdrop-blur-md">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message... (@ to mention AI)"
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Participants Sidebar */}
        <AnimatePresence>
          {showParticipants && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-l border-white/10 bg-card/30 backdrop-blur-md overflow-hidden"
            >
              <div className="p-4 w-[280px]">
                <h3 className="font-semibold mb-4">Participants</h3>
                <div className="space-y-3">
                  {roomParticipants.map((p) => (
                    <div key={p.id} className="flex items-center gap-3">
                      <Avatar src={p.avatar} fallback={p.name} size="sm" status="online" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium flex items-center gap-2">
                          {p.name}
                          {p.isAi && <Badge variant="glass" className="text-[10px] px-1 py-0 h-4">AI</Badge>}
                        </span>
                        <span className="text-xs text-muted-foreground capitalize">{p.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Invite AI Modal */}
      <Dialog
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        title="Invite AI Persona"
      >
        <div className="grid grid-cols-1 gap-4 py-4">
          {AI_PERSONAS.map((persona) => (
            <div 
              key={persona.id}
              className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => handleInviteAI(persona)}
            >
              <div className="flex items-center gap-3">
                <Avatar src={persona.avatar} fallback={persona.name} />
                <div>
                  <p className="font-medium">{persona.name}</p>
                  <p className="text-xs text-muted-foreground">{persona.role}</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Dialog>
    </motion.div>
  )
}