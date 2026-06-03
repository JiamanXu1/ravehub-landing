'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, QrCode } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <footer className="relative bg-gradient-to-br from-deep-dark via-dark-bg to-deep-dark border-t border-border-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* 主要内容 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* 快速链接 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-neon-green font-bold text-lg mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-neon-green transition-colors"
                >
                  立即下载 APP
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-gray hover:text-neon-green transition-colors"
                >
                  关于我们
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-neon-green transition-colors"
                >
                  用户协议
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-neon-green transition-colors"
                >
                  隐私政策
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 入驻申请 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-electric-purple font-bold text-lg mb-6">入驻申请</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-electric-purple transition-colors"
                >
                  主办方入驻
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-electric-purple transition-colors"
                >
                  DJ 入驻
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-electric-purple transition-colors"
                >
                  厂牌入驻
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-gray hover:text-electric-purple transition-colors"
                >
                  小队入驻
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 联系我们 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-neon-green font-bold text-lg mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-neon-green flex-shrink-0" />
                <span className="text-text-gray text-sm">contact@ravehub.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-electric-purple flex-shrink-0" />
                <span className="text-text-gray text-sm">Ravehub_Official</span>
              </li>
              <li className="flex items-center gap-3">
                <QrCode size={18} className="text-neon-green flex-shrink-0" />
                <span className="text-text-gray text-sm">扫码加入官方社群</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* 分隔线 */}
        <div className="border-t border-border-dark mb-8"></div>

        {/* 版权信息 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-text-gray text-sm"
        >
          <p>© 2026 Ravehub. All rights reserved.</p>
          <p className="mt-2">所有电音爱好者共同的家。</p>
        </motion.div>
      </div>
    </footer>
  )
}
