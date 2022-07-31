import {reqCode,postRegister,postLogin,reqUserInfo,reqLogout} from '@/api/index'

const state = {
    code: '',
    userInfo: {}
}
const actions = {
    async getCode({commit},phone){
        let result =  await reqCode(phone)
        if(result.code === 200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            Promise.reject(Error)
        }
    },
    async userRegister({commit},{phone,password,code}){
        let result = await postRegister(phone,password,code)
        if(result.code === 200){
            return 'ok'
        }else{
            Promise.reject(Error)
        }
    },
    async login({commit},data){
        let result = await postLogin(data)
        if(result.code === 200){
            localStorage.setItem('token',result.data.token)
            return 'ok'
        }else{
            Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code === 200){
            commit('GETUSERINFO',result.data)
            return 'ok'
        }else{
            Promise.reject(new Error('fail'))
        }
    },
    async getLogout({commit}){
       let result = await reqLogout()
       if(result.code === 200){
        commit('GETLOGOUT')
        return 'ok'
       }else{
        Promise.reject(new Error('fail'))
       }
    }
}
const mutations = {
    GETCODE(state,data){
        state.code = data
    },
    GETUSERINFO(state,data){
        state.userInfo = data
    },
    GETLOGOUT(state){
        state.userInfo = {},
        localStorage.removeItem('token')
    }
}
const getters = {}

export default{
    state,
    actions,
    mutations,
    getters
}