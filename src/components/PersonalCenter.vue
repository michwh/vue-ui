<template>
  <div>
    <div class="head">
      <img :src=head class="pic">
      <p class="user-name">{{username}}</p>
    </div>
    <div class="isolation-belt"></div>
      <router-link to="PersonalCenter/myRelease" >
        <div class="content">
          <img src="../assets/images/write_fill.png">
          <span>我的发布</span>
        </div>
      </router-link>
      <router-link to="PersonalCenter/myCollection" >
        <div class="content">
          <img src="../assets/images/favor_fill.png">
          <span>我的收藏</span>
        </div>
      </router-link>
      <router-link to="PersonalCenter/setUp" >
        <div class="content">
          <img src="../assets/images/settings.png">
          <span>设置</span> 
        </div>
      </router-link>
      <v-menu></v-menu>      
  </div>    
</template>

<script>
import menu from '@/components/menu'
import jwt from 'jsonwebtoken'
export default{
    name:'PersonalCenter',
    components: {
       'v-menu': menu
      },
    created(){
      const userInfo = this.getUserInfo();
      if(userInfo !== null){
        this.username = userInfo.name;
        this.head = userInfo.head;
      }
    },
    data(){
        return{
          username:'',
          head:''
        }

    },
    methods: {
      getUserInfo () {
      const token = sessionStorage.getItem('demo-token')
      if (token !== null && token !== 'null') {
        let decode = jwt.decode(token)
        return decode
      } else {
        return null
      }
    },
    }
}   
</script>

<style scoped>
.head {
  height: 6rem;
  /*border: 1px solid black;*/
  width: 90%;
  margin: 0 auto;
  /*border-bottom: 0.1rem #dcdcdc solid;*/
  /*box-shadow: 0.1rem 0.1rem #dcdcdc;*/
}
.user-name {
  width: 70%;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: left;
  float: left;
  margin-left: 1rem;
}
.pic {
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  float: left;
  margin-top: 1.25rem;
  /*margin-right: 0.5rem;*/
}
.isolation-belt {
  height: 0.3rem;
  background: #dcdcdc;
}
.content {
  width: 90%;
  height: 3rem;
  margin: 0 auto;
  border-bottom: 0.02rem #dcdcdc solid;
}
.content img {
  height: 1.5rem;
  width: 1.5rem;
  float: left;
  margin-top: 0.75rem;
}
.content span {
  font-size: 1rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 1rem;
  color: #000000;
}
</style>
