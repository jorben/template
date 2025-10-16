import type { NavItem, Feature, Testimonial, Brand } from '../types'

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