import Index from './container/index';
import Mine from './container/mine'

const routes = [
    {
        route: '/',
        exact:true,
        component :  Index
    },
    {
        route: '/mine',
        component : Mine
    }
]
const navRoutes = [
    {
        route: '/',
        name:'首页',
    },
    {
        route: '/mine',
        name:'我的',
    }
]
module.exports = {
    routes,
    navRoutes
}