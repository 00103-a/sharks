# sharks

黑白风格的独立登录／注册页面，带有实时 ASCII 鲨鱼动画。

- 保留动态鲨鱼背景、响应式布局、登录／注册切换和密码显示／隐藏。
- 表单使用浏览器输入验证，注册密码要求 8–128 位字符。
- 纯前端演示，不连接账户服务，不发送或保存表单输入；请使用虚构信息。

## 本地运行

需要 Node.js 24 或更新版本。

```sh
npm ci
npm run dev
```

## 构建

```sh
npm run build
npm run preview
```

`docs/` 是已提交的静态页面，可直接用于 GitHub Pages。修改源码后请重新运行构建，并把更新后的 `docs/` 一起提交。

## 动画来源

ASCII 鲨鱼引擎来自 [stackedlol/ascii-sharks](https://github.com/stackedlol/ascii-sharks)，Copyright (c) 2026 drewdi，MIT 许可证。保留的源代码、改动说明与许可证位于 `src/vendor/ascii-sharks/`。
