<template>
  <div class="mine">
      <div class="h_details_header">
              <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   修改密码
        </div>
        <div class="checkpwdbox">
            <div class="pwdbox">
                <span style="padding-left:15px" >旧密码</span><input type="password"  style="margin-left:60px" v-model="password"  class="checkbox">
            </div><div class="line"></div>

            <div class="pwdbox">
               <span  style="padding-left:15px">新密码</span>  <input type="password"   style="margin-left:60px"  class="checkbox" v-model="newpwd">
            </div>
            <div class="line"></div>

            <div class="pwdbox">
               <span  style="padding-left:15px">确认密码</span><input type="password"   style="margin-left:60px"  class="checkbox" v-model="surepwd">
           </div>   
               
        </div>
        <div class="logoutbox">
            <div class="logout" @click="login">确认</div>
        </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            password:'',
            newpwd:'',
            surepwd:''
        }
    },
    created(){
        
    },
    methods:{
        backto(){
            this.$router.go(-1);
        },
        login(){
            this.$ajax({
                method:'post',
                url:'/api/account/resetPwd',
                data:{
                    password:this.password,
                    newpwd:this.newpwd,
                    surepwd:this.surepwd,
                }
            })
            .then(response=>{
                console.log(response.data)
                if(response.data.re_message=="原密码不正确"){
                        Toast('原密码不正确');
                }
                
                if(response.data.re_message=="密码长度至少为6位"){
                        Toast('密码长度至少为6位');
                }
                
                if(response.data.re_message=="两次密码输入不一致"){
                        Toast('两次密码输入不一致');
                }
                
                if(response.data.re_message=="修改成功"){
                        Toast('密码修改成功,请重新登录');
                        setTimeout(()=>{
                            this.$router.push('/login')
                        },3000)
                }
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.h_details_header{
    text-align: center;
    height: 60px;
    line-height: 50px;
    color:#444444;
    font-size: 18px;
    padding-top: 10px;
    border-bottom: 1px solid #E7E7E7;
    background-color: #fff;
}
.go_back{
   position: absolute;
   color: #878787;
   font-size: 22px;
   width: 40px;
   left: 5px;
}
.checkpwdbox{
    margin-top: 10px;
    background-color: #fff;
}
.checkbox{
    width: 100%;
    height: 40px;
    padding-left: 20px;
    border: none;
}
.line{
    margin: 0 auto;
    width: 90%;
    height: 1px;
    background: #EDEDED;
}
.logoutbox{

  position: fixed;
  width: 100%;
  padding: 10px 45px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.logout{
  color: #fff;
  height: 35px;
  width: 100%;
  line-height: 35px;
  background-color: #FF4433;
}
.pwdbox{
    height: 50px;
    line-height: 50px;
    position: relative;
}
.pwdbox span{
    position: absolute;
}
</style>
