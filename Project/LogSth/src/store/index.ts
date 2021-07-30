import { createStore } from 'vuex'

const store: any = createStore({
    state() {
        return {
            count: 0
        };
    },
    mutations: {
        ADD(state: any) {
            state.count ++
        }
    },
    actions: {

    },
});

export default store