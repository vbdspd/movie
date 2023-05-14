<template>
  <div>
    <Header title="MC影院"></Header>
    <van-tabs v-model="active" :before-change="beforeChange">
      <van-tab :title="city" to="/cinema/localCity"> </van-tab>
      <van-tab :title="brand" to="/cinema/brand"></van-tab>
      <van-tab :title="select" to="/cinema/select"></van-tab>
    </van-tabs>

    <div class="content" v-show="isShow">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <CiList> </CiList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import CiList from "../../components/CiList/CiList";

import Vue from "vue";

import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  components: {
    Header,
    Footer,
    CiList,
  },
  data() {
    return {
      city: "全城",
      brand: "品牌",
      select: "筛选",
      active: Number(sessionStorage.getItem("active")),
      isShow: true,
    };
  },
  watch: {
    active(newVal, oldValue) {
      sessionStorage.setItem("active", newVal);
    },
  },
  methods: {
    beforeChange(index) {
      if (index == this.active) {
        this.isShow = !this.isShow;
      } else {
        this.isShow = true;
        return true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 10rem;
  position: absolute;
  left: 0;
}
</style>

