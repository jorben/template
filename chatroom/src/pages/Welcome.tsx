import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Dialog } from "../components/ui/Dialog"
import { Input } from "../components/ui/Input"
import { useUserStore } from "../store/useUserStore"
import { Sparkles, ArrowRight, User } from "lucide-react"

export default function Welcome() {
  const [isSetupOpen, setIsSetupOpen] = useState(false)
  const [name, setName] = useState("")
  const navigate = useNavigate()
  const setUser = useUserStore((state) => state.setUser)

  const handleJoin = () => {
    if (!name.trim()) return
    
    const newUser = {
      id: crypto.randomUUID(),
      name: name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    }
    
    setUser(newUser)
    navigate("/lobby")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl space-y-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-md"
        >
          <Sparkles className="mr-2 h-4 w-4 text-yellow-400" />
          <span className="text-gradient font-medium">Next Gen AI Chat Experience</span>
        </motion.div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Connect with <span className="text-gradient">Future</span>
          <br />
          Chat with <span className="text-primary">AI</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Experience a new way of communication. Join immersive chat rooms, interact with AI personas, and connect with people worldwide in a stunning environment.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg shadow-2xl shadow-primary/50"
            onClick={() => setIsSetupOpen(true)}
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      <Dialog
        isOpen={isSetupOpen}
        onClose={() => setIsSetupOpen(false)}
        title="Create Your Profile"
        className="sm:max-w-md"
      >
        <div className="space-y-6 py-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20 bg-muted">
              {name ? (
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                  alt="Avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <User className="h-full w-full p-4 text-muted-foreground" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Your avatar is generated based on your name
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nickname
            </label>
            <Input
              placeholder="Enter your nickname..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-lg"
              autoFocus
            />
          </div>

          <Button
            className="w-full"
            size="lg"
            onClick={handleJoin}
            disabled={!name.trim()}
          >
            Enter Lobby
          </Button>
        </div>
      </Dialog>
    </motion.div>
  )
}