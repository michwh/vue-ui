<template>
	<div class="main">
		<router-link to="/register" >还没有账号？去注册&nbsp;</router-link><br>
		<router-link to="/">已有账号, 去登录</router-link><br>
		<router-link to="/PersonalCenter">个人中心</router-link><br>
		<router-link to="/PersonalCenter/setUp">设置</router-link><br>
		<router-link to="/release">发布</router-link><br>
        <router-link to="/PersonalCenter/myCollection">我的收藏</router-link><br>
         <router-link to="/PersonalCenter/myRelease">我的发布</router-link><br>
        <router-link to="/PersonalCenter/setUp/myInformation">个人信息设置</router-link><br>
	</div>
</template>

<script>
	
</script>

<style scoped>
.main{
	font-size: 1rem;
}	
</style>