import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Plus, Search, Users, Sparkles, LogOut } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Dialog } from "../components/ui/Dialog"
import { Avatar } from "../components/ui/Avatar"
import { useUserStore } from "../store/useUserStore"
import { useRoomStore } from "../store/useRoomStore"

export default function Lobby() {
  const navigate = useNavigate()
  const user = useUserStore((state) => state.user)
  const logout = useUserStore((state) => state.logout)
  const { rooms, addRoom } = useRoomStore()
  
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  // Create Room State
  const [newRoomName, setNewRoomName] = useState("")
  const [newRoomDesc, setNewRoomDesc] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const handleGenerateDesc = () => {
    if (!newRoomName) return
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setNewRoomDesc(`Welcome to ${newRoomName}! This is a space dedicated to exploring the depths of this topic. Join us for insightful conversations, expert opinions, and a community of like-minded individuals passionate about ${newRoomName}. Let's connect and learn together!`)
      setIsGenerating(false)
    }, 1500)
  }

  const handleCreateRoom = () => {
    if (!newRoomName || !user) return
    
    const newRoom = {
      id: crypto.randomUUID(),
      name: newRoomName,
      description: newRoomDesc || `A place to discuss ${newRoomName}`,
      hostId: user.id,
      participantsCount: 1,
      tags: ["New", "Community"],
      createdAt: new Date()
    }
    
    addRoom(newRoom)
    setIsCreateOpen(false)
    setNewRoomName("")
    setNewRoomDesc("")
    navigate(`/room/${newRoom.id}`)
  }

  const filteredRooms = rooms.filter(room => 
    room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    room.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen p-6 md:p-10 space-y-8"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lobby</h1>
          <p className="text-muted-foreground">Explore active chat rooms or create your own.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-card/50 p-2 rounded-full border border-white/5 pr-4">
            <Avatar 
              src={user?.avatar} 
              fallback={user?.name || "U"} 
              status="online"
            />
            <span className="font-medium hidden sm:inline-block">{user?.name}</span>
          </div>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Input 
            placeholder="Search rooms..." 
            icon={<Search className="h-4 w-4" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setIsCreateOpen(true)} leftIcon={<Plus className="h-4 w-4" />}>
          Create Room
        </Button>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/room/${room.id}`)}
            className="cursor-pointer"
          >
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {room.participantsCount}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 mt-2">
                  {room.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-2 flex-wrap">
                {room.tags.map(tag => (
                  <Badge key={tag} variant="glass" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Create Room Modal */}
      <Dialog
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Create New Room"
      >
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Room Name</label>
            <Input
              placeholder="e.g. Quantum Computing"
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Description</label>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 text-xs text-primary"
                onClick={handleGenerateDesc}
                disabled={!newRoomName || isGenerating}
              >
                <Sparkles className="mr-1 h-3 w-3" />
                {isGenerating ? "Generating..." : "AI Enhance"}
              </Button>
            </div>
            <textarea
              className="flex min-h-[100px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none backdrop-blur-sm"
              placeholder="Describe your room topic..."
              value={newRoomDesc}
              onChange={(e) => setNewRoomDesc(e.target.value)}
            />
          </div>

          <div className="pt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateRoom} disabled={!newRoomName}>Create Room</Button>
          </div>
        </div>
      </Dialog>
    </motion.div>
  )
}