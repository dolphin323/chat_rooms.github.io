import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration'
import Login from '@/components/Login'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/registration',
            component: Registration
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/chats',
            component: () => import('@/components/Chats')
        },
        { path: "*", component: () => import('@/components/PageNotFound') }
    ]
})