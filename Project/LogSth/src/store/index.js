import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            count: 0
        };
    },
    mutations: {
        ADD(state) {
            state.count++;
        }
    },
    actions: {},
});
export default store;
//# sourceMappingURL=index.js.map