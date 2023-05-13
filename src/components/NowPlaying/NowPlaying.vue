<template>
<div class="content">
    <div class="movie_body">
    <div class="pic_show">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.SwLwbanZggu8SxwpFoD8KQHaNK?pid=ImgDet&rs=1" alt="" />
    </div>
    <div class="col">

    </div>
    <div class="info_list">
      <h2>某某电影</h2>
      <p>评分: <span class="grade">839</span></p>
      <p class="actor">主演:杰森斯坦森、杰森斯坦森杰森、</p>
      <p>今天至少两百场</p>
    </div>
    <div class="purchase">
         <button>购买</button>
    </div>
  </div>
  <div class="movie_body">
    <div class="pic_show">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.SwLwbanZggu8SxwpFoD8KQHaNK?pid=ImgDet&rs=1" alt="" />
    </div>
    <div class="col">

    </div>
    <div class="info_list">
      <h2>某某电影</h2>
      <p>评分: <span class="grade">839</span></p>
      <p class="actor">主演:杰森斯坦森、杰森斯坦森杰森、</p>
      <p>今天至少两百场</p>
    </div>
    <div class="purchase">
         <button>购买</button>
    </div>
  </div>

  <div class="movie_body">
    <div class="pic_show">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.SwLwbanZggu8SxwpFoD8KQHaNK?pid=ImgDet&rs=1" alt="" />
    </div>
    <div class="col">

    </div>
    <div class="info_list">
      <h2>某某电影</h2>
      <p>评分: <span class="grade">839</span></p>
      <p class="actor">主演:杰森斯坦森、杰森斯坦森杰森、</p>
      <p>今天至少两百场</p>
    </div>
    <div class="purchase">
         <button>购买</button>
    </div>
  </div>
  <div class="movie_body">
    <div class="pic_show">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.SwLwbanZggu8SxwpFoD8KQHaNK?pid=ImgDet&rs=1" alt="" />
    </div>
    <div class="col">

    </div>
    <div class="info_list">
      <h2>某某电影</h2>
      <p>评分: <span class="grade">839</span></p>
      <p class="actor">主演:杰森斯坦森、杰森斯坦森杰森、</p>
      <p>今天至少两百场</p>
    </div>
    <div class="purchase">
         <button>购买</button>
    </div>
  </div>
  <div class="movie_body">
    <div class="pic_show">
      <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.SwLwbanZggu8SxwpFoD8KQHaNK?pid=ImgDet&rs=1" alt="" />
    </div>
    <div class="col">

    </div>
    <div class="info_list">
      <h2>某某电影</h2>
      <p>评分: <span class="grade">839</span></p>
      <p class="actor">主演:杰森斯坦森、杰森斯坦森杰森、</p>
      <p>今天至少两百场</p>
    </div>
    <div class="purchase">
         <button>购买</button>
    </div>
  </div>
  
  
</div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.content{
    overflow: auto;
}
.movie_body {
   background: #ffffff;
   
   display: flex;
   border-bottom:0.03rem solid #e6e6ee;
   height: 2rem;
  padding: 0.04rem;
   .pic_show{
       flex: 2;
       img{
           height: 1.8rem;
       
       }
       margin-right: 0.3rem;
   }
   
   .info_list{
    flex: 6;
    h2{
        font-weight: bolder;

    }
    .actor{
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
   }
   .purchase{
     flex: 2;
     text-align: center;
     line-height: 2rem;
     button{
        line-height: 0.7rem;
        width:1.2rem;
        border-radius: 0.1rem;
         background: #3c9fe6;
     }
   }

}

 
</style>