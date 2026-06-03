'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="cta"
      ref={ref}
      className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center py-20 md:py-32"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-dark via-dark-bg to-deep-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-purple/30 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-gradient">加入我们，一起打造这个家</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-gray text-lg mb-4"
        >
          Ravehub 刚刚起步，未来还有无限可能。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-gray text-lg mb-12"
        >
          你的每一次分享，每一个建议，每一次打卡，都在让这个家变得更好。
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-4 shadow-neon-glow"
        >
          立即下载，开启你的电音新旅程
        </motion.button>
      </div>
    </section>
  )
}
