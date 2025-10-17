import React from 'react'

interface MiniChartProps {
  data: number[]
  isPositive: boolean
  width?: number
  height?: number
}

export default function MiniChart({ 
  data, 
  isPositive, 
  width = 80, 
  height = 30 
}: MiniChartProps) {
  if (!data || data.length < 2) {
    return <div className={`w-[${width}px] h-[${height}px]`} />
  }

  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)
  const range = maxValue - minValue || 1

  // 生成SVG路径
  const pathData = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width
      const y = height - ((value - minValue) / range) * height
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  const strokeColor = isPositive ? '#10b981' : '#ef4444'
  const fillColor = isPositive ? '#10b98120' : '#ef444420'

  // 创建填充区域路径
  const fillPath = `${pathData} L ${width} ${height} L 0 ${height} Z`

  return (
    <div className={`w-[${width}px] h-[${height}px]`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        {/* 填充区域 */}
        <path
          d={fillPath}
          fill={fillColor}
          className="transition-all duration-300"
        />
        {/* 线条 */}
        <path
          d={pathData}
          stroke={strokeColor}
          strokeWidth="2"
          fill="none"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  )
}