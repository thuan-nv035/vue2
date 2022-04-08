import Vue from 'vue'
import Vuex from 'vuex'
import {homeService} from "../services/homeService";
import {homeData} from './Home.store'
import {cartData} from './Cart.store'
Vue.use(Vuex)
// export const store = new Vuex.Store({
//     state: {
//         count: 0,
//         homeProducts: [],
//         human: {}
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         },
//         decrement(state) {
//             state.count--
//         },
//         setHomeProducts(state,products){
//             state.homeProducts = products
//         },
//         setHuamn(state, payload) {
//             state.human = payload
//         }
//     },
//     actions: {
//         async loadHomeProducts({commit}) {
//             const resp = await homeService.getHome()
//             commit('setHomeProducts', resp.data)
//         }
//     }
// })

export const store = new Vuex.store({
    modules: {
        home: homeData,
        cart: cartData
    }
})