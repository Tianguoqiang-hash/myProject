import {reqShopCart,deleteShopCart,checkStatus} from '@/api/index'

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
    },
    deleteChecked({getters,dispatch}){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach((item)=>{
            let promise = item.isChecked == 1?dispatch('deleteCart',item.skuId):''
            promiseAll.push(promise)
        })
       return Promise.all(promiseAll)
    },
    async changeStatus({commit},{skuId,isChecked}){
        let result = await checkStatus(skuId,isChecked)
        if (result.code === 200){
            return 'ok'
        }else{
            Promise.reject(Error)
        }
    },
    changeAllChecked({getters,dispatch},isChecked){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach((item)=>{
            let promise = dispatch('changeStatus',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
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