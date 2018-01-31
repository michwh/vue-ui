<template>
	<div class="header">
			<div class="header-icon" @click="back()"></div>
			<div class="header-cont">{{title}}</div>
	</div>
</template>

<script>
	export default{
		name:'header',
		props:{
			title:String
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
	.header{
		width: 100%;
		background-color: #1E90FF;
		height: 2.7rem;
		position: fixed;
		top: 0rem;
		z-index: 3;
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
</style>