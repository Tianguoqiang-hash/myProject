import request from "./request";
import mockrequest from './mockrequest'

export const reqCategoryList = ()=>request({url: '/product/getBaseCategoryList'})
export const reqBanner = ()=>mockrequest({url:'/mock/banner'})
export const reqFloors = ()=>mockrequest({url:'/mock/floors'})
export const reqSearchInfo = (params)=>request({url:'/list',method:'post',data:params})
export const reqDetail = (skuid)=>request({url:`/item/${skuid}`})