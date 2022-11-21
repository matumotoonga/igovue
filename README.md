# 九路盤定石研究ノート

## 構築メモ

vite3 + vue3 + Electron21 で構築

```
$ yarn create vite

√ Project name: ... igovue
√ Select a framework: » Vue
√ Select a variant: » Customize with create-vue ↗
√ Add TypeScript? ... Yes
√ Add JSX Support? ... Yes
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... Yes
√ Add an End-to-End Testing Solution? » Cypress
√ Add ESLint for code quality? ... Yes
√ Add Prettier for code formatting? ... Yes



  vue/create-vue
    /Typescript/jsx/vue-router/Pinia/... All Yes

$ yarn add -D electron vite-plugin-electron
$ yarn add -D npm-run-all
$ yarn add -D sass autoprefixer

igovue root / electron cjs

■ electron source

  > no vite-plugin-electoron

    background.cjs
    preload.cjs
    $ yarn init
      entry point : background.cjs


  > vite-plugin-electron
     mkdir electron
     cd electron
        main.ts
        preload.js

    $ yarn init
      entry point : electron/main.ts

    vite.config.ts

      base './',
      plugins:[vue(),vueJsx(), electron({ entry: "electron/main.ts" })]

    ● router/index.ts
    ...
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/GameView.vue"),
    },
    { ...

    ● view/GameView.vue
    <script setup lang="ts">
    import kyuroBan from '@/components/kyuroBan.vue'
    </script>

    <template>
      <div class="game">
        <kyuroBan />
      </div>
    </template>

    <style>
    @media (min-width: 2048px) {
      .game {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
    }
    </style>

    ● components/kyuroBan.vue

    <script setup lang="ts">
    import kyuroCell from './kyuroCell.vue'
    </script>

    <template>
      <div>
        九路盤
        <div class="GameBoard">
          <div class="board">
            <div class="cell" v-for="cellNo in 121" :key="cellNo"><kyuroCell /></div>
          </div>
        </div>
      </div>
    </template>

    <style lang="scss" scoped>
    .GameBoard {
      width: 567px;
      height: 567px;
      background-image: url(/九路盤.png);
      .board {
        display: grid;
        grid-template-columns: 8px 60px 60px 60px 60px 60px 60px 60px 60px 60px 3px;
        grid-template-rows: 8px 60px 60px 60px 60px 60px 60px 60px 60px 60px 3px;
        gap: 1px;
      }
    }
    </style>

    ● components/kyuroCell.vue

    <template>
      <div class="kyuroCell">
        <div class="stone"></div>
      </div>
    </template>

    <style lang="scss" scoped>
    .kyuroCell {
      width: 100%;
      height: 100%;
      border: 1px solid gray;
      .stone {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 48px;
      }
    }
    </style>


    ● index.html

    <html lang="en">  ⇒ <html lang="ja">


```
