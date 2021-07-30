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
		pickUpMethod: 'delivery', //配送方式，delivery 配送，selfPickUp 自提
	},
	mutations: {
		//添加购物车（未查库存，可以放到action中查库存，再添加购物车）
		ADD_TO_CART(state, goods) {
			const cart = this.state.cart
			const length = cart.length
			const isNewGoods = cart.every(item => {
				return item.id !== goods.id
			})
			if (length === 0 || isNewGoods) {
				console.log('new goods');
				state.cart.push(goods)
			} else {
				goods.num ++
			}
			state.total = parseInt(state.total) + parseInt(goods.price)
			state.count++
			console.log(state.cart);
		},
		
		//更改购物车商品的数量
		UPDATE_GOODS_NUM(state , payload) {
			this.state.cart.find(item => item.id === payload.id).num = payload.num;
			console.log(this.state.cart.find(item => item.id === payload.id));
			console.log('更改购物车商品的数量 , id: '+payload.id+' num: '+this.state.cart.find(item => item.id === payload.id).num);
		}
	},
	actions: {}
})

export default store
