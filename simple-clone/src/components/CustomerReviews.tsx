import { motion } from 'framer-motion'
import { Twitter } from 'lucide-react'
import { testimonials } from '../data/mockData'

export default function CustomerReviews() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Loved by developers worldwide
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See what our customers are saying about their experience with Simple.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Twitter-like header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-primary-500" />
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Date */}
              <div className="text-sm text-gray-500">{testimonial.date}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonial cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
            <h3 className="text-xl font-semibold mb-3">Outstanding Support</h3>
            <p className="opacity-90 leading-relaxed">
              "The customer support team went above and beyond to help us implement the platform. Highly recommended!"
            </p>
            <div className="mt-4 text-sm opacity-80">
              Alex Thompson, Engineering Lead
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-dark-800 rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Game Changer</h3>
            <p className="opacity-90 leading-relaxed">
              "Simple has completely changed how we approach product development. The speed and efficiency gains are incredible."
            </p>
            <div className="mt-4 text-sm opacity-80">
              Maria Rodriguez, Product Director
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}