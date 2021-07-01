# vite 配置Vue3 项目

## 创建vue3项目

1. npm 修改配置（可省略这一步）

   * win+R 输入 cmd 回车，打开命令提示符

   * `npm config set prefix <dir name>` 设置仓库路径，英文名，不能有空格

     `npm config set cache <dir name> ` 设置cache路径，规则同上

     `npm config set registry https://registry.npm.taobao.org` 修改下载源为淘宝镜像

2. cd 进入项目目录

   `npm init @vitejs/app <project-name>`

   **如果报错找不到package.json，则是第一步的路径上有空格**

   之后出现这个界面，选择vue

   ![image-20210629204215953](E:\TZW\Entrepot\Note\MarkDown\Imgs\image-20210629204215953.png)
   
   根据自己喜好选择是否使用typescript
   
   ![image-20210629204438463](E:\TZW\Entrepot\Note\MarkDown\Imgs\image-20210629204438463.png)
   
   根据提示执行下面的命令即可
   
   ![image-20210629204513677](E:\TZW\Entrepot\Note\MarkDown\Imgs\image-20210629204513677.png)


## 引入Vue Router

1. `npm install vue-router@next --save`

2. 在`src`目录下创建**router**文件夹，下面新建**index.js**

   创建**views**文件夹存放路由匹配的视图

3. **router/index.js**

   ```javascript
   import {createRouter, createWebHashHistory} from 'vue-router';
   
   const routes = [
       {
           path: '/',
           name: 'home',
           component: () => import('../views/home/home.vue')
       }
   ]
   
   export default  createRouter({
       history: createWebHashHistory(),
       routes
   })
   ```

   

4. **main.ts**

   ```typescript
   import { createApp } from 'vue'
   import App from './App.vue'
   
   //vue router
   import router from './router/index.js'
   
   const app = createApp(App)
   app.use(router)
   app.mount('#app')
   ```

5. 在**views**文件夹下新建组件，配置路由，测试即可看到效果

## 引入Vuex

1. `npm install vuex@next --save`

2. 在`src`目录下创建**store**文件夹，下面新建**index.js**

3. **store/index.js**

   ```javascript
   import { createStore } from 'vuex'
   
   export default createStore({
     state() {
       return {
   
       };
     },
     mutations: {
   
     },
     actions: {
   
     },
   });
   ```

4. **main.ts**

   ```typescript
   import { createApp } from 'vue'
   import App from './App.vue'
   
   //vue router
   import router from './router/index.js'
   
   //vuex
   import vuex from './store/index.js'
   
   const app = createApp(App)
   app.use(router)
   app.use(vuex)
   app.mount('#app')
   ```


## 引入Element Plus

1. 安装element plus

   `npm install --save element-plus`

2. 引入element plus

   **main.ts** ↓

   ```typescript
   import { createApp } from 'vue'
   import App from './App.vue'
   
   //vue router
   import router from './router/index.js'
   
   //vuex
   import vuex from './store/index.js'
   
   //element plus
   import ElementPlus from 'element-plus';
   import 'element-plus/lib/theme-chalk/index.css';
   
   const app = createApp(App)
   app.use(router)
   app.use(vuex)
   app.use(ElementPlus)
   app.mount('#app')
   ```

3. 测试

   **App.vue** ↓

   ```vue
   <template>
     <el-button>123</el-button>
   </template>
   
   <script lang="ts">
   import { defineComponent } from 'vue'
   
   export default defineComponent({
     name: 'App',
   })
   </script>
   ```

   ![image-20210629205843816](E:\TZW\Entrepot\Note\MarkDown\Imgs\image-20210629205843816.png)

   成功！！！

## vite.config.ts 配置

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //官网上写的是resolve.alias,在这里这么写
  resolve: {
    alias: [
      //find是别名，replacement是要替换的路径  
      {find: "@" , replacement: '/src'}
    ]
  }
})
```

详细配置项在 https://vitejs.dev/config 网站，英文网站



到此基础部分配置完成
