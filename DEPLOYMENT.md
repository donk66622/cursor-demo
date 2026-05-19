# Vercel 自动部署配置指南

## 🚀 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/personboke)

## 📋 手动部署步骤

### 1. 准备工作

确保你的项目已经推送到 GitHub/GitLab/Bitbucket 仓库。

### 2. 登录 Vercel

访问 [Vercel Dashboard](https://vercel.com/dashboard)，使用 GitHub/GitLab/Bitbucket 账号登录。

### 3. 导入项目

1. 点击 **Add New Project**
2. 选择你的项目仓库
3. 点击 **Import**

### 4. 配置项目

在配置页面，Vercel 会自动检测到 Vue 项目并使用以下配置：

- **Framework Preset**: Vue
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

如果没有自动检测到，可以手动设置：

```bash
# Build Command
npm run build

# Output Directory
dist
```

### 5. 部署

点击 **Deploy** 按钮，Vercel 会自动：
1. 拉取代码
2. 安装依赖 (`npm install`)
3. 构建项目 (`npm run build`)
4. 部署到 Vercel 服务器

## ⚙️ 环境变量（可选）

如果需要环境变量，可以在 Vercel Dashboard 中配置：

1. 进入项目设置
2. 点击 **Environment Variables**
3. 添加需要的环境变量

## 🔄 自动部署

配置完成后，每次推送代码到仓库，Vercel 会自动触发构建和部署。

## 📌 注意事项

1. 确保 `vercel.json` 文件存在于项目根目录
2. 确保 `package.json` 中有正确的 `build` 脚本
3. Vite 默认输出目录是 `dist`，无需修改

## 📝 项目配置

### package.json 脚本

```json
{
  "scripts": {
    "dev": "npx vite",
    "build": "npx vue-tsc && npx vite build",
    "preview": "npx vite preview"
  }
}
```

### vercel.json 配置

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vue",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

## 🎉 部署成功

部署完成后，你会获得一个类似 `https://personboke.vercel.app` 的域名。

## 📁 项目结构

```
personboke/
├── src/
│   ├── components/      # Vue 组件
│   ├── data/           # 数据文件
│   ├── stores/         # Pinia 状态管理
│   ├── App.vue         # 根组件
│   ├── main.ts         # 入口文件
│   └── style.css       # 全局样式
├── index.html          # HTML 模板
├── package.json        # 依赖配置
├── vite.config.ts      # Vite 配置
├── vercel.json         # Vercel 配置
└── ...
```

## ✅ 验证部署

部署后可以通过以下方式验证：

1. 访问部署的域名
2. 检查页面是否正常加载
3. 测试主题切换功能
4. 测试平滑滚动
5. 测试联系表单提交

---

**提示**: 如果部署失败，检查 Vercel 控制台的构建日志，通常是依赖问题或配置错误。