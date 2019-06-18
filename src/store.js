import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isScrollTop: true,
        isApp: false,
        isDrawerOpen: true
    },
    mutations: {
        setScroll(state, payload) {
            state.isScrollTop = payload;
        },
        setApp(state, payload) {
            state.isApp = payload;
        },
        setDrawerOpen(state, payload) {
            console.log('payload', payload)
            state.isDrawerOpen = payload;
        }
    },
    getters: {
        getDrawerOpen: state => state.isDrawerOpen 
    }
})