<template>
	<div class="all">
		<v-header :title="title"></v-header>
		<div class="content">
			<div class="personal-data">
			<router-link to="/PersonalCenter/setUp/myInformation">
			<div class="center">
			 <div class="words">个人资料设置</div>
				<img src="../assets/images/right.png">
			</div>
			</router-link>	
			</div>

			<div class="personal-data">
			<div class="center">
				<div class="words">修改密码</div>
				<img src="../assets/images/right.png">
			</div>	
			</div>
		</div>
		<div class="sign-out">
		<button>退出登录</button>
		</div>
	</div>
</template>

<script>
import header from '@/components/header'
	export default{
		name:'setUp',
		components: {
		   'v-header': header
	    },
		data () {
          return {
             title:"设置"
          }
        },
        methods:{
        	
        }
    }
</script>

<style scoped>
.all{
	position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #F5F5F5;
    }
	
	.content{
		height: 5rem;
        width: 100%;
        background-color: #ffffff;
        position: absolute;
        top: 3.5rem;
	}
	.personal-data{
		width: 100%;
		height: 2.5rem;
		border-bottom: 0.04rem solid #e5e5e5;
	}
	.words{
		height: 2.5rem;
		width: 80%;
		/*border-right: 1px solid #a9a9a9;*/
		position: relative;
		float: left;
		font-size: 0.95rem;
		text-align: left;
		line-height: 2.5rem;
		color: #2c3e50;
	}
	.personal-data img{
		height: 1.3rem;
		width: 1.3rem;
		position: relative;
		float: right;
		margin-top: 0.6rem;

	}
	.center{
		width: 90%;
		height: 2.5rem;
		margin: 0 auto;

	}
	button{
		width: 90%;
		height: 2.3rem;
		font-size: 1rem;
		text-align: center;
		background: #FF6347;
		margin: 0 auto;
		color: #ffffff;
		line-height: 2.3rem;
		border: 0;
	}
	.sign-out{
		width: 100%;
		height: 2.3rem;
		position: absolute;
		bottom: 2rem;
	}
</style>