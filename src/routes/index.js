import VueRouter from "vue-router";
import Vue from 'vue'
Vue.use(VueRouter)

export const router = new VueRouter( {
    routes: [
        {
            path: '/',
            name: 'home',
            components:() => import('@/pages/HomeComponent')
        },
        {
            path: '/lien-he',
            name: 'contact',
            components: () => import('@/pages/ContactComponent')
        },
        {
            path: '/dang-nhap',
            name: 'login',
            component: () => import('@/pages/LoginComponent')
        },
        {
            path:'/danh-sach-sp',
            name:'list-product',
            component:()=>import('@/pages/ListProduct.vue')
        },
        {
            path:'/chi-tiet-san-pham/:id/:name',
            name:'detail-product',
            component:()=>import('@/pages/ProductDetail.vue')
        },
        {
            path: '*',
            component: () => import('@/pages/NotFound.vue')
        }
    ],
    mode: "history"
})