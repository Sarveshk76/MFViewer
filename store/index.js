import axios from 'axios';

export const state = ()=>({
    mf_list: [],
    mfs: [],
    fund_house: [],
    args: "",
});

export const getters = {
    mf_list(state){
        return state.mf_list;
    },
    mfs(state){
        return state.mfs;
    },
    fund_house(state){
        return state.fund_house;
    },
    args(state){
        return state.args;
    }
}

export const mutations =  {
    SET_MF_LIST(state, mf_list) {
        state.mf_list = mf_list
        // console.log(mf_list)
    },
    SET_ARGS(state, args) {
        state.args = args
        // console.log(args)
    },
    SET_MF_DATA(state, mfs) {
        state.mfs = mfs
    },
    SET_FUND_HOUSE(state, fund_house) {
        state.fund_house = fund_house
    }
}

export const actions =  {
    async get_mf_list({ commit }, arg) {
        console.log("get_mf_list"+"("+arg+")")
        const response = await axios.get('https://api.mfapi.in/mf/search?q='+(arg||'liquid'));
        commit('SET_MF_LIST', response.data)   
    },
    async get_mfdata({ commit },scheme) {
        console.log('get_mfdata: '+scheme)
        const res = await axios.get("https://api.mfapi.in/mf/"+scheme)
        const data = res.data.data
        const res_data = []
        for (let i = 0; i < data.length; i++) {
            const date = (data[i].date)
            const c = date.split('-')
            date = c[1] + '-' + c[0] + '-' + c[2]
            res_data.push({
                x: date,
                y: data[i].nav
        })
    }
        commit('SET_MF_DATA', res_data)
        commit('SET_FUND_HOUSE', res.data.meta.fund_house)
    },
    
}