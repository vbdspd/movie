<template>
  <div class="main">
    <!-- 头部组件 -->
    <Header title="电影"></Header>
    <van-tabs v-model="active">
      <van-tab :title="city" to="/movie/city"></van-tab>
      <van-tab title="正在上映" to="/movie/nowPlaying"></van-tab>
      <van-tab title="即将上映" to="/movie/comingSoon"></van-tab>
      <van-tab title="搜索"  to="/movie/search"></van-tab>
    </van-tabs>

     <router-view>

     </router-view>
    <!-- 底部导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);

export default {
  components: {
    Header,
    Footer,
  },
  data() {   
   
     return{
        city:"选择地区"
     }
  },
};
</script>
  
<style lang="less" scoped>
   

   
</style>>
