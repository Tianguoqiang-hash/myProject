import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path: '/home',
            component: Home,
            meta: {show: true}
        },
        {
            path: '/search/:keyword?',
            name: 'search',
            component: Search,
            meta: {
                show: true,
            },
            // props: ($route)=>({value: $route.query})
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/detail/:skuid',
            name: 'detail',
            component: Detail
        },
        {
            path: '/addcartsuccess/:skuNum?',
            name: 'addcartsuccess',
            component: AddCartSuccess
        },
        {
            path: '/shopcart',
            name: 'shopcart',
            component: ShopCart
        },
        {
            path: '/trade',
            name: 'trade',
            component: Trade
        },
        {
            path: '/pay',
            name: 'pay',
            component: Pay
        },
        {
            path: '/paysuccess',
            name: 'PaySuccess',
            component: PaySuccess,
        },
        {
            path: '/center',
            name: 'center',
            component: Center,
            children: [
                {
                    path: 'myorder',
                    name: 'myorder',
                    component: MyOrder
                },
                {
                    path: 'grouporder',
                    name: 'grouporder',
                    component:GroupOrder
                },
                {
                    path: '/center',
                    redirect: '/center/myorder'
                }
            ]
        },
    ],
    scrollBehavior(){
        return {y:0}
    }
})