import Vue from 'vue'
import App from './App'
import store from './store'

import uView from 'uview-ui'
import animated from 'animate.css'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(uView)
Vue.use(animated)

const app = new Vue({
    ...App,
	store
})

app.$mount()
