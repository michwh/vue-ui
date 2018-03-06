<template>
  <div>
    <div class="search">
      <img src="../assets/images/scan.png">
      <input type="text" placeholder="搜索宝贝">
      <img src="../assets/images/sort.png">
    </div>
	  <v-list :collections="collections" :isCollection="isCollection"></v-list>
    <v-menu></v-menu>
  </div>
</template>

<script>
  import list from '@/components/list'
  import menu from '@/components/menu'

  export default{
    name:'home',
	  components: {
      'v-list': list,
      'v-menu': menu,
	  },
    data() {
      return {
        collections:[],
        isCollection:false
      }
    },
    created(){
          var this_=this;
          this.$http.get('http://localhost:8081/static/json/myCollection.json').then(

            function(response){
                   this_.collections=response.data.collection;
                    //alert(this_.collections);
                },
            function(response){
                alert("连接json文件失败");
            });//axios.get结束
            //console.log(this.collections);
            
        }
    }	
</script>

<style scoped>
.search {
  width: 100%;
  background-color: #1E90FF;
  height: 2.5rem;
  position: fixed;
  top: 0rem;
  z-index: 3;
}
.search input {
  height: 1.8rem;
  width: 72%;
  background: #ffffff;
  /*margin: 0 auto;*/
  margin-top: 0.35rem;
  border: 0;
  border-radius: 0.25rem;
  outline: none;
  font-size: 0.75rem;
  float: left;
  margin-left: 0.25rem;
  border: 0.5rem solid #ffffff;
}
.search img {
  height: 1.8rem;
  width: 1.8rem;
  margin-top: 0.35rem;
  margin-left: 0.5rem;
  float: left;
}
</style>