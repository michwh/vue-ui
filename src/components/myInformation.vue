<template>
	<div>
		<div class="header">
			<div class="header-icon" @click="back()"></div>
			<div class="header-cont">我的资料</div>
			<button type="button" class="header-release"></button>
		</div>
		<div class="head-pic">
		<input type="file" accept="image/*">
		<img :src="message.img_URL"><br>
		</div>
		 <!-- <mu-text-field label="用户名" hintText="提示文字" v-model="userName"/> -->
		<div class="content"> 

        <v-textBox :label="user" :imgURL="img1" :message="message.user_name"></v-textBox>
        <div class="tao">
        <img src="../assets/images/sex.png">
        <div class="select">

       <span class="select1"> 
       <input type="radio" class="radio" name="sex" v-model="message.sex" value="woman">女 
       </span>

        <span class="select2">
        <input type="radio" class="radio"name="sex" v-model="message.sex" value="man">男 
        </span>
        </div>
        </div>
        <v-textBox :label="school" :imgURL="img3" :message="message.school"></v-textBox>
        <v-textBox :label="introduction" :imgURL="img4" :message="message.introduction"></v-textBox>
        <v-textBox :label="contact" :imgURL="img5" :message="message.contact"></v-textBox>

		</div> 
	</div>
</template>

<script>
import textBox from '@/components/textBox'
	export default{
		name:'myInformation',
		components: {
		   'v-textBox':textBox
	    },
		data () {
          return {
             message:[],
             user:'用户名',
             school:'学校',
             introduction:'个人介绍',
             contact:'联系方式',
             img1:'/static/myInformation/people 2.png',
             img3:'/static/myInformation/location_fill (1).png',
             img4:'/static/myInformation/news.png',
             img5:'/static/myInformation/mail.png'
          }
        },
        methods:{
        	back () {
              history.back()
            },
        },
        created(){
        	var this_=this;
        	this.$http.get('http://localhost:8081/static/json/myInformation.json').then(

            function(response){
            	   this_.message=response.data;
                    //console.table(this_.message);
                },
            function(response){
                alert("连接json文件失败");
            });//axios.get结束
        },
    }
</script>

<style scoped>

	.header-release{
		height: 2.5rem;
		width: 2.5rem;
		background-image: url('../assets/images/check.png');
		background-repeat: no-repeat;
    background-position: center;
    background-size: 1.5rem 1.5rem;
		/*border: 1px solid black;*/
		float: right;
		margin-right:1rem;
		border: 0;
		background-color: #1E90FF;
	}
	.header{
		width: 100%;
		background-color: #1E90FF;
		height: 2.7rem;
		position: fixed;
		top: 0;
	}
	.header-icon{
		height: 2.5rem;
		width: 2.5rem;
		background-image: url('../assets/images/back.png');
		background-repeat: no-repeat;
    background-position: center;
    background-size: 1.3rem 1.3rem;
		/*border: 1px solid black;*/
		float: left;
	}
	.header-cont{
		color: #ffffff;
		font-size: 1.2rem;
		height: 2.5rem;
		width: 65%;
		/*border: 1px solid black;*/
		line-height: 2.5rem;
		padding-left: 1rem;
		text-align: left;
		float: left;
	}
	input[type="file"] {
        display: none;
    }
	.head-pic img{
		height: 4.5rem;
		width: 4.5rem;
		/*position: relative;*/
		margin: 0 auto;
		margin-top: 3.5rem;
		border-radius: 50%;
	}
    .content{
    	width: 85%;
    	margin: 0 auto;
    }
    .tao{
    	height: 2.5rem;
    	width: 100%;
    }
    .tao img{
    	height: 1rem;
		width: 1rem;
		float: left;
		margin-top: 1.1rem;
    }
    .select{
    	width: 7rem;
    	height: 2.5rem;
    	margin-top: 0.85rem;
    	/*border: 1px solid black;*/
    	margin-left: 1rem;
    }
    .radio{
    	width:1rem;
    	height: 1rem;
    	/*opacity: 0; */   	    	
    }
    span{
    	font-size: 0.9rem;
    	float: left;
    	margin-top: 0.75rem;
    	margin-left: 1rem;
    	/*height: 1.5rem;
    	width: 3rem;*/
    }
    
</style>