import { reqDetail ,reqAddCart} from "@/api"
const state={
    detail:{}
}
const actions={
    async getDetail({commit},skuid){
        let result = await reqDetail(skuid)
        if(result.code = 200){
            commit('GETDETAIL',result.data)
        }
    },
    async postAddCart({commit},{skuId,skuNum}){
        let result =  await reqAddCart(skuId,skuNum)
        if(result.code === 200){
            return 'ok'
        }else{
            throw Error
        }
    }
}
const mutations={
    GETDETAIL(state,data){
        state.detail = data
    }
}
const getters={
    categoryView(state){
        return state.detail.categoryView || {}
    },
    skuInfo(state){
        return state.detail.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.detail.spuSaleAttrList || []
    },
}

export default{
    state,
    actions,
    mutations,
    getters
}