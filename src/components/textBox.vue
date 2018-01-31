<template>
	<div class="tao">
		  <img :src="imgURL" class="icon">
		  <div class="text-box">
		  	<div class="label">{{label}}</div>
		  	<input type="text" v-model="message" @click="light()">
		  </div>
    </div>
</template>

<script>
	export default{
		name:'textBox',
		props:{
			label:String,
			imgURL:String,
			message:String
		},
		data(){
			return{

			}
		},
		methods:{
			light(){

			}
		}
	}
</script>

<style scoped>
	.text-box{
    	width: 85%;
    	height: 2.5rem;
       /* border-top: 1px solid black;
        border-bottom: 1px solid black;*/
        /*margin-top: 1rem;*/
        float: left;
        margin-left: 1rem;
    }
    
    .label{
    	font-size: 0.7rem;
    	width: 100%;
    	height: 1rem;
    	line-height: 1rem;
    	text-align: left;
    	color: #a9a9a9;
    	/*color: #1E90FF;*/
    }
    .text-box input{
    	width: 100%;
    	height: 1.5rem;
    	border: 0;
    	border-bottom: 0.01rem solid black;
    	/*border-top: 0.05rem solid black;*/
    	font-size: 1rem;
    	outline:none;

    }
    .text-box input:focus{
    	border-bottom: 0.05rem solid #1E90FF;
    }
	.icon{
		height: 1rem;
		width: 1rem;
		float: left;
		margin-top: 1.1rem;

	}
	.tao{
		width: 100%;
		height: 2.5rem;
		/*border: 1px solid black;*/
		margin-top: 0.85rem;
	}

</style>