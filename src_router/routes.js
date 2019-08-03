import Home from './components/Home.vue'

import Header from "./components/Header.vue";

// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

const User = () => import('./components/user/User.vue')
const UserStart = () => import('./components/user/UserStart.vue')
const UserDetail = () => import('./components/user/UserDetail.vue')
const UserEdit = () => import('./components/user/UserEdit.vue')

export const routes = [
  { path: '/', name:'home',components:{
    default:Home,
    'header-top': Header
  } 
},
  { path: '/user', components: {
      default:User,
      'header-bottom':Header
    }, children: [
      {path:'',component: UserStart},
      {path:':id', component: UserDetail,beforeEnter(to,from,next) {
        console.log('guard executed from inside route')
        next()
      }
    
    },
      { path: ':id/edit', component: UserEdit, name:'userEdit' },
      
  ] },
    { path: '/redirect-me', redirect: { path: '/user' } },
    { path: '*', redirect: { name:'home' } },
]
