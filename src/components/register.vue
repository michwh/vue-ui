<template>
    <div class="reg-box" >
    <div class="box">
        <mu-snackbar v-if="snackbar" :message="tipsMessage" class="tips"/>
        <p>华农一屋</p>
        <div class="input">
            <span class="mobile"></span>
            <input type="text" placeholder="请输入账号" v-model="cellphone">
        </div>
        <div class="input" >
            <span class="msg"></span>
            <input type="text"  placeholder="请输入邮箱地址" class="code" v-model="code" >
            <!-- <button type="button" class="get-code" :disabled="disabled" @click="getCode()">{{countDown}}{{judgeGetCode}}</button> -->
        </div>
        <div class="input">
            <span class="lock"></span>
            <input  type="password" placeholder="请输入密码" v-model="firstPassword">
        </div>
        <div class="input">
            <span class="lock"></span>
            <input  type="password" placeholder="请再次输入密码" v-model="secondPassword">
        </div>
        <div class="reg-btn" @click="regist()">
            {{btnText}}
        </div>
        <div class="tosign">
           <!--  <span>已有账号, 去登录</span> -->
           <router-link to="/login"><span>已有账号, 去登录</span></router-link>
        </div>
    </div>
    
</div>        
</template>

<script>
    export default{
        name:'register',
        data () {
          return {
             cellphone:'',
             firstPassword:'',
             secondPassword:'',
             code:'',
             disabled:true,
             snackbar:false,
             tipsMessage:'',
             count: 60,
            
          }
        },
        computed: {
            btnText: function() {
               return '注册';
            },
            /*
            judgeGetCode:function(){
                if(this.cellphone!=''&&this.firstPassword!=''&&this.secondPassword!=''){
                    this.disabled=false;
                }
            },
            countDown:function(){
               if(this.count==60){
                return '发送邮件';
               }else if(this.count>=0&&this.count<=60){
                return '重新发送('+this.count+'s)';
               }else{                
                clearInterval(this.star);
                this.count=60;
                this.disabled=false;
                return '发送邮件';
               }
            }
            */
        },
        methods:{
            //显示提示面板
            showSnackbar:function(string){
                this.snackbar=true;
                this.tipsMessage=string;
                this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
            },
            /*
            getCode:function(){
                this.showSnackbar("验证码发送成功！");
                this.disabled=true;
                this.star=setInterval(()=>{this.count--},1000)
            },
            */
            regist:function(){
                
                var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
                if(!reg.test(this.code)){
                    this.showSnackbar("邮箱格式不正确");
                }
                if(this.code==''){
                    this.showSnackbar("请输入您的邮箱");
                }
                if(this.firstPassword!=this.secondPassword){
                   this.showSnackbar("两次密码不一致");
                }
                if(this.firstPassword==""){
                    this.showSnackbar("密码不能为空");
                }
                if(this.cellphone==''){
                    this.showSnackbar("请输入您的账号");
                }

                /*
                this.$http.post('http://localhost:8081/static/json/user.json', {
                   user_name: this.cellphone,
                   password: this.firstPassword,
                   code:this.code
                })
               .then(function (response) {
               switch(response.data.code){
                case 200:this.isLoading=true;break;
                case 201:this.showSnackbar("用户名不存在！");break;
                case 202:this.showSnackbar("密码不正确！");break;
               }
                })
               .catch(function (error) {
                console.log(error);
                }); 
                */

            }
        }
    }
</script>

<style scoped>
p{
    margin-top:1rem ;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: #1E90FF;
}
span{
    display: inline-block;
}

.box{
    margin: 1rem 0;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    /*background-color: #E5E5E5;*/
    /*border: 1px solid black;*/
    height: 27rem;
}
 .input{
    width: 85%;
    height: 2.3rem;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    border: 1px solid #B9B9B9;
    /*background-color: #fff;*/
    margin-top: 1rem;
    
}
.box .input span{
    width: 2.5rem;
    height: 2.2rem;
    margin-right: 0.5rem;
    border-right: 1px solid #B9B9B9;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.2rem 1.2rem;
}
    .box .input .mobile {
        background-image: url('../assets/images/people.png');
    }
    .box .input .lock {
        background-image: url('../assets/images/lock.png');
    }
    .box .input .msg {
        background-image: url('../assets/images/mail.png');
    }

 .input input{
    outline: none;
    border: none;
    width: 75%;
}
.reg-btn{
    width: 85%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    border-radius: 0.2rem;
    text-align: center;
    border: none;
    color: #fff;
    background-color: #1E90FF;
    margin-top: 2rem;
}
.get-code {
    margin-left: 1.5rem;
    width: 5.1rem;
    height: 2.3rem;
    display: inline-block;
    /*margin-bottom: 0;*/
    vertical-align: middle;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    /*background-image: none;*/
    border: 1px solid transparent;
    border-radius: 0;
    cursor: pointer;
    outline: 0;
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /*
    -webkit-transition: background-color .3s ease-out,border-color .3s ease-out;
    transition: background-color .3s ease-out,border-color .3s ease-out;*/
    background-color: #1E90FF;
    border-radius: 0.2rem;
    box-shadow: none;
    color: #fff;
}
.get-code[disabled]{
    background-color: #dcdcdc;
}

.tosign{
    color: red;
    width: 100%;
    padding-right: 7.5%;
    font-size: 0.8rem;
    text-align: right;
    margin-top: 0.6rem;
}
.tips{
  /*margin-bottom: 3rem;*/
    /*margin-left: 4rem;*/
    /*margin: 0 auto;*/
    font-size: 1rem;
     position: fixed;
    top: 1rem;
    height: 1.5rem;
}
input[type="number"]{-moz-appearance:textfield;}
</style>


