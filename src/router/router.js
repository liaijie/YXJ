import Vue from 'vue'
import VueRouter from 'vue-router'



// 引入路由所需组件
import Home  from  '../components/home/Home.vue'
import BankList from "../components/bankListPage/bankListPage"
// 安装路由
Vue.use(VueRouter)

//定义路由规则
var routes = [
    {path:'/',name:'home',component:Home},
    {path:'/banklist',name:'BankList',component:BankList},
    {path:'*',name:'home',component:Home}

]

export default  new VueRouter({routes})