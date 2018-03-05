<template>
	<div class="all">
		<div class="header">
			<div class="header-icon" @click="back()"></div>
			<div class="header-cont">发布</div>
			<button type="button" class="header-release" :disabled="releaseDisabled" @click="release()"></button>
		</div>
		<div class="message">
			<div class="title">
				<input type="text" placeholder="标题"  v-model="title">{{watchRelease}}
			</div>
			<div class="describe">
				<textarea type="text" placeholder="内容描述..." v-model="describe"></textarea>
				<div class="picture">
				    <div v-for="(data,index) in imageDataList" class="img-uploader-preview">
                        <div class="preview-img" @click="showDeleteIcon()">
                            <img :src="data"/>
                        </div>
                        <img src="../assets/images/round_close.png" class="img-uploader-delete-btn" @click="deleteImg(index)" v-if="deleteIcon"/>
                    </div>
                   <label class="add">
                        <input type="file" accept="image/*" multiple="multiple" @change="handleFileChange" :disabled="inputDisabled">{{watchInput}}
                   </label>
			    </div>
			</div>
		</div>
		<div class="else">
			<div class="price-area">
				<div class="price-area-words">价格：</div>
				<input type="number" v-model="price" placeholder="￥0.00">
			</div>
			<div class="contact-area">
				<div class="contact-area-words">联系方式：</div>
				<input type="text"  v-model="contact" placeholder="电话/微信/QQ">
			</div>
		</div>
	</div>
</template>

<script>

import jwt from 'jsonwebtoken'

	export default{
		name:'release',
		data () {
      return {
        releaseDisabled:true,
        inputDisabled:false,
        title:'',
        describe:'',
        // 预览图片地址
        imageDataList: [],
        imagesNum:0,
        deleteIcon:false,
        price:'',
        contact:'',
        content:[],
        userName:'',
        head:'', //用户头像
        id: 1
      }
    },
    methods:{
      getUserInfo () {
        const token = sessionStorage.getItem('demo-token')
        if (token !== null && token !== 'null') {
          let decode = jwt.decode(token)
          return decode
        } else {
        return null
        }
      },
      handleFileChange(e){
        var files = e.target.files;
        if (!files.length)return; 
          this.createImage(files);
        },
      back () {
        history.back()
      },
      showDeleteIcon(){
        this.deleteIcon=true;
      },
      deleteImg(index){
        this.imageDataList.splice(index, 1);
        this.imagesNum=this.imagesNum-1;
      },
      createImage(file){
        if(typeof FileReader==='undefined'){
          alert('您的浏览器不支持图片上传，请升级您的浏览器');
          return false;
        }
        var image = new Image();         
        var vm = this;
        var leng=file.length;
        for(var i=0;i<leng;i++){
          var reader = new FileReader();
          reader.readAsDataURL(file[i]); 
          reader.onload =function(e){
            vm.imageDataList.push(e.target.result);
            vm.imagesNum=vm.imageDataList.length;                                    
          };                 
        }
        //alert(vm.imageDataList);     
      },
      release () {
        //let this_ = this
        let date = new Date();
        let obj = {
          id: this.id++,
          userName: this.userName,
          avarar: this.head,
          price: this.price,
          productImg: this.imageDataList.join("|"),
          title: this.title,
          illustration: this.describe,
          date: date.toLocaleDateString(),
          contact: this.contact 
        }
        //this_.id++;
        this.$http.post('/api/publish', obj)
          .then((res) => {
            if(res.data.code === 200) {
              console.log("发布成功");
            }
          }, (err) => {
            console.log(err)
          })
      }
    },
    computed:{
      watchRelease:function(){
        if(this.title.length>0&&this.price.length>0&&this.contact.length>0&&this.imagesNum>0){
          this.releaseDisabled=false;
        }
      },
      watchInput:function(){
        if(this.imagesNum>3){
          this.inputDisabled=true;
        } else {
          this.inputDisabled=false;
          }
      }
    },
    created(){
      if(this.$route.query.content){
        this.content = this.$route.query.content;
        this.title = this.content.title;
        this.describe = this.content.describe;
        this.imageDataList = this.content.images_URL;
        this.price = this.content.price;
        this.contact = this.content.contact;
        this.imagesNum = this.content.images_URL.length;
      }
      const userInfo = this.getUserInfo();
      if(userInfo !== null){
        this.userName = userInfo.name;
        this.head = userInfo.head;
      }
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
	.header-release[disabled]{
		background-image: url('../assets/images/check2.png');
	}
	.header{
		width: 100%;
		background-color: #1E90FF;
		height: 2.7rem;
		position: absolute;
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
	.message{
		width: 100%;
		height: 14.4rem;
		/*border: 1px solid black;*/
		position: absolute;
		top: 2.7rem;
		/*border-bottom: 1px solid #a9a9a9;*/
        background: #ffffff;
	}
	.title{
		width: 90%;
		height: 2.5rem;
		/*border: 1px solid black;*/
		position: relative;
		margin:0 auto;
	}
	.title input{
		width: 100%;
		height: 2.4rem;
		font-size: 1.1rem;
		border: none;
		border-bottom: 1px solid #a9a9a9;
		outline:none;
	}
	.describe{
		width: 90%;
		height: 13.4rem;
		/*border: 1px solid black;*/
		position: relative;
		margin:0 auto;
	}
	.describe textarea{
		width: 100%;
		height: 8rem;
		font-size: 0.9rem;
		border: none;
		/*border-bottom: 1px solid #a9a9a9;*/
		outline:none;
	}
	.picture{
		width: 100%;
		height: 3.4rem;
		/*border: 1px solid black;*/

	}
	 .add{
		display: inline-block;
		background-image: url('../assets/images/add2.png');
		background-repeat: no-repeat;
    background-position: center;
    background-size: 3.2rem 3.2rem;
    height: 3.2rem;
    width: 3.2rem;
   /* border: 1px solid black;*/
    float: left;
   /* border: 0;*/
    background-color: #ffffff;
    /*border-radius: 50%;*/
    /*display: none;*/
    margin-left: 0.2rem;
    margin-top:0.1rem;

	}
	.add input[type="file"] {
        display: none;
    }
	.img-uploader-preview{
		/*border-radius: 50%;*/
		height: 3.2rem;
    width: 3.2rem;
   /* border: 1px solid black;*/
     float: left;
     margin-top:0.1rem;
     margin-left: 0.2rem;
     background-size: cover;
     position: relative;
    /* overflow: hidden;*/
	}
	.preview-img img{
		height: 3.2rem;
    width: 3.2rem;
	}
	.img-uploader-delete-btn{
		
    z-index: 3;
    width: 1.1rem;
    height: 1.1rem;
    top:0rem;
    position: absolute;
    right: 0rem;
	}
.else{
	width: 100%;
	height: 4.04rem;
	/*border: 1px solid black;*/
	position: absolute;
	top: 18rem;
	background: #ffffff;
}
.price-area {
	width: 90%;
	height: 2rem;
	border-bottom: 0.05rem solid #e5e5e5;
	margin: 0 auto;
}
.contact-area{
	width: 90%;
	height: 2rem;
	/*border-bottom: 0.05rem solid #a9a9a9;*/
	margin: 0 auto;
}
.price-area-words {
	font-size: 0.9rem;
	float: left;
	height: 2rem;
	/*border: 1px solid black;*/
	text-align: left;
	line-height: 2rem;
	width: 16%;
	/*border:0rem;*/
}
.price-area input {
	height: 100%;
	font-size: 1rem;
	float: left;
	line-height: 2rem;
	width: 84%;
	border: 0rem;
	outline:none;
}
.contact-area-words{
	font-size: 0.9rem;
	float: left;
	height: 2rem;
	/*border: 1px solid black;*/
	text-align: left;
	line-height: 2rem;
	width: 27%;
	/*border: 0rem;*/
}
.contact-area input {
	height: 100%;
	font-size: 1rem;
	float: left;
	line-height: 2rem;
	width: 73%;
	border: 0rem;
	outline:none;
}
input[type="number"]{-moz-appearance:textfield;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>