import axios from 'axios';

export const state = ()=>({
    mf_list: [],
    mfs: [],
    fund_house: [],
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
    }
}

export const mutations =  {
    SET_MF_LIST(state, mf_list) {
        state.mf_list = mf_list
        // console.log(mf_list)
    },
    SET_MF_DATA(state, {mfs, fund_house}) {
        state.mfs = mfs
        state.fund_house = fund_house
    },
}

export const actions =  {
    async get_mf_list({ commit }) {
        const response = await axios.get('https://api.mfapi.in/mf/search?q=liquid')
        commit('SET_MF_LIST', response.data)   
    },
    async get_mfdata({ commit },{scheme}) {
        console.log('get_mfdata')
        const mfs = {}
        const fund_house = {}
        await axios.get("https://api.mfapi.in/mf/"+scheme).then((data) => {mfs = data.data.data, fund_house = data.data.meta.fund_house})
        .then((s) => {
          
          for (var i = 0; i < this.mfs.length; i++) {
            const date = this.mydatecon(this.mfs[i].date);
            this.series[0].data.push({x: date, y: this.mfs[i].nav});
          }
        })
        commit('SET_MF_DATA', {mfs, fund_house})
    },
    
}