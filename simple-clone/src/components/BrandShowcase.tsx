import { motion } from 'framer-motion'
import { brands } from '../data/mockData'

export default function BrandShowcase() {
  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by the world's best teams
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who use our platform to build amazing products.
          </motion.p>
        </div>

        {/* Brand Logos with Connection Lines */}
        <div className="relative">
          {/* Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-32"
            viewBox="0 0 1200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main horizontal line */}
            <motion.path
              d="M50 60 H1150"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            {/* Connection lines to logos */}
            {brands.map((_, index) => {
              const x = 200 + index * 160
              return (
                <motion.path
                  key={index}
                  d={`M${x} 60 V30`}
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              )
            })}
          </svg>

          {/* Brand Logos */}
          <div className="flex justify-center items-center space-x-12 md:space-x-20 lg:space-x-28">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl mb-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {brand.logo}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="max-w-2xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                S
              </div>
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Simple has completely transformed how our team builds products. The speed and quality are unmatched."
            </blockquote>
            <div className="text-gray-600">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm">Product Manager at TechCorp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}