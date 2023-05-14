<template>
  <van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="activeIndex"
/>
</template>

<script>
import Vue from "vue";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: '上城区', children: [
          {
            text:'城东'
          },
          {
            text:'四季青'
          },
          {
            text:'丁桥'
          }
        ]},
        { text: '西湖区', children: []},
        { text: '钱塘区', children: []},
        { text: '拱墅区', children: []},
        { text: '余杭区', children: []},
        { text: '萧山区', children: []},
      ],
    };
  },
};
</script>

<style>
</style>