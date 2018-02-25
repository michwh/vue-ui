<template>
	<div class="all">
		<v-header :title="title"></v-header>
		<v-list :collections="collections" :isCollection="isCollection"></v-list>
	</div>
</template>

<script>
import header from '@/components/header'
import list from '@/components/list'
	export default{
		name:'myCollection',
		components: {
		   'v-header': header,
       'v-list': list
	    },
		data () {
          return {
             collections:[],
            //userName:[],
            title:"我的收藏",
            isCollection:true
          }
        },
        methods:{

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
            
        },
        computed:{

        }
    }
</script>

<style scoped>

</style>