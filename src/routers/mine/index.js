import mine from '../../pages/mine/mine'

export default{
    path:"/mine",
    component:mine,
    children:[
        {
            path:"login",
            component:()=>import ('../../components/Login/Login.vue')
        },
        {
            path:'rigist',
            component:()=>import('../../components/Rigist/Rigist')
        },
        {
            path:'/mine',
            redirect:"/mine/login"
        }
    ]
}