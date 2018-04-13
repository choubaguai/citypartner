<template>
  <div class="mine">
       <div class="h_details_header">
              <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   添加账号
        </div>
        <form action="submitames">
            <div class="tab_header">
                    <!-- <label style="font-size:13px;" for="use_num">账号</label><br>
                    <div class="num">
                    <i><img src="../../../static/images/用户名.png" alt=""></i>
                    <input type="text" name="use_num" placeholder="请填写账号信息" v-model="displayName" id="use_num" >
                    <span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
                    </div>

                    
                    <label style="font-size:13px;" for="use_num">密码</label><br>
                    <div class="num">
                    <i><img src="../../../static/images/密码.png" alt=""></i>
                    <input type="text" name="use_num" placeholder="请填写密码"  v-model="password" id="use_num">
                    </div>

                    
                    <label style="font-size:13px;" for="use_num">显示名称</label><br>
                    <div class="num">
                    <i><img src="../../../static/images/名称.png" alt=""></i>
                    <input type="text" name="use_num" placeholder="请填写显示名称"  id="use_num">
                    </div>

                    
                    <label style="font-size:13px;" for="use_num">编号</label><br>
                    <div class="num">
                    <i><img src="../../../static/images/编号.png" alt=""></i>
                    <input type="text" name="use_num" placeholder="001" v-model="account" id="use_num">
                    </div> -->
        
       <div class="layui-form-item">
            <label style="font-size:13px;" class="layui-form-label">账户</label>
            <div class="layui-block num">
                 <i><img src="../../../static/images/用户名.png" alt=""></i>
                <input v-model="displayName" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" name="name" class="layui-input" placeholder="请填写账号信息">
                <span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
                <!-- <mt-popup
                v-model="popupVisible"
                popup-transition="popup-fade" position="right" v-show="errors.has('name')" class="text-style" v-cloak >
                 {{ errors.first('name') }} 
                </mt-popup> -->
            </div>
            
            <label style="font-size:13px;" class="layui-form-label">密码</label>
            <div class="layui-block num">
                 <i><img src="../../../static/images/密码.png" alt=""></i>
                <input v-model="password" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('password') }" type="text" name="password" class="layui-input" placeholder="请填写密码">
                <span v-show="errors.has('password')" class="text-style" v-cloak> {{ errors.first('password') }} </span>
            </div>
            
            
            <label style="font-size:13px;" class="layui-form-label">显示名称</label>
            <div class="layui-block num">
                 <i><img src="../../../static/images/名称.png" alt=""></i>
                <input v-model="coetent" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('coetent') }" type="text" name="coetent" class="layui-input" placeholder="请填写显示名称">
                <span v-show="errors.has('coetent')" class="text-style" v-cloak> {{ errors.first('coetent') }} </span>
            </div>

            
            <label style="font-size:13px;" class="layui-form-label">编号</label>
            <div class="layui-block num">
                 <i><img src="../../../static/images/编号.png" alt=""></i>
                <input v-model="account" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('account') }" type="text" name="account" class="layui-input" placeholder="001">
                <span v-show="errors.has('account')" class="text-style" v-cloak> {{ errors.first('account') }} </span>
            </div>
        </div>


      </div>  
            <div class="submit_mes">
                <input type="button" @click="login" name="submitames" id="submitames" class="sub" value="提交">
            </div>
         </form>
  </div>
</template>

<script>
export default {
    data(){
      return{
          password:'',
          displayName:'',
          coetent:'',
          account:'',
          name:'',
      }
    },
    created(){
        this.login()
    },
    mounted(){
      
        
    },
    methods:{
          backto(){
            this.$router.go(-1)
        },
          login(){
            this.$ajax({
                        method: 'post',
                        url: '/api/account/edit',
                        data: {
                            password:this.password,
                            displayName:this.displayName,
                            account:this.account,
                        },
                    })
                    .then(response=>{
                        console.log(response);
                 
                    })
                    .catch(error=> {
                        console.log(error)
            });
     },

    }
}
</script>

<style scoped>
.mine{
    height: 100%;
    background: #ffffff;
}
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
.tab_header{
    margin-top: 40px;
    padding:5px 25px;
}
.usernum{
    position: relative;
}
input{
    width: 100%;
    height: 40px;
    padding-left: 50px;   
    margin-bottom: 10px;
    
}
::-webkit-input-placeholder {
     color: #DDDDDD;
 }
:-moz-placeholder {/* Firefox 18- */
     color:#DDDDDD;
}
::-moz-placeholder{/* Firefox 19+ */
     color: #DDDDDD;
}
:-ms-input-placeholder {
     color: #DDDDDD;
}
.num{ 
    margin:8px 0px 5px 0px;
    position: relative; 
}
i{
    height: 38px;
    width: 40px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #F1F1F1;
    border-left: 1px solid #D1D1D1;
    border-top: 1px solid #D1D1D1;
    border-bottom: 1px solid #D1D1D1;
    
}
i>img{
    width: 25px;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.submit_mes{
    padding: 45px;
    text-align: center;
}
.sub{
    width: 70%;
    height: 34px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 0;
    color: white;
    font-size: 14px;
    background-color: #FF4433;
    border: none;
}
.layui-form-label{
    position: relative;
}
.text-style{
    font-size: 12px;
    color: #FF4433;
    position: absolute;
    right: 0;
    bottom: -8px;
    z-index: 999;
}
</style>
