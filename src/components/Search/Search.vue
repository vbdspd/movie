<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="/电影/电视剧/综艺"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
     
    },
    onCancel() {
    
    },
  },
};
</script>

<style>
</style>