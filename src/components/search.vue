<template>
  <div class="main">
    <div class="header-icon" @click="back()"></div>
    <input type="text">
    <p>搜索</p>
  </div>
</template>

<script>
	export default{
		name:'search',
		props:{
			
		},
		data(){
			return{

			}
		},
		methods:{
			back () {
        history.back()
      }
    }
  }
</script>

<style scoped>
.main {
  width: 100%;
  background-color: #dcdcdc;
  height: 2.5rem;
  position: fixed;
  top: 0rem;
  z-index: 3;
}
.main input {
  height: 2rem;
  width: 70%;
  background: #ffffff;
  float: left;
  /*border-radius: 10%;*/
  /*margin: 0 auto;*/
  margin-top: 0.25rem;
  border: 0;
  border-radius: 0.25rem;
  outline: none;
  font-size: 0.75rem;
}
.header-icon{
  height: 2.4rem;
  width: 2.4rem;
  background-image: url('../assets/images/back.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.3rem 1.3rem;
  /*border: 1px solid black;*/
  float: left;
}
.main p {
  font-size: 1rem;
  float: right;
  margin-right: 0.75rem;
  margin-top: 0.5rem;
}
</style>