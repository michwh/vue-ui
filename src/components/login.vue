<template>
  <div class=" sign-box">
    <div class="box">
      <p>华农一屋</p>
      <div class="input">
        <span class="mobile"></span>
        <input id="phone" type="text" placeholder="请输入账号" v-model="cellphone">
      </div>
      <div class="input">
        <span class="lock"></span>
        <input id="pwd" type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="sign-btn" v-on:click="login()" >
        {{btnText}}
      </div>
      <div class="forgive-and-reg">
        <span class="forgive">忘记密码</span>
        <router-link to="/register" ><span class="toreg" >还没有账号？去注册</span></router-link>            
      </div>
    </div>
    <mu-snackbar v-if="snackbar" :message="tipsMessage" class="tips"/> 
  </div> 
</template>

<script>
  export default{
    name:'login',
      data () {
        return {
          cellphone:'',
          password:'',
          isBtnLoading:false,
          snackbar:false,
          tipsMessage:'',
          isLoading:false
        }
      },
      computed: {
        btnText: function() {
          if(this.isLoading) return '登录中..';
          return '登陆';
        }
      },
      methods:{

        //显示提示面板
        showSnackbar: function(string) {
          this.snackbar=true;
          this.tipsMessage=string;
          this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
        },

        //登录前检查用户填写的信息
        checkMessage: function() {
          if(this.cellphone==''){
            this.showSnackbar("请输入账号");
            return false
          }
          if(this.password==''){
            this.showSnackbar("密码不能为空");
            return false
          }
          return true
        },

        //登录
        login: function() {
          if (!this.checkMessage()) {
            return
          }      
          let obj = {
            name: this.cellphone,
            password: this.password
          }
          const result = this.$http.post('/auth/users', obj);
				  result.then((res) => {
					 switch(res.data.code) {

					    case 200:
					      this.isLoading=true;
					      sessionStorage.setItem('demo-token', res.data.token)
					      this.$router.push('/home');
					      break;

					    case 201:
					      this.showSnackbar("用户名不存在！");
					      sessionStorage.setItem('demo-token', null)
					      break;

              case 202:
					      this.showSnackbar("密码不正确！");
					      sessionStorage.setItem('demo-token', null)
					      break;

            }					
				  }, (err) => {
					  console.log(err)
					  sessionStorage.setItem('demo-token', null) // 将token清空
				  })
				  return result
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
    height: 20rem;
}
 .input{
    width: 85%;
    height: 2.3rem;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    border: 1px solid #B9B9B9;
    background-color: #fff;
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

 .input input{
    outline: none;
    border: none;
}
 .sign-btn{
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
.forgive-and-reg{
    margin-top: 1rem;
    color: red;
}
.tips{
    font-size: 1rem;
    position: fixed;
    top: 1rem;
    height: 1.5rem;
}
.forgive-and-reg{

    width: 85%;
    font-size: 0.8rem;
    margin-top: 0.6rem;
}
.forgive{
    width: 50%;
    text-align: left;
    float: left;
}
.toreg{
    width: 50%;
    text-align: right;
}

</style>