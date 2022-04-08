export const homeStore = {
    namespace: true,
    state: {
        homeData: []
    },
    action: {

    },
    mutations: {
        setHomeData(state,payload) {
            state.homeData = payload
        }
    }
}