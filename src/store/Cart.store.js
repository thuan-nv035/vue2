export const homeStore = {
    namespace: true,
    state: {
        cartData: []
    },
    action: {

    },
    mutations: {
        setCartData(state,payload) {
            state.cartData = payload
        }
    }
}