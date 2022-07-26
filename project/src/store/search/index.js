import {reqSearchInfo} from '@/api/index'
const state = {
    searchList: {}
}
const actions = {
    async getSearchList({commit},params={}){
        let result = await reqSearchInfo(params)
        if(result.code === 200){
            commit('GETSEARCHLIST',result.data)
        }  
    }
}
const mutations = {
    GETSEARCHLIST(state,data){
        state.searchList = data
    }
}
const getters = {}

export default{
    state,
    actions,
    mutations,
    getters
}