# React + TypeScript + Vite + ESlint + prettier + MUI

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## plugin command

```terminal
pnpm create vite <my-react-app>  “选择 react + typescript”
pnpm add @mui/material @emotion/react @emotion/styled
pnpm add @fontsource/roboto   “添加字体”
pnpm add @mui/icons-material    “添加Icon”
pnpm add -D eslint eslint-config-react-app   “安装 ESLint 相关依赖”
pnpm add -D prettier eslint-config-prettier prettier-plugin-organize-imports  “安装 Prettier 相关依赖”
pnpm install --save-dev eslint-plugin-prettier

添加 .eslintrc.cjs
module.exports = {
  extends: ['react-app', 'prettier'],
};

添加 .prettierrc.js
module.exports = {
  singleQuote: true,
  plugins: ['prettier-plugin-organize-imports'],
  organizeImportsSkipDestructiveCodeActions: true,
};

```

## I18N

```
pnpm install i18next-http-backend i18next-browser-languagedetector --save
```

参考
[React i18n 国际化 [TypeScript]](https://blog.csdn.net/qq_42389120/article/details/109049071)
[I18next 在 React 如何使用 Typescript 编写](https://carljin.com/posts/i18next-react-typescript/#%e5%ae%89%e8%a3%85%e4%be%9d%e8%b5%96)

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
