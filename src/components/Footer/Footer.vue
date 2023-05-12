<!-- 底部导航栏 -->
<template>
   <div class="footer">
       <ul>
          <router-link tag="li" to="/movie" >
       
               <p>电影</p>
          </router-link>
          <router-link tag="li" to="/cinema">
         
               <p>影院</p>
          </router-link>
          <router-link tag="li" to="/mine">
      
               <p>我的</p>
          </router-link>
       </ul>
   </div>
</template>

<script>
export default {
   name:"Footer",
}
</script>

<style>
   .footer{
      width: 10rem;
      height: 1.4rem;
      background: white;
      border-top: 0.06rem solid #ebe8e3;
      position: fixed;
      left: 0;
      bottom: 0;
   }

   .footer ul{
    display: flex;
    text-align: center;

   }
   .footer ul .router-link-active{
    color: #e54847;
   }
   .footer li {
    flex: 1;
    height: 1.1rem;
   }

   .footer li p{
    font-size: 0.33rem;
    line-height:1.1rem;
   }

</style>