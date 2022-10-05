import axios from 'axios';

export const state = ()=>({
    mf_list: [],
    mf_data: [],
});

export const getters = {
    mf_list(state){
        return state.mf_list;
    },
    mf_data(state){
        return state.mf_data;
    }
}

export const mutations =  {
    SET_MF_LIST(state, mf_list) {
        state.mf_list = mf_list
        // console.log(mf_list)
    },
    SET_MF_DATA(state, mf_data) {
        state.mf_data = mf_data
    },
}

export const actions =  {
    async get_mf_list({ commit }) {
        const response = await axios.get('https://api.mfapi.in/mf/search?q=liquid')
        commit('SET_MF_LIST', response.data)   
    },
    async get_mfdata({ commit }) {
        const scheme = this.$route.params.scheme
        const res = await axios.get("https://api.mfapi.in/mf/"+scheme)
        commit('SET_MF_DATA', res)
    },
    
}