import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: '', //小程序获取的用户信息
		userData: '', //后台保存的用户数据
		cart: [], //购物车数组
		count: 0, //购物车商品数量
		total: 0, //购物车商品总价(单位：分)
	},
	mutations: {
		ADD_TO_CART(state, goods) {
			const cart = this.state.cart
			const length = cart.length
			const isNewGoods = cart.every(item => {
				return item.id !== goods.id
			})
			console.log(isNewGoods);
			if (length === 0 || isNewGoods) {
				console.log('new goods');
				state.cart.push(goods)
			} else {
				console.log('old goods');
				goods.num ++
			}
			state.total = parseInt(state.total) + parseInt(goods.price)
			state.count++
			console.log(state.cart);
		}
	},
	actions: {}
})

export default store
