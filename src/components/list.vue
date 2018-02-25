<template>
  <div class="list">
    <div class="goods" v-for="(collection,index) in collections">
      <div class="goods-head">
        <img :src="collection.user_image_URL">
        <div class="user-name">{{collection.user_name}}</div>
        <div class="price">￥{{collection.goods_price}}</div>
      </div>
      <div class="goods-image">
        <div class="tao">
          <div class="imgs1" v-if="collection.goods_image_URL.length<3">
            <img v-for="(img,index) in collection.goods_image_URL" :src="img" > 
          </div>
          <div class="imgs2" v-if="collection.goods_image_URL.length==3">
            <img v-for="(img,index) in collection.goods_image_URL" :src="img" > 
          </div>
          <div class="imgs3" v-if="collection.goods_image_URL.length==4">
            <img v-for="(img,index) in collection.goods_image_URL" :src="img" > 
          </div>
        </div>
        <div class="title">{{collection.title}}</div>
      </div>
      <div class="goods-button" @click="switchCollection(index)" >
        <p class="date">{{collection.date}}</p>
        <div class="button" v-show="isCollection">
          <div v-if="collection.collect_state">               
              <img src="../assets/images/favor_fill.png">
               <p>取消收藏</p>
          </div>
          <div v-else>
            <img src="../assets/images/favor.png" :style="{'margin-left':0.8+'rem'}">
            <p :style="{width:2+'rem'}">收藏</p>
          </div>
         </div>
      </div> 
      <div class="goods-bottom"></div> 
    </div>
  </div>
</template>

<script>
  export default{
    name:'list',
    props:{
      collections:Array,
      isCollection:Boolean
    },
    data(){
      return{

      }
    },
    methods:{
      switchCollection:function(key){
        this.collections[key].collect_state=!this.collections[key].collect_state;
          }
    }
  }
</script>

<style scoped>
.list {
  width: 100%;
  position: absolute;
  top: 2.5rem;
}
.goods {
  height: 14.5rem;
  position: relative;
  margin-top: 0rem;
}
.goods-bottom {
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: 0rem;
  background: #e5e5e5;
}
.goods-head {
  width: 92%;
  height: 3rem;
  margin:0 auto;
}
.goods-head img {
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 50%;
  margin-top: 0.2rem;
  float: left;
}
.user-name {
  height: 1.4rem;
  float: left;
  margin-top: 0.46rem;
  margin-left: 0.2rem;
  font-size:0.95rem;
  text-align: left;
  font-weight: bold;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 10rem;
}
.price {
  height: 1.4rem;
  width: 4rem;
  float: right;
  text-align: right;
  color: red;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.4rem;
}
.goods-image {
  width: 92%;
  height: 8.7rem;
  border-bottom: solid 0.03rem #e5e5e5;
  margin: 0 auto;      
}
.title {
  height: 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;
  line-height: 2rem;
  float: left;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 100%;
}
.tao {
  width: 100%;
  overflow-x: scroll;
}  
.imgs1 {
  width: 100%;
  height: 6.5rem;
  margin-top: 0.2rem;
}
.imgs2 {
  width: 19.5rem;
  height: 6.5rem;
  margin-top: 0.2rem;
}
.imgs3 {
  width: 26rem;
  height: 6.5rem;
  margin-top: 0.2rem;
}
.goods-image img {
  width:6.5rem;
  height: 6.5rem;
  float: left;        
}
.goods-button {
  width: 92%;
  height: 2.3rem;
  margin: 0 auto;
}
.button {
  height: 1.6rem;
  width: 4.5rem;
  float: right;
  border: 0.05rem black solid;
  margin-top: 0.35rem;
}
.button img {
  height: 1rem;
  width: 1rem;
  margin-top: 0.3rem;
  float: left;
  margin-left: 0.25rem;
}
.button p {
  font-size: 0.7rem;
  line-height: 1.7rem;
  height: 1.6rem;
  width: 3rem;
  float: left;
  margin-top: 0rem;
  font-weight: bold;
}
.date {
  color: #dcdcdc;
  font-size: 0.8rem;
  float: left;
  line-height: 0.8rem;
}
</style>