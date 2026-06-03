'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Zap, Users, Music, Star } from 'lucide-react'

export default function SocialSquare() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const features = [
    {
      icon: User,
      title: '我的电音生涯',
      description:
        '你的专属个人主页，记录你在 Ravehub 的每一步成长。在这里，你可以管理所有发布和收藏，提前规划电音节专属观演路线，不错过任何一个你爱的 DJ。还有现场滚动灯箱、桌面倒计时小组件、个人二维码等实用工具，更有成就系统，帮你解锁专属徽章和头像框，打造独一无二的电音身份。',
    },
    {
      icon: Zap,
      title: '圈子动态',
      description:
        '电音版的内容分享社区。推荐页给你精选优质内容，关注页只看你在意的人的动态，最新页按时间呈现所有用户的分享。就像你的专属电音朋友圈，想说什么就说什么。',
    },
    {
      icon: Users,
      title: '小队系统',
      description:
        '专为电音文化打造的社群组织。第一次去电音节想找人组队？怕在别的平台遇到奇怪的人？Ravehub 的正规小队广场，让你轻松找到靠谱的同好。你也可以创建自己的小队，成为局头，带领更多人感受电音的魅力。活动期间还能发起临时聊天间，支持位置共享，几万人的现场也能一秒找到队友。',
    },
    {
      icon: Music,
      title: 'ID 分享站',
      description:
        '有些歌，只在现场听过，再也找不到了？在这里，你可以上传 DJ 现场播放但尚未发行的独家 ID，分享给所有同好。也能找到你找了很久的那首歌，满足你对一手资源的所有期待。',
    },
    {
      icon: Star,
      title: '我的打分档案',
      description:
        '集中展示你参与过的所有活动和 DJ 打分，形成你的专属电音品味档案。你的每一次评价，都在帮我们打造更公正的榜单，也在帮更多人找到好音乐。',
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
      id="social-square"
      ref={ref}
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-dark-bg via-deep-dark to-dark-bg overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">社交广场</span>
          </h2>
          <p className="text-text-gray text-lg">找到同好，组建小队</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.slice(0, 3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base p-6 group hover:translate-y-[-8px] transition-transform duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-electric-purple to-neon-green">
                    <Icon className="text-deep-dark" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-electric-purple mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-gray leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* 第二行 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-2xl"
        >
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index + 3}
                variants={itemVariants}
                className="card-base p-6 group hover:translate-y-[-8px] transition-transform duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-electric-purple to-neon-green">
                    <Icon className="text-deep-dark" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-electric-purple mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-gray leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
