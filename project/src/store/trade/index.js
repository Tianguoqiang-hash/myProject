import {reqAddress,reqCartList} from '@/api/index'

const state = {
    address: [],
    shopCartList: {},
}
const actions = {
    async getAddress({commit}){
        let result = await reqAddress()
        if(result.code === 200){
            commit('GETADDRESS',result.data)
            return 'ok'
        }else{
            Promise.reject(new Error('fail'))
        }
    },
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code === 200){
            commit('GETCARTLIST',result.data)
            return 'ok'
        }else{
            Promise.reject(new Error('fail'))
        }
    }
}
const mutations = {
    GETADDRESS(state,data){
        state.address = data
    },
    GETCARTLIST(state,data){
        state.shopCartList = data
    }
}
const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}