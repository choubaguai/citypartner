<template>
  <div class="mine">
        <div class="h_details_header">
              <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   西安(00010)
        </div>
        <div class="checkpwd">
            <ul>
              <li>
                   <router-link :to="{name:'changepassword'}" class="clearfix">
                      <div>修改密码</div>
                     </router-link>
              </li>
            </ul>
        </div>
        <div class="logoutbox">
            <div class="logout">退出登录</div>
        </div>
        
  </div>
</template>

<script>
export default {
  created(){
    
  },
    methods:{
      backto(){
          this.$router.go(-1)
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
.checkpwd{

}
.checkpwd ul{

}
.checkpwd ul li{
 background-color: #fff;
 margin-top: 10px;
 height: 40px;
 line-height: 40px;
 padding:0px 13px;
 position: relative;
}
li::after{
  content: ">";
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  font: bold 20px 'simsun';
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

</style>
