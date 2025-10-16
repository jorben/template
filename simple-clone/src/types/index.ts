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