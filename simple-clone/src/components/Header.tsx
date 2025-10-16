import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navItems } from '../data/mockData'
import { cn } from '../utils/cn'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              Simple
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
                
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    {/* Invisible gap filler that extends above the dropdown */}
                    <div
                      className="absolute top-0 left-0 right-0 h-4 bg-transparent"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                    ></div>
                    {/* Dropdown menu */}
                    <div
                      className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                    {item.children?.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </button>
            <button className="btn-primary text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="flex items-center justify-between text-gray-600 py-2">
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-gray-500 hover:text-gray-900"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-600 hover:text-gray-900 py-2"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full text-left text-gray-600 hover:text-gray-900 py-2">
                  Login
                </button>
                <button className="w-full btn-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}