# OpenClaw Training Site

一个现代化的培训类网站模板，基于 Next.js 16 + Tailwind CSS 3.4 + Lucide React 构建。

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.9.0-green?style=flat-square&logo=node.js)

## ✨ 特性

- 🎨 现代化设计风格
- 📱 完全响应式布局
- 🎯 清晰的信息层次
- 🚀 基于 Next.js 16 + Turbopack
- 🎨 Tailwind CSS 3.4.19 样式系统
- 📦 Lucide React 图标库
- 🌓 支持深色模式
- ♿ 良好的可访问性
- ⚡ 优化的性能

## 📸 截图

### 桌面端
![Desktop Preview](https://via.placeholder.com/1200x800/1a1a1a/666666?text=Desktop+Preview)

### 移动端
![Mobile Preview](https://via.placeholder.com/375x667/1a1a1a/666666?text=Mobile+Preview)

## 🚀 快速开始

### 环境要求

- Node.js >= 20.9.0 (推荐 v24.13.1)
- npm >= 9.0.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/yourusername/openclaw-training-site.git
cd openclaw-training-site

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 访问应用

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
openclaw-training-site/
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 布局组件
│   └── page.tsx             # 主页面
├── components/
│   ├── Header.tsx           # 头部组件
│   ├── Sidebar.tsx          # 侧边导航栏
│   └── Footer.tsx           # 底部组件
├── config/
│   └── site.ts             # 站点配置
├── lib/
│   └── utils.ts            # 工具函数
├── public/                  # 静态资源
├── tailwind.config.ts       # Tailwind 配置
├── postcss.config.mjs       # PostCSS 配置
├── tsconfig.json            # TypeScript 配置
└── next.config.ts           # Next.js 配置
```

## 🎨 设计风格

### 布局
- **左侧导航栏**: 紧凑布局 (w-56), 固定定位, 自定义滚动条
- **右侧内容区**: 使用 `prose-base`, 网格布局, 渐变背景

### 字体大小
- 大标题: `text-3xl`
- 中标题: `text-xl`
- 正文: `text-sm`
- 导航: `text-xs`

### 颜色主题
- 蓝色系: 技术、链接
- 绿色系: 成功、通过
- 紫色系: 智能、创意
- 橙色系: 警告、注意
- 红色系: 错误、危险

### 图标
所有图标使用 [Lucide React](https://lucide.dev/) 库。

## 🛠️ 技术栈

- **框架**: Next.js 16.1.6 (Turbopack)
- **UI 库**: React 19.2.3
- **样式**: Tailwind CSS 3.4.19
- **语言**: TypeScript 5.x
- **图标**: Lucide React ^0.577.0
- **动画**: Framer Motion ^12.35.2
- **主题**: next-themes ^0.4.6

## 📦 常用命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🌐 部署

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/openclaw-training-site)

### 其他平台

本项目是标准的 Next.js 应用，可以部署到任何支持 Node.js 的平台：

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)

## 📝 自定义

### 修改内容

编辑 `app/page.tsx` 文件来修改网站内容。

### 修改样式

编辑 `app/globals.css` 和 `tailwind.config.ts` 来自定义样式。

### 添加新章节

```tsx
<section id="new-section" className="mb-16 scroll-mt-20">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
      <IconName className="w-6 h-6 text-primary" />
    </div>
    <h2 className="text-3xl font-bold">章节标题</h2>
  </div>
  {/* 章节内容 */}
</section>
```

### 添加新导航项

在 `components/Sidebar.tsx` 的 `sections` 数组中添加新项：

```tsx
const sections = [
  // ... 现有章节
  { id: 'new-section', label: '新章节', labelEn: 'New Section', icon: IconName },
];
```

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📮 联系方式

- 项目地址: [https://github.com/yourusername/openclaw-training-site](https://github.com/yourusername/openclaw-training-site)
- 问题反馈: [Issues](https://github.com/yourusername/openclaw-training-site/issues)

---

**注意**: 请确保使用 Node.js >= 20.9.0 版本运行本项目。推荐使用 v24.13.1。

**重要**: 本项目使用 Tailwind CSS 3.4.19 版本，不要升级到 4.x 版本（存在兼容性问题）。