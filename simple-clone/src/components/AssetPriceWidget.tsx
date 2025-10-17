import React from 'react'
import { motion } from 'framer-motion'
import type { AssetSection as AssetSectionType } from '../types'
import AssetSection from './AssetSection'

interface AssetPriceWidgetProps {
  sections: AssetSectionType[]
  className?: string
}

export default function AssetPriceWidget({ sections, className = '' }: AssetPriceWidgetProps) {
  return (
    <motion.div
      className={`w-full max-w-6xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* 网格布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <AssetSection 
            key={section.title} 
            section={section} 
            index={index}
          />
        ))}
      </div>
      
      {/* 底部说明文字 */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-sm text-gray-500">
          Real-time market data • Updated every 30 seconds
        </p>
      </motion.div>
    </motion.div>
  )
}