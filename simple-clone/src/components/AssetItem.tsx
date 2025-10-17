import React from 'react'
import { motion } from 'framer-motion'
import type { FinancialAsset } from '../types'
import MiniChart from './MiniChart'
import { cn } from '../utils/cn'

interface AssetItemProps {
  asset: FinancialAsset
  index: number
}

export default function AssetItem({ asset, index }: AssetItemProps) {
  const isPositive = asset.changePercent >= 0
  const formattedPrice = asset.price >= 1 
    ? `$${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
    : `$${asset.price.toFixed(6)}`
  
  const formattedChange = isPositive ? `+${asset.changePercent.toFixed(2)}%` : `${asset.changePercent.toFixed(2)}%`

  return (
    <motion.div
      className="flex items-center justify-between py-3 px-1 hover:bg-gray-50 rounded-lg transition-colors duration-200"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* 左侧：图标和名称 */}
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center text-sm font-semibold">
          {asset.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-medium text-gray-900 text-sm truncate">
            {asset.name}
          </div>
          <div className="text-xs text-gray-500">
            {asset.symbol}
          </div>
        </div>
      </div>

      {/* 中间：价格 */}
      <div className="text-right px-2">
        <div className="font-semibold text-gray-900 text-sm">
          {formattedPrice}
        </div>
        <div className={cn(
          "text-xs font-medium",
          isPositive ? "text-green-600" : "text-red-600"
        )}>
          {formattedChange}
        </div>
      </div>

      {/* 右侧：图表 */}
      <div className="flex-shrink-0">
        <MiniChart 
          data={asset.chartData} 
          isPositive={isPositive}
          width={60}
          height={24}
        />
      </div>
    </motion.div>
  )
}