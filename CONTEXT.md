# Portfolio Site

Zane Wang 的个人作品集网站，面向澳洲求职场景，帮助访客快速建立专业信任并引导联系。

## Language

**Visitor**:
以 HR、技术面试官、招聘经理为主的站点访客；需要在短时间内判断 Zane 是否值得进一步沟通。
_Avoid_: User, audience, reader

**Primary Goal**:
让 Visitor 在约 30 秒内理解 Zane 是谁、能做什么，并愿意进入 About / Projects 或直接 Contact。
_Avoid_: Mission, objective, north star

**3D Accent**:
首页保留的 3D 元素（浮岛/飞机/狐狸等），定位为差异化点缀，而非承载核心求职信息的主视觉。信息层级（姓名、技能、CTA）应主要由排版和文字承担，不依赖旋转/探索 3D 场景才能获取。
_Avoid_: Hero scene, main visual, centerpiece

**Hero Section**:
首页最上方的文字优先区块（姓名、职位定位、一句话总结、Contact/Resume 按钮），是 Visitor 获取核心信息的必经路径，不依赖 3D 交互。浮岛场景缩小/退居为其背景或旁侧的点缀。
_Avoid_: HomeInfo box, intro box

**Projects**:
站点中展示 Side projects / 独立项目的页面（路由 `/projects`）。导航栏、Hero CTA、页面标题统一使用这个词。
_Avoid_: Portfolio, Visit my portfolio（曾经的 Hero 按钮文案，与导航栏用词不一致，已废弃）

**Hero CTA Priority**:
Home Hero 的主按钮固定指向 About（求职场景下，招聘方通常先想了解经历/技能再看项目），次要按钮指向 Projects。Contact 不再放在 Hero，而是通过页面底部与 About/Projects 一致的 CTA 组件承接，避免 Hero 里塞三个并列按钮分散注意力。
_Avoid_: Let's talk（曾经 Hero 里指向 Contact 的按钮文案，已移除）

**Design Language**:
整站统一采用现代简约风：大量留白、克制配色（深色正文 + 单一强调色），依赖排版层级和细微动效（而非硬阴影/鲜艳色块）建立质感，类似 Linear / Vercel 官网。现有 neo-brutalism 硬阴影和 `.glassmorphism` 效果逐步替换或弱化。
_Avoid_: Neo-brutalism, flashy, playful
