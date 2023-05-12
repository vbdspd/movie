<template>
  <div>
    <keep-alive>
       <router-view>
           
       </router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
  export default {
      data() {
          return{
            a:1
          }
      },

      components: {
         Header,
         Footer
      },
  };
</script>

<style scoped>

</style>