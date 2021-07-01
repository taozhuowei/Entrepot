import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            count: 0
        };
    },
    mutations: {
        ADD(state) {
            state.count ++
        }
    },
    actions: {

    },
});