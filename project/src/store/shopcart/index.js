import {reqShopCart,deleteShopCart} from '@/api/index'

const state = {
    cartList:[]
}
const actions = {
    async getShopCart({commit}){
        let result = await reqShopCart()
        if(result.code === 200){
            commit('GETSHOPCART',result.data)
        }
    },
    async deleteCart({commit},skuId){
        let result = await deleteShopCart(skuId)
        if (result.code===200){
            return 'ok'
        }else{
            Promise.reject(Error)
        }
    }
}
const mutations = {
    GETSHOPCART(state,data){
        state.cartList = data
    }
}
const getters = {
    cartList(state){
        return state.cartList[0]||{}
    },
}

export default{
    state,
    actions,
    mutations,
    getters
}