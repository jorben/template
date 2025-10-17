import type { NavItem, Feature, Testimonial, Brand, FinancialAsset, AssetSection } from '../types'

export const navItems: NavItem[] = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Docs', href: '#docs' },
  { 
    label: 'Extra', 
    href: '#extra',
    children: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' }
    ]
  }
]

export const features: Feature[] = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Built with performance in mind. Our platform delivers blazing fast experiences.'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee.'
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Carefully crafted components with attention to every detail.'
  },
  {
    icon: '⚡',
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows.'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Get deep insights into your data with powerful analytics tools.'
  },
  {
    icon: '🌍',
    title: 'Global Scale',
    description: 'Scale your business globally with our distributed infrastructure.'
  }
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: '👩‍💼',
    content: 'This platform has transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 40%.',
    date: '2 days ago'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: '👨‍💻',
    content: 'The integration capabilities are outstanding. We were able to connect all our tools in minutes, not days.',
    date: '1 week ago'
  },
  {
    name: 'Emily Davis',
    role: 'Design Lead',
    company: 'CreativeStudio',
    avatar: '👩‍🎨',
    content: 'Beautiful design meets powerful functionality. Our clients love the modern interface and smooth experience.',
    date: '3 days ago'
  }
]

export const brands: Brand[] = [
  { name: 'GitHub', logo: '🐙' },
  { name: 'Simple', logo: '⚡' },
  { name: 'Google', logo: '🔍' },
  { name: 'Microsoft', logo: '🪟' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Netflix', logo: '🎬' }
]

export const additionalFeatures = [
  {
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time with live updates and comments.'
  },
  {
    title: 'Advanced Security',
    description: 'Enterprise-grade security features to protect your data and privacy.'
  },
  {
    title: 'Custom Integrations',
    description: 'Build custom integrations with our powerful API and webhooks.'
  },
  {
    title: '24/7 Support',
    description: 'Get help whenever you need it with our round-the-clock support team.'
  }
]

// 生成模拟图表数据
const generateChartData = (basePrice: number, volatility: number = 0.1): number[] => {
  const data = []
  let currentPrice = basePrice
  for (let i = 0; i < 20; i++) {
    const change = (Math.random() - 0.5) * volatility * currentPrice
    currentPrice += change
    data.push(currentPrice)
  }
  return data
}

// 金融资产模拟数据
export const trendingAssets: FinancialAsset[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    price: 43180.13,
    change24h: 1250.45,
    changePercent: 2.98,
    chartData: generateChartData(43180.13, 0.05),
    type: 'crypto',
    market: 'Binance'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: '♦',
    price: 3480.65,
    change24h: -125.30,
    changePercent: -3.47,
    chartData: generateChartData(3480.65, 0.08),
    type: 'crypto',
    market: 'Coinbase'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    icon: '◉',
    price: 150.2,
    change24h: 8.45,
    changePercent: 5.96,
    chartData: generateChartData(150.2, 0.12),
    type: 'crypto',
    market: 'Binance'
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    icon: '🐕',
    price: 0.1572,
    change24h: 0.0089,
    changePercent: 6.01,
    chartData: generateChartData(0.1572, 0.15),
    type: 'crypto',
    market: 'Kraken'
  }
]

export const topGainers: FinancialAsset[] = [
  {
    id: 'pappay',
    name: 'PAPPAY',
    symbol: 'PPAY',
    icon: '🥭',
    price: 0.00374,
    change24h: 0.00089,
    changePercent: 31.2,
    chartData: generateChartData(0.00374, 0.25),
    type: 'crypto',
    market: 'PancakeSwap'
  },
  {
    id: 'bitcoin-asia',
    name: 'Bitcoin Asia',
    symbol: 'BTCA',
    icon: '🌏',
    price: 0.02096,
    change24h: 0.00456,
    changePercent: 27.8,
    chartData: generateChartData(0.02096, 0.20),
    type: 'crypto',
    market: 'Uniswap'
  },
  {
    id: 'moonrock',
    name: 'MoonRock',
    symbol: 'MOON',
    icon: '🌙',
    price: 0.004907,
    change24h: 0.00098,
    changePercent: 24.9,
    chartData: generateChartData(0.004907, 0.18),
    type: 'crypto',
    market: 'SushiSwap'
  },
  {
    id: 'ninjafloki',
    name: 'NinjaFloki',
    symbol: 'NFLOKI',
    icon: '🥷',
    price: 0.000123,
    change24h: 0.000023,
    changePercent: 23.0,
    chartData: generateChartData(0.000123, 0.22),
    type: 'crypto',
    market: 'PancakeSwap'
  }
]

export const recentlyAdded: FinancialAsset[] = [
  {
    id: 'metacraft',
    name: 'MetaCraft',
    symbol: 'MCT',
    icon: '⚒️',
    price: 0.0608,
    change24h: -0.0045,
    changePercent: -6.89,
    chartData: generateChartData(0.0608, 0.10),
    type: 'crypto',
    market: 'Binance'
  },
  {
    id: 'frog',
    name: 'Frog',
    symbol: 'FROG',
    icon: '🐸',
    price: 0.5875,
    change24h: -0.0234,
    changePercent: -3.83,
    chartData: generateChartData(0.5875, 0.08),
    type: 'crypto',
    market: 'Uniswap'
  },
  {
    id: 'musk-doge',
    name: 'Musk Doge',
    symbol: 'MDOGE',
    icon: '🚀',
    price: 0.04041,
    change24h: 0.00156,
    changePercent: 4.01,
    chartData: generateChartData(0.04041, 0.12),
    type: 'crypto',
    market: 'PancakeSwap'
  },
  {
    id: '2share',
    name: '2SHARE',
    symbol: '2SHR',
    icon: '💎',
    price: 1366.24,
    change24h: 45.67,
    changePercent: 3.46,
    chartData: generateChartData(1366.24, 0.06),
    type: 'crypto',
    market: 'Binance'
  }
]

export const assetSections: AssetSection[] = [
  {
    title: 'Trending',
    emoji: '🔥',
    data: trendingAssets,
    moreLink: '#trending'
  },
  {
    title: 'Top Gainers',
    emoji: '🚀',
    data: topGainers,
    moreLink: '#gainers'
  },
  {
    title: 'Recently Added',
    emoji: '💎',
    data: recentlyAdded,
    moreLink: '#recent'
  }
]