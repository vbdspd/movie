import Movie from '../../pages/movie/movie'
export default{
    path:"/movie",
    component:Movie,
    children:[
        {
            path:"city",
            component:()=>import('../../components/City/City.vue')
        },
        {
            path:"nowPlaying",
            component:()=>import('../../components/NowPlaying/NowPlaying')
        },{
            path:"comingSoon",
            component:()=>import('../../components/ComingSoon/ComingSoon')
        },
        {
            path:"search",
            component:()=>import('../../components/Search/Search')
        },
        {
            path:"/movie",
            redirect:"/movie/nowPlaying"   
        }
    ]
}