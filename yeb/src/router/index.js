import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from '@/router/routes'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Test1 from '@/views/Test1'
import Test2 from '@/views/Test2'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/home',
        name:'Home',
        component:Home,
        children:[
            {
                path:'/test1',
                name:'Test1',
                component:Test1
            },
            {
                path:'/test2',
                name:'Test2',
                component:Test2
            }
        ]
    },
    
]
export default new VueRouter({
    routes,
})
