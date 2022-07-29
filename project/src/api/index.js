import request from "./request";
import mockrequest from './mockrequest'

export const reqCategoryList = ()=>request({url: '/product/getBaseCategoryList'})
export const reqBanner = ()=>mockrequest({url:'/mock/banner'})
export const reqFloors = ()=>mockrequest({url:'/mock/floors'})
export const reqSearchInfo = (params)=>request({url:'/list',method:'post',data:params})
export const reqDetail = (skuid)=>request({url:`/item/${skuid}`})
export const reqAddCart = (skuId,skuNum)=>request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
export const reqShopCart = ()=>request({url:'/cart/cartList'})
export const deleteShopCart = (skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:'delete'})