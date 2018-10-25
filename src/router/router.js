import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由所需组件
import Home  from  '../components/home/Home.vue'
import BankList from "../components/bankListPage/bankListPage"
import JTapplyNow from '../components/applyNow/JTapplyNow'
import JTguid from "../components/guid/JTguid"
import ZXapplyNow from '../components/applyNow/ZXapplyNow'
import ZXguid from "../components/guid/ZXguid"
import MSapplyNow from '../components/applyNow/MSapplyNow'
import MSguid from "../components/guid/MSguid"
import PAapplyNow from '../components/applyNow/PAapplyNow'
import PAguid from "../components/guid/PAguid"
import GDapplyNow from '../components/applyNow/GDapplyNow'
import GDguid from "../components/guid/GDguid"
import GSapplyNow from '../components/applyNow/GSapplyNow'
import GSguid from "../components/guid/GSguid"
import SHapplyNow from '../components/applyNow/SHapplyNow'
import SHguid from "../components/guid/SHguid"
import GFapplyNow from '../components/applyNow/GFapplyNow'
import GFguid from "../components/guid/GFguid"
import ZGapplyNow from '../components/applyNow/ZGapplyNow'
import ZGguid from "../components/guid/ZGguid"
import PFapplyNow from '../components/applyNow/PFapplyNow'
import PFguid from "../components/guid/PFguid"
// 安装路由
Vue.use(VueRouter)
//定义路由规则
var routes = [
    {path:'/',name:'home',component:Home},
    {path:'/banklist',name:'BankList',component:BankList},
    {path:'/JTapplyNow',name:'JTapplyNow',component:JTapplyNow},
    {path:'/JTguid',name:'JTguid',component:JTguid},
    {path:'/ZXapplyNow',name:'ZXapplyNow',component:ZXapplyNow},
    {path:'/ZXguid',name:'ZXguid',component:ZXguid},
    {path:'/MSapplyNow',name:'MSapplyNow',component:MSapplyNow},
    {path:'/MSguid',name:'MSguid',component:MSguid},
    {path:'/PAapplyNow',name:'PAapplyNow',component:PAapplyNow},
    {path:'/PAguid',name:'PAguid',component:PAguid},
    {path:'/GDapplyNow',name:'GDapplyNow',component:GDapplyNow},
    {path:'/GDguid',name:'GDguid',component:GDguid},
    {path:'/GSapplyNow',name:'GSapplyNow',component:GSapplyNow},
    {path:'/GSguid',name:'GSguid',component:GSguid},
    {path:'/SHapplyNow',name:'SHapplyNow',component:SHapplyNow},
    {path:'/SHguid',name:'SHguid',component:SHguid},
    {path:'/GFapplyNow',name:'GFapplyNow',component:GFapplyNow},
    {path:'/GFguid',name:'GFguid',component:GFguid},
    {path:'/ZGapplyNow',name:'ZGapplyNow',component:ZGapplyNow},
    {path:'/ZGguid',name:'ZGguid',component:ZGguid},
    {path:'/PFapplyNow',name:'PFapplyNow',component:PFapplyNow},
    {path:'/PFguid',name:'PFguid',component:PFguid},






    


    {path:'*',name:'home',component:Home}

]

export default  new VueRouter({routes})