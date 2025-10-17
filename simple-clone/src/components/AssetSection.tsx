import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import type { AssetSection as AssetSectionType } from '../types'
import AssetItem from './AssetItem'

interface AssetSectionProps {
  section: AssetSectionType
  index: number
}

export default function AssetSection({ section, index }: AssetSectionProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      {/* 头部 */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{section.emoji}</span>
            <h3 className="font-semibold text-gray-900 text-sm">
              {section.title}
            </h3>
          </div>
          {section.moreLink && (
            <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">
              <span>More</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* 资产列表 */}
      <div className="px-4 py-2">
        {section.data.map((asset, assetIndex) => (
          <AssetItem 
            key={asset.id} 
            asset={asset} 
            index={assetIndex}
          />
        ))}
      </div>
    </motion.div>
  )
}