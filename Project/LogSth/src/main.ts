import {createApp} from 'vue'
import App from './App.vue'

//vue router
import router from '@/router/index'

//vuex
import store from '@/store/index'

//element plus
import 'element-plus/packages/theme-chalk/src/base.scss'
import {
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElButton,
    ElAffix,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElCard,
    ElPopover,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
} from 'element-plus'

const components = [
    ElButton,
    ElAffix,
    ElMenu,
    ElMenuItem,
    ElRow,
    ElCol,
    ElCard,
    ElPopover,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
]

const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
]

const app = createApp(App)
app.use(router)
app.use(store)

components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})

app.mount('#app')
