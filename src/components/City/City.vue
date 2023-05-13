<!-- 用于选择城市 -->
<template>
  <div class="city">
    <van-area
      :title="title"
      :area-list="areaList"
      @confirm="confirm"
      @cancel="cancel"

      @change="change"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import Vue from "vue";
import { Area } from "vant";

Vue.use(Area);

export default {
  data() {
    return {
      areaList,
    };
  },
  props: {
    title: {
      type: String,
      default: "城市选择",
    },
  },
  methods: {
    confirm(a) {
     console.log(a)
        this.$router.back()
    },

    cancel() {
       this.$router.back()
    },
    change(){
       
    }
  },
};
</script>

<style>
.city {
  height: 10rem;
}
</style>