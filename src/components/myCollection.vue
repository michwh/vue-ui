<template>
	<div class="all">
		<v-header :title="title"></v-header>
		<div class="list">
			<div class="goods" v-for="(collection,index) in collections">
			    <div class="goods-head">
			    	<img :src="collection.user_image_URL">
			    	<div class="user-name">{{collection.user_name.slice(0,6)}}</div>
			    	<div class="ellipsis" v-if="collection.user_name.length>6">...</div>
			    	<div class="price">￥{{collection.goods_price}}</div>
			    </div>
                 <div class="goods-image">
                   <!--  <div class="image" v-for="img in collection.goods_image_URL"> -->
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
                    <div class="title">{{collection.title.slice(0,18)}}</div>
                    <div class="ellipsis" v-if="collection.title.length>18">...</div>
                </div>
                <div class="goods-button" @click="switchCollection(index)" >

                	<div class="button" v-if="collection.collect_state">               
                	<img src="../assets/images/favor_fill.png">
                	 <p>取消收藏</p>
                	 </div>

                     <div class="button" v-else>
                     <img src="../assets/images/favor.png" :style="{'margin-left':0.8+'rem'}">
                	 <p :style="{width:2+'rem'}">收藏</p>
                	</div>
                </div> 
				<div class="goods-bottom">
					
				</div> 
			</div>
		</div>
	</div>
</template>

<script>
import header from '@/components/header'
	export default{
		name:'myCollection',
		components: {
		   'v-header': header
	    },
		data () {
          return {
             collections:[],
            userName:[],
            title:"我的收藏"
          }
        },
        methods:{
        	switchCollection:function(key){
                this.collections[key].collect_state=!this.collections[key].collect_state;
        	},

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
	
	.list{
		width: 100%;
		position: absolute;
		top: 2.8rem;
	}
	.goods{
		/*width: 100%;*/
		height: 15rem;
		/*border: 1px solid black;*/
		position: relative;
		margin-top: 0rem;
		/*overflow: hidden;*/
	}
	.goods-bottom{
		width: 100%;
		height: 0.6rem;
		position: absolute;
		bottom: 0rem;
		background: #e5e5e5;
	}
	.goods-head{
		width: 92%;
		height: 3rem;
		/*border: 1px solid black;*/
		margin:0 auto;
	}
	.goods-head img{
		height: 2.8rem;
		width: 2.8rem;
		border-radius: 50%;
		/*border:1px solid black;*/
		margin-top: 0.1rem;
		float: left;
		margin-left: 0.2rem;
	}
    .user-name{
    	height: 1.4rem;
    	/*width: 6rem;
    	border:1px solid black;*/
    	float: left;
    	margin-top: 0.46rem;
    	margin-left: 0.2rem;
    	font-size:0.95rem;
    	text-align: left;
    	font-weight: bold;
    }
    .ellipsis{
    	height: 1.4rem;
    	float: left;
    	margin-top: 0.4rem;
    	font-size:0.9rem;
    	text-align: left;
    	font-weight: bold;
    	margin-left: 0rem;
    }
    .price{
    	height: 1.4rem;
    	width: 5rem;
    	float: right;
    	text-align: right;
    	/*border: 1px solid black;*/
    	color: red;
    	font-size: 1rem;
    	font-weight: bold;
    	margin-top: 0.4rem;
    }
	.goods-image{
		width: 92%;
		height: 8.7rem;
		/*border: 1px solid black;*/
		border-bottom: solid 0.03rem #e5e5e5;
		margin: 0 auto;
      
	}
	.title{
		/*width: 80%;*/
		height: 2rem;
		/*border: 1px solid black;*/
		margin-left: 0.2rem;
		font-size: 0.9rem;
		font-weight: bold;
		text-align: left;
		line-height: 2rem;
		float: left;
	}
	.tao{
		width: 100%;
		overflow-x: scroll;

	}
	
	.imgs1{
		width: 100%;
		height: 6.5rem;
		margin-top: 0.2rem;
	}
	.imgs2{
		width: 20.1rem;
		height: 6.5rem;
		margin-top: 0.2rem;
	}
	.imgs3{
		width: 26.8rem;
		height: 6.5rem;
		margin-top: 0.2rem;
	}
	.goods-image img{
        width:6.5rem;
        height: 6.5rem;
        float: left;
        
        margin-left: 0.2rem;
	}
	.goods-button{
		width: 92%;
		height: 2.3rem;
		/*border: 1px solid black;*/
		margin: 0 auto;
	}
	.button{
		height: 1.6rem;
		width: 4.5rem;
		float: right;
		border: 0.05rem black solid;
		margin-top: 0.45rem;
	}
	.button img{
		height: 1rem;
		width: 1rem;
		margin-top: 0.3rem;
		float: left;
		margin-left: 0.25rem;
	}
	.button p{
		font-size: 0.7rem;
		line-height: 1.7rem;
		height: 1.6rem;
		width: 3rem;
		float: left;
		/*border: 1px black solid;*/
		margin-top: 0rem;
		font-weight: bold;
	}

</style>