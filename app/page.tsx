import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { 
  FileText, Brain, Sparkles, Target, Trophy, Rocket, Shield, 
  HelpCircle, Zap, Users, Clock, TrendingUp, CheckCircle, 
  AlertTriangle, Lock, Server, Code, Globe, Calendar, MessageSquare,
  BarChart3, PenTool, Headphones, ListTodo, Search, Database,
  Mail, RefreshCw, ExternalLink, ChevronRight, ArrowRight, Star,
  X, Layers, Bot, Wrench, Coffee, Building2, Globe2, Share2,
  Heart, MessageCircle, Cpu, Terminal, Briefcase, GraduationCap,
  Lightbulb, Sparkles as Spark, ArrowUpRight, Play, BookOpen,
  Settings, Zap as Bolt, Sun, Download, Layout, Shield as ShieldIcon
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1 max-w-4xl">
            {/* Hero Section */}
            <section className="mb-16 text-center py-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                OpenClaw 培训
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                从对话到行动的革命性 AI 工具
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                v1.0 稳定版
              </div>
            </section>

            {/* 开场引入 */}
            <section id="intro" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">开场引入</h2>
              </div>

              <div className="prose prose-base dark:prose-invert max-w-none">
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">我们都面临什么挑战？</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">信息过载</p>
                        <p className="text-xs text-muted-foreground mt-1">每天处理数百封邮件、消息、通知</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <RefreshCw className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">重复性工作</p>
                        <p className="text-xs text-muted-foreground mt-1">填写表格、整理文件、回复格式化邮件</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">时间精力有限</p>
                        <p className="text-xs text-muted-foreground mt-1">想做的事太多，能做的事太少</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">创新成本高</p>
                        <p className="text-xs text-muted-foreground mt-1">从想法到实现需要数月甚至数年</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-4 h-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">协作复杂</p>
                        <p className="text-xs text-muted-foreground mt-1">跨部门沟通协调困难</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Rocket className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">创业门槛高</p>
                        <p className="text-xs text-muted-foreground mt-1">资金、人才、市场、技术多重挑战</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary p-6 rounded-r-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <p className="text-lg font-medium">OpenClaw 是什么？</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      OpenClaw 是一个革命性的 AI 工具，它就像给你的工作软件配了一个"数字团队"。
                      这个团队由多个专业能力各异的智能体组成，每个成员都擅长不同的工作领域。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 核心概念 */}
            <section id="concept" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">核心概念</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">从"对话"到"行动"</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    传统 AI 只能"说"，不能"做"。OpenClaw 突破了这个局限，让 AI 真正成为你的工作伙伴。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4 border-2 border-dashed border-muted">
                      <p className="font-medium mb-2 flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        传统 AI（ChatGPT）
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          理解问题
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          提供建议
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          撰写内容
                        </li>
                        <li className="flex items-center gap-2">
                          <X className="w-3.5 h-3.5 text-red-500" />
                          执行实际任务
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        OpenClaw
                      </p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          理解问题
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          提供建议
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          撰写内容
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                          执行实际任务
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    三大核心组件
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center shrink-0 border border-blue-500/20">
                        <Server className="w-7 h-7 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          Gateway（网关）
                          <span className="px-2 py-0.5 bg-blue-500/10 text-blue-700 text-xs rounded-full">消息中心</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          接收中心，连接飞书、企业微信、钉钉等多个渠道，统一管理消息路由
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center shrink-0 border border-green-500/20">
                        <Bot className="w-7 h-7 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          Agent（智能体）
                          <span className="px-2 py-0.5 bg-green-500/10 text-green-700 text-xs rounded-full">智能大脑</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          智能大脑，理解需求、制定计划、协调执行、整合结果
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center shrink-0 border border-purple-500/20">
                        <Wrench className="w-7 h-7 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          Skills（技能）
                          <span className="px-2 py-0.5 bg-purple-500/10 text-purple-700 text-xs rounded-full">执行团队</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          执行团队，每个技能专注于特定任务领域，如搜索、文件、数据等
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 核心价值 */}
            <section id="value" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">核心价值</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 group hover:border-blue-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">效率提升</h3>
                  <p className="text-muted-foreground text-sm">
                    自动化重复性工作，节省 30-70% 的时间，多智能体并行工作
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 group hover:border-green-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">质量提升</h3>
                  <p className="text-muted-foreground text-sm">
                    专业分工保证质量，基于数据和事实的决策，持续学习能力
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6 group hover:border-purple-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">创新加速</h3>
                  <p className="text-muted-foreground text-sm">
                    快速验证想法，从概念到原型只需几分钟，降低创业门槛
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-xl p-6 group hover:border-orange-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">一个人一个团队</h3>
                  <p className="text-muted-foreground text-sm">
                    以前需要团队协作的任务，现在一个人就能搞定，效率提升数十倍
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  多智能体协作示例
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium"><strong>小T（技术）</strong> 分析技术趋势</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold shrink-0">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium"><strong>小D（数据）</strong> 收集市场数据</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shrink-0">
                      <PenTool className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium"><strong>小W（写作）</strong> 撰写分析报告</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold shrink-0">
                      <Spark className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium"><strong>小M（总指挥）</strong> 协调整合结果</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-green-600 bg-green-500/10 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">总耗时：几分钟</span>
                  <span className="text-muted-foreground">（vs 传统方式需要一整天）</span>
                </div>
              </div>
            </section>

            {/* 应用场景 */}
            <section id="scenarios" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">应用场景</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-orange-500" />
                    个人效率
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-lg p-5 text-center border border-orange-500/10 hover:border-orange-500/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                        <Sun className="w-6 h-6 text-orange-500" />
                      </div>
                      <p className="font-medium text-sm">早间简报</p>
                      <p className="text-xs text-muted-foreground mt-1">天气、日程、待办、邮件</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-5 text-center border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-6 h-6 text-blue-500" />
                      </div>
                      <p className="font-medium text-sm">邮件管理</p>
                      <p className="text-xs text-muted-foreground mt-1">自动分类、摘要、回复</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-lg p-5 text-center border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-6 h-6 text-purple-500" />
                      </div>
                      <p className="font-medium text-sm">会议管理</p>
                      <p className="text-xs text-muted-foreground mt-1">协调时间、纪要、跟踪</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    工作场景
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">数据分析</p>
                        <p className="text-xs text-muted-foreground mt-1">自动收集、清洗、分析、可视化</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                        <PenTool className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">内容创作</p>
                        <p className="text-xs text-muted-foreground mt-1">生成文案、批量创作、多平台发布</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                        <Headphones className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">客户服务</p>
                        <p className="text-xs text-muted-foreground mt-1">7x24小时在线、智能分流</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                        <ListTodo className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">项目管理</p>
                        <p className="text-xs text-muted-foreground mt-1">任务分配、进度监控、自动报告</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-purple-500" />
                    创新创业
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-lg p-4 border border-cyan-500/10">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <Search className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">市场调研</p>
                        <p className="text-xs text-muted-foreground mt-1">自动收集行业报告、竞品分析</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-br from-violet-500/10 to-violet-500/5 rounded-lg p-4 border border-violet-500/10">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                        <Code className="w-5 h-5 text-violet-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">产品开发</p>
                        <p className="text-xs text-muted-foreground mt-1">原型生成、代码编写、自动化测试</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5 rounded-lg p-4 border border-fuchsia-500/10">
                      <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center shrink-0">
                        <Share2 className="w-5 h-5 text-fuchsia-500" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">运营推广</p>
                        <p className="text-xs text-muted-foreground mt-1">营销活动、多渠道发布、数据分析</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 成功案例 */}
            <section id="cases" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">成功案例</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Khanmigo - 可汗学院 AI 助教</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        由 GPT-4 驱动的 AI 助手，帮助教师和学生提供个性化学习支持
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-700 rounded-full text-xs flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          教案规划
                        </span>
                        <span className="px-3 py-1 bg-green-500/10 text-green-700 rounded-full text-xs flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          学生工作摘要
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-700 rounded-full text-xs flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          个性化辅导
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">杭州一人公司 AI 月入 200 万</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        独立创业者利用 AI 智能体搭建完整跨境电商自动化流程
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-green-600">200万</p>
                          <p className="text-xs text-muted-foreground mt-1">月营收（人民币）</p>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-green-600">3000元</p>
                          <p className="text-xs text-muted-foreground mt-1">月运营成本</p>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-green-600">80%</p>
                          <p className="text-xs text-muted-foreground mt-1">自动化率</p>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-green-600">95%</p>
                          <p className="text-xs text-muted-foreground mt-1">成本节省</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  权威数据支持
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">McKinsey</p>
                      <p className="text-xs text-muted-foreground mt-1">生成式 AI 每年可带来 4.4 万亿美元经济价值，可自动化 60-70% 的工作活动</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <Globe2 className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Statista</p>
                      <p className="text-xs text-muted-foreground mt-1">56% 的企业使用 AI 的主要目的是提高效率和生产力</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm bg-card border rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium">圣路易斯联邦储备银行</p>
                      <p className="text-xs text-muted-foreground mt-1">生成式 AI 可使美国劳动生产率每年增长 1.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 如何开始 */}
            <section id="getting-started" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">如何开始</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5 text-blue-500" />
                      <h3 className="text-xl font-semibold">安装 OpenClaw</h3>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code>
                      npm install -g openclaw@latest
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    或使用安装脚本：
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      curl -fsSL https://openclaw.ai/install.sh | bash
                    </code>
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-green-500" />
                      <h3 className="text-xl font-semibold">配置向导</h3>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code>
                      openclaw onboard
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    按照向导配置 AI 模型 API Key 和工作软件接入
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="w-5 h-5 text-purple-500" />
                      <h3 className="text-xl font-semibold">启动服务</h3>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code>
                      openclaw gateway
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    在飞书、企业微信或钉钉中发送"你好"测试连接
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  常见问题
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4">
                    <p className="font-medium text-sm mb-1 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      需要懂技术吗？
                    </p>
                    <p className="text-xs text-muted-foreground">不需要，会用聊天软件就能用。OpenClaw 提供图形化配置界面。</p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <p className="font-medium text-sm mb-1 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      成本高吗？
                    </p>
                    <p className="text-xs text-muted-foreground">OpenClaw 本身免费开源，只需支付 AI 模型使用费用。很多模型提供免费额度。</p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <p className="font-medium text-sm mb-1 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      能在手机上用吗？
                    </p>
                    <p className="text-xs text-muted-foreground">可以，通过飞书、企业微信、钉钉等软件随时随地使用。</p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <p className="font-medium text-sm mb-1 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      数据安全吗？
                    </p>
                    <p className="text-xs text-muted-foreground">可以本地部署，数据在本地，不经过第三方服务器，安全可控。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 安全建议 */}
            <section id="security" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <ShieldIcon className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-3xl font-bold">安全建议</h2>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 rounded-xl p-6 mb-6">
                <h3 className="font-semibold mb-4 text-red-700 dark:text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  三大安全红线
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white/50 dark:bg-black/20 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="font-medium text-sm">不要泄露敏感信息</p>
                      <p className="text-xs text-muted-foreground mt-1">不输入个人隐私、商业机密</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/50 dark:bg-black/20 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="font-medium text-sm">不要盲目信任输出</p>
                      <p className="text-xs text-muted-foreground mt-1">AI 可能产生错误，关键决策需人工验证</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/50 dark:bg-black/20 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="font-medium text-sm">不要用于违法违规</p>
                      <p className="text-xs text-muted-foreground mt-1">不生成虚假信息、谣言、攻击内容</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <ShieldIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">本地部署（推荐）</p>
                    <p className="text-xs text-muted-foreground mt-1">数据在本地，完全离线使用</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">设置认证</p>
                    <p className="text-xs text-muted-foreground mt-1">启用密码或 token 认证，防止未授权访问</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">定期更新</p>
                    <p className="text-xs text-muted-foreground mt-1">保持最新版本，获得安全修复</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">人工审核</p>
                    <p className="text-xs text-muted-foreground mt-1">高风险操作设置人工确认</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Q&A */}
            <section id="faq" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Q&A</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    OpenClaw 和 ChatGPT 有什么区别？
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ChatGPT 是一个聊天机器人，主要功能是回答问题和生成内容。
                    OpenClaw 不仅能"说"，还能"做"，它能执行实际任务，读取文件、运行程序、发送消息等。
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                    支持哪些 AI 模型？
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    OpenClaw 支持多种 AI 模型，包括 OpenAI 的 GPT 系列、Anthropic 的 Claude 系列、
                    百度的文心一言、阿里云的通义千问、智谱 AI 的 ChatGLM 等。
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary" />
                    如何添加自定义技能？
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    你可以从 ClawHub（OpenClaw 的技能市场）下载和安装各种技能，也可以自己开发自定义技能。
                    OpenClaw 提供了详细的技能开发文档。
                  </p>
                </div>

                <div className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    在哪里可以获得帮助？
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    你可以访问 OpenClaw 官网（<a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://openclaw.ai</a>）、
                    阅读官方文档（<a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://docs.openclaw.ai</a>）、
                    加入 Discord 社区（<a href="https://discord.gg/clawd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://discord.gg/clawd</a>）获得帮助。
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-primary to-primary/60 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                开始你的 OpenClaw 之旅
              </h2>
              <p className="text-lg opacity-90 mb-8">
                从今天开始，让 AI 成为你最得力的助手
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.openclaw.ai/start/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  快速开始
                </a>
                <a
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}