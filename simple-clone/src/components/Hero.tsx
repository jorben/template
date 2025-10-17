import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '../utils/cn'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* User Avatars */}
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "w-12 h-12 rounded-full border-4 border-white bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white font-semibold",
                    i === 6 && "relative"
                  )}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {i === 6 ? "+" : i}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build your next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 leading-[1.3]">
              big idea
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple helps you build beautiful, modern websites and applications 
            with our carefully crafted components and templates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-primary flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['Startups', 'Web Apps', 'eCommerce', 'Enterprise'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-16 -left-48 w-96 h-96 bg-fuchsia-100 rounded-full opacity-60 blur-3xl"></div>
        {/* New large gradient circle positioned center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100 rounded-full opacity-60 blur-3xl"></div>
      </div>
      
    </section>
  )
}