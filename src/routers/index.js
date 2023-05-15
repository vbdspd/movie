import VueRouter from "vue-router";

import Vue from "vue";
import movieRouter from "./movie/index";
import cinemaRouter from "./cinema/index";
import mineRouter from "./mine/index";

Vue.use(VueRouter)



export default new VueRouter({
    mode:'hash'
    ,
    routes:[
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
        path:'/*',
        redirect:"/movie"
    }
    ]
})