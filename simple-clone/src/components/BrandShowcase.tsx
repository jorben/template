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
        <div className="relative py-16">
          {/* Main horizontal line */}
          <div className="absolute left-0 right-0 top-8 flex justify-center">
            <motion.div
              className="w-11/12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              style={{
                background: 'repeating-linear-gradient(to right, #E5E7EB 0, #E5E7EB 8px, transparent 8px, transparent 16px)'
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Brand Logos */}
          <div className="relative flex justify-center items-end gap-8 md:gap-16 lg:gap-20">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Vertical connection line */}
                <motion.div
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 w-0.5 h-8"
                  style={{
                    background: 'repeating-linear-gradient(to bottom, #E5E7EB 0, #E5E7EB 8px, transparent 8px, transparent 16px)'
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                />
                
                {/* Brand Logo */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 relative z-10">
                  {brand.logo}
                </div>
                
                {/* Brand Name */}
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