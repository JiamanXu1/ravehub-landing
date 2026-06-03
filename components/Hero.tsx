'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-deep-dark via-dark-bg to-deep-dark flex items-center justify-center">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Ravehub</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-300">给所有电音爱好者一个家</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-text-gray mb-4">由��音人共建，为电音人而生。</p>
          <p className="text-base md:text-lg text-text-gray">
            在这里，每一个节拍都有人懂，每一次狂欢都有人陪。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-16"
        >
          <button className="btn-primary">立即下载 APP</button>
          <button
            className="btn-secondary"
            onClick={() => scrollToSection('about')}
          >
            了解更多
          </button>
        </motion.div>
      </div>

      {/* 滚动指示 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-neon-green" size={32} />
      </motion.div>
    </section>
  )
}
