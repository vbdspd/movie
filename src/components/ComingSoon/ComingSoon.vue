<template>
  <div>
    <div class="movie_body">
      <div class="pic_show">
        <img
          src="https://static-cse.canva.cn/blob/37007/%E6%B5%81%E6%B5%AA4.jpg"
          alt=""
        />
      </div>
      <div class="col"></div>
      <div class="info_list">
        <h2>即将上映的电影</h2>
        <p>热度：<span class="grade">火热</span></p>
        <p class="actor">主演:托尼斯塔克</p>
        <p>已预购： 278991张</p>
      </div>
      <div class="purchase">
        <button>预购</button>
      </div>
    </div>
    <div class="movie_body">
      <div class="pic_show">
        <img
          src="https://static-cse.canva.cn/blob/37007/%E6%B5%81%E6%B5%AA4.jpg"
          alt=""
        />
      </div>
      <div class="col"></div>
      <div class="info_list">
        <h2>即将上映的电影</h2>
        <p>热度：<span class="grade">火热</span></p>
        <p class="actor">主演:托尼斯塔克</p>
        <p>已预购： 278991张</p>
      </div>
      <div class="purchase">
        <button>预购</button>
      </div>
    </div>
    <div class="movie_body">
      <div class="pic_show">
        <img
          src="https://static-cse.canva.cn/blob/37007/%E6%B5%81%E6%B5%AA4.jpg"
          alt=""
        />
      </div>
      <div class="col"></div>
      <div class="info_list">
        <h2>即将上映的电影</h2>
        <p>热度：<span class="grade">火热</span></p>
        <p class="actor">主演:托尼斯塔克</p>
        <p>已预购： 278991张</p>
      </div>
      <div class="purchase">
        <button>预购</button>
      </div>
    </div>
    <div class="movie_body">
      <div class="pic_show">
        <img
          src="https://static-cse.canva.cn/blob/37007/%E6%B5%81%E6%B5%AA4.jpg"
          alt=""
        />
      </div>
      <div class="col"></div>
      <div class="info_list">
        <h2>即将上映的电影</h2>
        <p>热度：<span class="grade">火热</span></p>
        <p class="actor">主演:托尼斯塔克</p>
        <p>已预购： 278991张</p>
      </div>
      <div class="purchase">
        <button>预购</button>
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