import axios from 'axios';

export const state = ()=>({
    mf_list: [],
    mfs: [],
    fund_house: "",
    scheme: "",

});

export const getters = {
    mf_list(state){
        return state.mf_list;
    }
    
}

export const mutations =  {
    SET_MF_LIST(state, mf_list) {
        state.mf_list = mf_list
        // console.log(mf_list)
    },
    SET_MF_DATA(state, mfs,fund_house) {
        state.mfs = mfs
        state.fund_house = fund_house
        // console.log(mfs)
    },
    SET_MF_SCHEME(state, scheme) {
        state.scheme = scheme
    }
}

export const actions =  {
    async get_mf_list({ commit }) {
        const response = await axios.get('https://api.mfapi.in/mf/search?q=liquid')
        commit('SET_MF_LIST', response.data)   
    },
    async asyncData({commit, params }) {
        const scheme = params.scheme // When calling /abc the slug will be "abc"
        commit('SET_MF_SCHEME', scheme)
      },
    mydatecon(d) {
        const c = d.split('-')
        return c[1] + '-' + c[0] + '-' + c[2]
    },
    async get_mfdata({ commit }) {
        const res = await axios.get("https://api.mfapi.in/mf/"+scheme).then((data) => mfs = data.data.data)
        .then((data) => {
          for (var i = 0; i < mfs.length; i++) {
            const date = mydatecon(mfs[i].date);
            this.series[0].data.push({x: date, y: mfs[i].nav});
          }
        })
        .then((s) => {
          fund_house = s.data.meta.fund_house;
        })
        commit('SET_MF_DATA', mfs,fund_house)
    },
    
}