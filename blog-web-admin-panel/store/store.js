export const state = {
    user: {}
}

export const mutations = {
    SET_SINGLE_USER: (state, payload) => {
        console.log('SET_SINGLE_USER', payload)
        state.user = payload
    }
}

export const getters = {
    user: ({ user }) => user
}
