'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-deep-dark via-dark-bg to-deep-dark overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">关于我们</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-gray leading-relaxed text-lg">
              我们是一群爱了电音十年的老炮。
            </p>

            <p className="text-text-gray leading-relaxed">
              从第一次在现场被节拍击中的震撼，到一次次散场后围坐夜宵局的畅谈；从独自奔赴千里看演出的孤独，到和小队一起蹦到天亮的热血 —— 我们太懂电音爱好者的所有喜怒哀乐。
            </p>

            <p className="text-text-gray leading-relaxed">
              我们曾遗憾，为什么没有一个真正属于我们的地方？
            </p>

            <p className="text-text-gray leading-relaxed">
              在这里，我们不用在泛社交平台小心翼翼地捞队友，不用在各种零散的群里翻找活动信息，不用看完演出后找不到地方吐槽刚才 DJ 的表现。
            </p>

            <div className="pt-4 border-t border-border-dark">
              <p className="text-neon-green font-semibold mb-2">于是，我们做了 Ravehub。</p>
              <p className="text-text-gray leading-relaxed">
                这不是一个冰冷的工具，而是一个我们想和所有同好一起搭建的家。这里的每一条资讯，每一个打分，每一段现场视频，都来自和你一样的电音人。我们只是搭好了架子，而你，才是这个家真正的主人。
              </p>
            </div>
          </motion.div>

          {/* 图片占位符 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden card-base bg-gradient-to-br from-electric-purple/20 to-neon-green/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-text-gray text-lg">
                  🎵 在这里放置<br />
                  团队合照或<br />
                  电音节现场图
                </p>
              </div>
            </div>
            {/* 霓虹灯边框效果 */}
            <div className="absolute -inset-1 bg-gradient-neon opacity-0 rounded-2xl blur group-hover:opacity-100 transition duration-300 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
