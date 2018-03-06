<template>
	<div class="menu">
    <router-link to="home" >
      <div class="icon index">
        <img src="../assets/images/home.png"><br>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="personalCenter" >
      <div class="icon message">
        <img src="../assets/images/message.png"><br>
        <span>消息</span>
      </div>
    </router-link>
    <router-link to="release" >
      <div class="icon release">
        <img src="../assets/images/round_add_fill.png">
        </div>
    </router-link>
    <router-link to="search" >
      <div class="icon my">
        <img src="../assets/images/search.png"><br>
        <span>搜索</span>
      </div>
    </router-link>
    <router-link to="personalCenter" >
      <div class="icon my">
        <img src="../assets/images/my.png"><br>
        <span>我的</span>
      </div>
    </router-link>
	</div>
</template>

<script>
  export default{
    name:'menu',
		data(){
			return{
        
			}
		},
		methods:{
						
		}
	} 
</script>

<style scoped>
.menu {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 3;
		height: 2.7rem;
		border-top: 0.03rem solid #dcdcdc;
		background-color: #ffffff;
}
.icon {
		height: 2.5rem;
		/*font-size: 0.75rem;*/
		color: #000000;
		float: left;
		margin: 0 auto;
		width: 20%;        
}
.icon img {
		height: 1.5rem;
		width: 1.5rem;
		margin-top: 0.1rem;
}
.release img {
		height: 2.3rem;
		width: 2.3rem;
}
.icon span {
		font-size: 0.6rem;
		/*margin-top: 0.2rem; */ 
} 
</style>