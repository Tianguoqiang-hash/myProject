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
export const checkStatus = (skuId,isChecked)=>request({url:`/cart/checkCart/${skuId}/${isChecked}`})
export const reqCode = (phone)=>request({url:`/user/passport/sendCode/${phone}`})
export const postRegister = (phone,password,code)=>request({url:'/user/passport/register',data:{phone,password,code},method:'post'})
export const postLogin = (data)=>request({url:'/user/passport/login',method:'post',data})
export const reqUserInfo = ()=>request({url:'/user/passport/auth/getUserInfo'})
export const reqLogout = ()=>request({url:'/user/passport/logout'})
export const reqAddress = ()=>request({url:'/user/userAddress/auth/findUserAddressList'})
export const reqCartList = ()=>request({url:'/order/auth/trade'})
export const reqSettle = (tradeNo,data)=>request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
export const reqOrder = (orderId)=>request({url:`/payment/weixin/createNative/${orderId}`})

// /api/order/auth/submitOrder?tradeNo={tradeNo}
// {
//     "consignee": "admin",
//     "consigneeTel": "15011111111",
//     "deliveryAddress": "北京市昌平区2",
//     "paymentWay": "ONLINE",
//     "orderComment": "xxx",
//     "orderDetailList": [
//         {
//             "id": null,
//             "orderId": null,
//             "skuId": 6,
//             "skuName": " Apple iPhone 11 (A2223) 128GB 红色 移动联通电信22",
//             "imgUrl": "http://182.92.128.115:8080//rBFUDF6V0JmAG9XGAAGL4LZv5fQ163.png",
//             "orderPrice": 4343,
//             "skuNum": 2,
//             "hasStock": null
//         },
//         {
//             "id": null,
//             "orderId": null,
//             "skuId": 4,
//             "skuName": "Apple iPhone 11 (A2223) 128GB 红色",
//             "imgUrl": "http://182.92.128.115:80800/rBFUDF6VzaeANzIOAAL1X4gVWEE035.png",
//             "orderPrice": 5999,
//             "skuNum": 1,
//             "hasStock": null
//         }
//     ]
// }