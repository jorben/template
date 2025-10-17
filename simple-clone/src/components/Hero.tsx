import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '../utils/cn'
import AssetPriceWidget from './AssetPriceWidget'
import { assetSections } from '../data/mockData'
import ellipse1 from '../assets/ellipse-1.png'
import ellipse2 from '../assets/ellipse-2.png'
import ellipse3 from '../assets/ellipse-3.png'
import star from '../assets/star.png'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* New Feature Banner */}
          <div className="flex justify-center mt-4 mb-8">
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-1 py-1 shadow-sm hover:shadow-md transition-all duration-300">
                {/* New 标签 */}
                <div className="border border-zinc-200 bg-zinc-100 text-xs px-3 py-1 rounded-full mr-4">
                  New
                </div>
                
                {/* 主要文本内容 */}
                <span className="text-gray-700">
                  全新的组件库已发布 - 现在开始构建
                </span>
                
                {/* 右侧箭头 */}
                <ArrowRight className="w-4 h-4 text-gray-400 ml-3 mr-1.5 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </motion.div>
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

          {/* Asset Price Widget */}
          <AssetPriceWidget sections={assetSections} />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -right-20 sm:-right-40 w-80 sm:w-96 h-80 sm:h-96 bg-pink-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-16 -left-20 sm:-left-48 w-80 sm:w-96 h-80 sm:h-96 bg-fuchsia-100 rounded-full opacity-60 blur-3xl"></div>
        {/* New large gradient circle positioned center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary-100 rounded-full opacity-60 blur-3xl"></div>
        
        {/* Decorative Images */}
        <motion.img 
          src={ellipse1}
          alt=""
          className="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-8 w-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        
        <motion.img 
          src={ellipse2}
          alt=""
          className="hidden sm:block absolute top-4 sm:top-20 right-64 sm:right-96 xl:right-[32rem] w-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        
        <motion.img 
          src={ellipse3}
          alt=""
          className="hidden sm:block absolute bottom-56 right-24 w-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        />
        
        <motion.img 
          src={star}
          alt=""
          className="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </div>
      
    </section>
  )
}