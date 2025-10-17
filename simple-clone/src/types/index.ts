export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  content: string
  date: string
}

export interface Brand {
  name: string
  logo: string
}

export interface FinancialAsset {
  id: string
  name: string
  symbol: string
  icon: string
  price: number
  change24h: number
  changePercent: number
  chartData: number[]
  type: 'crypto' | 'stock' | 'fund' | 'commodity'
  market?: string
}

export interface AssetSection {
  title: string
  emoji: string
  data: FinancialAsset[]
  moreLink?: string
}

export interface WidgetConfig {
  sections: AssetSection[]
  theme?: 'light' | 'dark'
  updateInterval?: number
  showChart?: boolean
  showMarket?: boolean
}