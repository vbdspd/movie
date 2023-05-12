import VueRouter from "vue-router";

import Vue from "vue";
import movieRouter from "./movie/index";
import cinemaRouter from "./cinema/index";
import mineRouter from "./mine/index";

Vue.use(VueRouter)


console.log(movieRouter)
export default new VueRouter({
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