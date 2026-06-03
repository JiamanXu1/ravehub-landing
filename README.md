# Ravehub Landing Page

🎵 **Ravehub** - 给所有电音爱好者一个家

由电音人共建，为电音人而生的轻社群、轻社交平台官网。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

## 电音风格配色方案

- 🟢 **霍光绿**: `#00FF00` (`neon-green`)
- 🟣 **电光紫**: `#9D00FF` (`electric-purple`)
- ⚫ **深色背景**: `#0A0E27` (`deep-dark`)
- 🟦 **卡片背景**: `#1A1F35` (`card-dark`)
- 📱 **文字灰**: `#A0A9C9` (`text-gray`)

## 项目结构

```
ravehub-landing/
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页面
│   └── globals.css         # 全局样式
├── components/
│   ├── Hero.tsx            # Hero 横幅区
│   ├── About.tsx           # 品牌故事区
│   ├── CoreFeatures.tsx    # 核心能力总览
│   ├── NewsCenter.tsx      # 资讯中心功能
│   ├── SocialSquare.tsx    # 社交广场功能
│   ├── Advantages.tsx      # 差异化优势区
│   ├── CTASection.tsx      # 加入我们 CTA
│   └── Footer.tsx          # 底部 Footer
├── public/                 # 静态资源
├── tailwind.config.ts      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
├── next.config.js          # Next.js 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖
```

## 8 个核心板块

1. **Hero 横幅区** - 品牌主视觉，CTA 按钮
2. **品牌故事区** - 关于我们，团队故事
3. **核心能力总览区** - 资讯中心 + 社交广场
4. **资讯中心功能详情区** - 7 个特色功能展示
5. **社交广场功能详情区** - 5 个社交功能展示
6. **差异化优势区** - 4 大核心优势
7. **加入我们 CTA 区** - 最后的行动号召
8. **Footer 区** - 快速链接、入驻申请、联系方式

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看结果。

### 生产构建

```bash
npm run build
npm run start
```

## 功能特性

✅ **响应式设计** - 完美适配桌面、平板、手机
✅ **平滑滚动动画** - Framer Motion 实现流畅动画
✅ **现代电音风格** - 荧光色 + 深色背景的科技感
✅ **性能优化** - Next.js 自动代码分割
✅ **SEO 优化** - 完整的元数据和结构化数据
✅ **无障碍访问** - 遵循 WCAG 标准

## 自定义配置

### 修改品牌色彩

编辑 `tailwind.config.ts` 中的颜色配置：

```typescript
colors: {
  'neon-green': '#00FF00',
  'electric-purple': '#9D00FF',
  // ...
}
```

### 添加图片

在 `public/images/` 目录下添加图片，然后在组件中使用。

## 部署

### Vercel（推荐）

```bash
npm i -g vercel
vercel
```

### 其他平台

支持任何支持 Node.js 的平台（Netlify、GitHub Pages 等）。

## 贡献指南

欢迎所有电音爱好者的贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 联系方式

- 📧 邮箱: contact@ravehub.com
- 💬 微信: Ravehub_Official
- 🔗 官网: https://ravehub.com

---

**Ravehub** - 所有电音爱好者共同的家 🎵🏠
