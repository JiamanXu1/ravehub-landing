'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Radio, Users } from 'lucide-react'

export default function CoreFeatures() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const features = [
    {
      icon: Radio,
      title: '资讯中心',
      description: '一站式掌握全球电音动态\n所有信息，由我们共同维护',
    },
    {
      icon: Users,
      title: '社交广场',
      description: '找到同好，组建小队\n让每一次狂欢都不再孤单',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-dark-bg via-deep-dark to-dark-bg overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">核心能力总览</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-base p-8 md:p-10 group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-neon-green to-electric-purple">
                      <Icon className="text-deep-dark" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neon-green mb-3">{feature.title}</h3>
                    <p className="text-text-gray leading-relaxed whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* 悬停效果 */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-green/10 to-electric-purple/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
