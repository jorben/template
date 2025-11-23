import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Welcome from "./pages/Welcome"
import Lobby from "./pages/Lobby"
import ChatRoom from "./pages/ChatRoom"
import { useUserStore } from "./store/useUserStore"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user)
  if (!user) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/lobby"
          element={
            <ProtectedRoute>
              <Lobby />
            </ProtectedRoute>
          }
        />
        <Route
          path="/room/:roomId"
          element={
            <ProtectedRoute>
              <ChatRoom />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
