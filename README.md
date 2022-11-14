# 九路盤定石研究ノート

## 構築メモ

vite3 + vue3 + Electron21 で構築

```
$ yarn create vite
  vue/create-vue
    /Typescript/jsx/vue-router/Pinia

$ yarn add -D electron
$ yarn add -D npm-run-all

igovue root / electron cjs

■ electron source

background.cjs
preload.cjs

$ yarn init
  entry point : background.cjs



■ package.json

{
  ...
  "scripts": {
    "electron": "electron ."
    ...
  },
  ...
}




```
