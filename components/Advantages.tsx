'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Zap, Scale } from 'lucide-react'

export default function Advantages() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const advantages = [
    {
      icon: Heart,
      title: '真正的共建共享',
      description:
        '这里没有平台和用户的区别，我们都是这个家的主人。每一条信息，每一个评价，都来自热爱电音的你。',
    },
    {
      icon: Target,
      title: '专注电音垂直领域',
      description:
        '我们懂电音，所有功能都围绕电音爱好者的真实需求设计。不用在泛社交平台里找同好，这里全是懂你的人。',
    },
    {
      icon: Zap,
      title: '线上线下无缝连接',
      description:
        '从决定去现场的那一刻，到活动结束后的回味，Ravehub 全程陪你。路线规划、现场组队、位置共享，帮你解决所有痛点。',
    },
    {
      icon: Scale,
      title: '公平透明的评价体系',
      description:
        '我们的打分系统，完全基于用户的真实体验。没有水军，没有刷分，只为呈现最真实的现场感受，让好音乐被更多人看见。',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="advantages"
      ref={ref}
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-deep-dark via-dark-bg to-deep-dark overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">为什么选择 Ravehub</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base p-8 text-center group hover:border-neon-green transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-neon-green to-electric-purple group-hover:shadow-neon-glow transition-shadow duration-300">
                    <Icon className="text-deep-dark" size={28} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neon-green mb-3">
                  {advantage.title}
                </h3>
                <p className="text-text-gray leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
