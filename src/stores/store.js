import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            funds: [],
        };
    },
    mutations: {
        setFunds(state, funds) {
            state.funds = funds;
        },
    },
});

export default store;