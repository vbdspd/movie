<template>
    <div>
        <Header title="个人中心"></Header>
        <Login></Login>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import Login from "../../components/Login/Login.vue"
export default {
   components:{
      Header,
      Footer,
      Login
   }
}
</script>

<style>

</style>