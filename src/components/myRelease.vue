<template>
	<div>
		<v-header :title="title"></v-header>
		<div class="list">
			<div class="goods" v-for="(release,index) in releases">
			 <div class="goods-tao">
			    <img :src="release.images_URL[0]">
			    <div class="goods-title-price">
			    <div class="tao">
			    	<div class="goods-title">{{release.title.slice(0,13)}}</div>
			    	    <div class="ellipsis" v-if="release.title.length>13">...</div>
			    </div>	
			    	<div class="goods-price">￥{{release.price}}</div>
			    </div>
			    <div class="goods-button">
			      <router-link :to="{path:'/release',query: {content:release}}"><div class="button">编辑</div></router-link>
			    	<div class="button" @click="deleteGoods(index)">删除</div>
			    </div>
				
			</div>
			<div class="goods-bottom"></div> 
			</div>
		</div>
	</div>
</template>

<script>
import header from '@/components/header'
	export default{
		name:'header',
		components: {
		   'v-header': header
	    },
		data(){
			return{
               title:"我的发布",
               releases:[]
			}
		},
		created(){
        	var this_=this;
        	this.$http.get('http://localhost:8081/static/json/myRelease.json').then(

            function(response){
                   this_.releases=response.data.release;
                    //alert(this_.collections);
                },
            function(response){
                alert("连接json文件失败");
            });//axios.get结束
            
        },
        methods:{
        	deleteGoods(index){
               this.releases.splice(index,1);
        	}
        	
        }
	}
</script>

<style scoped>
.list{
	width: 100%;
	position: absolute;
	top: 2.8rem;
}
.goods-tao{
	width: 92%;
	height: 7.4rem;
	position: relative;
	margin: 0 auto;
}
	.goods{
		width: 100%;
		height: 8rem;
		/*border: 1px solid black;*/
		position: relative;
		/*margin: 0 auto;*/
		/*border: 1px solid black;*/
	}
	.goods img{
		height: 4rem;
		width: 4rem;
		float: left;
		margin-top: 0.45rem;

	}
	.goods-title-price{
		height: 4rem;
		width: 70%;
		/*border: 1px solid black;*/
		float: left;
		margin-top: 0.45rem;
		margin-left: 0.5rem;
	}
	.goods-bottom{/*底部*/
		width: 100%;
		height: 0.6rem;
		position: absolute;
		bottom: 0rem;
		background: #e5e5e5;
	}
	.goods-button{/*按钮*/
		width: 100%;
		height: 2.5rem;
		border-top: solid 0.03rem #e5e5e5;
		/*border: 1px solid black;*/
		position: absolute;
		bottom: 0rem;
	}
	.goods-title{
		font-size: 0.9rem;
		text-align: left;
		float: left;
		font-weight: bold;
		
	}
	.ellipsis{
		font-size: 0.9rem;
		float: left;
		font-weight: bold;
		
	}
	.goods-price{
		font-size: 1rem;
		text-align: left;
		color: red;
		font-weight: bold;
		float: left;

	}
	.tao{
		width: 100%;
		height: 1.4rem;
	}
	.button{
		height: 1.5rem;
		width: 2.5rem;
		float: right;
		border: 1px solid black;
		font-size: 0.9rem;
		margin-right: 0.6rem;
		line-height: 1.5rem;
		margin-top: 0.5rem;
		color: #2c3e50;
	}
</style>