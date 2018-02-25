<template>
  <div>
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
      'v-menu': menu
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

</style>