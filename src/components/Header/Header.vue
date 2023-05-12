<!-- 头部组件 -->
<template>
   <div class="header">
       <h1>{{ title }}</h1>
   </div>
</template>

<script>
export default {
    name:"Header",
    props:{
       title:{
        typeof:String,
        default:'MC影视'
       }
    },
    methods:{
      
    }

}
</script>

<style scoped lang="less">
   .header{
       width: 10rem;
       height: 1.4rem;
       background: #e54847;
       color: #ffffff;
       border-bottom:0.03rem solid #e54847;
       position: relative;
   }

   .header h1{
    font-size: 0.5rem;
     text-align: center;
     line-height: 1.4rem;
     font-weight: normal;
   }

   .header i{
      position:absolute;
      left: 0.14rem;
      margin-top: -0.4rem;
      font-size: 0.6rem;
   }
</style>