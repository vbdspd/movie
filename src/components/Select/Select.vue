<template>
   <div class="select">
      <div class="serveType">
           影院服务
      </div>
      <div class="serveContent">
         <button>全部</button>
           <button>可改签</button>
           <button>可退票</button>
      </div>
      <div class="cinemaType">
             影厅类型
      </div>
      <div class="cinemaContent">
           <button>全部</button>
           <button>IMAX厅</button>

           <button>Real厅</button>
           <button>4DX厅</button>
           <button>全部</button>
           <button>IMAX厅</button>

           <button>Real厅</button>
           <button>4DX厅</button>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.select{
   background: #fff;
   display: flex;
   flex-direction: column;
   height: 12rem;
   padding-left: 0.5rem;
   .serveType,.cinemaType{
    display: flex;
    height: 1rem;
    font-size: 0.45rem;
    line-height: 1rem;
    font-weight: 600;

   
}
.serveContent,.cinemaContent{
   button{
       width: 2rem;
       height: 1rem;
      &:nth-child(n+1){
         margin-left: 0.5rem;
         margin-top: 0.3rem;
         
      }
   }
   
   
}
} 


</style>