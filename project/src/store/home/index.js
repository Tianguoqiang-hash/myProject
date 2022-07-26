import {reqCategoryList,reqBanner,reqFloors} from '@/api'
const state = {
    categoryList:[],
    banner:[],
    floors:[]
}
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList()
        if (result.code === 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBanner({commit}){
        let result = await reqBanner()
        if(result.code === 200){
            commit('GETBANNER',result.data)
        }
    },
    async getFloors({commit}){
        let result = await reqFloors()
        if(result.code === 200){
            commit('GETFLOORS',result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,data){
        state.categoryList = data
    },
    GETBANNER(state,data){
        state.banner = data
    },
    GETFLOORS(state,data){
        state.floors = data
    },
}
const getters = {}

export default{
    state,
    actions,
    mutations,
    getters
}