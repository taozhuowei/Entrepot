import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [{id:2 , context:'123456' , date : '2020-5-25' , time: '15:34' , type: 'today' , childItem: null , parentItem: null}],
  },
  mutations: {
    ADD_TODO(state, newTodo) {
      state.todoList.push(newTodo);
    },

    DELETE_TODO(state, index) {
      state.todoList.splice(index, 1)
    },

    UPDATE_TODO(state, index, newTodo){
      if(newTodo.type === 'time'){
        state.todoList[index].time=newTodo.time
      }
      else {
        state.todoList[index].context=newTodo.context
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
