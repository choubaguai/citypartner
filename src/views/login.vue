<template>
    <div class="main">
        <div class="logo">
            <img src="../../static/images/icon_logon_logo.png" alt="">
        </div>
        <div class="frombox">
           <span class="iconfirst icon iconfont icon-yonghuming"></span><input type="text" placeholder="用户名"   v-model="account">
           <div class="online"></div>
            <span class="icontsecond icon iconfont icon-password"></span><input type="password" placeholder="密码" v-model="password">
        </div>
        <div class="user_login_box">
            <mt-button ref="u_l" size="large" class="user_login" @click="login">登录</mt-button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            account:'',
            password:'',
        }
    },
    methods:{
          login(){
                this.$ajax({
                    method: 'post',
                    url: '/api/doLogin',
                    data: {
                        account :this.account,
                        password : this.password
                    }
                })
                .then(response =>{
                    if(response.data.flag=="没有该账号"){
                        Toast('该用户不存在');
                    }
                    if(response.data.flag=="密码输入错误"){
                        Toast('密码输入错误,请重新输入');
                    }
                    console.log(response)
                   if(response.data.flag!="没有该账号" && response.status==200 && response.statusText == "OK" && response.data.flag!="密码输入错误"){
                        localStorage.setItem("username",response.data.user.account)
                        localStorage.setItem("promotionCode",response.data.user.promotionCode)
                        localStorage.setItem("displayName",response.data.user.displayName)
                        localStorage.setItem("income",response.data.user.income)
                        localStorage.setItem("incomeBack",response.data.user.incomeBack)
                        
                       this.$router.push('/main');
                   }
                })
                .catch(error =>{
                    console.log(error) 
                    
                });
          }
    }

}
</script>

<style scoped>
.main{
    height: 100%;
    background-color: #fff;
}
.logo{ 
    width: 100%;
    text-align: center;
}
.logo>img{
    margin-top: 50px;
   width: 40%;
}
.frombox{
    margin:0px 10px 10px 10px;
    background-color: #F2F1ED;
    padding:3px 20px;
    border-radius: 10px;
    position: relative;
}
.frombox>input{
    border:0px;
    height: 55px;
    background-color: #F2F1ED;
    padding-left: 40px;
    margin-bottom: 0px;
    
}
/* .frombox>input:nth-of-type(1){
    border-bottom: 1px solid #CDCDCB;
} */
.frombox>input:nth-of-type(1) i{
  
}
.iconfont{
    font-size: 20px;
    color: #E93429;
}
.iconfirst{
    position: absolute;
    left: 25px;
    top: 21px;
}
.icontsecond{
    position: absolute;
    bottom: 23px;
    left: 25px;
}
.online{
    height: 1px;
    background-color: #CDCDCB;
}
.mint-button--large{
    height: 45px;
}
.user_login_box{
    padding: 10px;
}
.user_login{
    width: 100%;
    background-color: #EF4F4F !important;
    border-radius: 5px;
    height: 45px;
    font-size: 18px !important;
    color: #fff !important;
    
}
</style>
