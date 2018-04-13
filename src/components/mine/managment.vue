<template>
  <div class="mine">
       <div class="h_details_header">
              <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   账号管理
        </div>
        <div class="h_d_com">
            <div v-if="usernamelist == ''" class="dismsg">
                <div class="dismsg_box">
                      <img src="../../../static/images/icon_zw.png" alt="">
                      <p class="No_Information">暂无信息</p>
                </div>
              
            </div>
            <ul>
                <li v-for="(item,index) in usernamelist" :key="index">
                    <a href="javascript:;">
                        <div>
                            <span style="font-size:21px">{{item.account}}</span>
                    <!-- <i class="reseaticon icon iconfont icon-fanhui-copy"></i> -->
                  
                        <span class="f_right" style="padding-right:20px">{{title}}({{promotionCode}})</span>
                        </div>
                    </a>
                    
                </li>
            </ul>
        </div>
        <div class="addcount">
            <router-link :to="{name:'accountnum'}">
                <div>
                     +添加账号
                </div>
            </router-link>
           
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            usernamelist:[],
            title:'',
            promotionCode:''
            }
    },
    created(){
        this.login()
        this.title = localStorage.getItem('displayName')
        this.promotionCode = localStorage.getItem('promotionCode')
    },
    methods:{
          backto(){
            this.$router.go(-1)
        },
          login(){
            this.$ajax({
                        method: 'post',
                        url: '/apiaccount/getUserList',
                        data: {
                          
                        },
                    })
                    .then(response=>{
                        console.log(response.data.accounts);
                         this.usernamelist=response.data.accounts
                    })
                    .catch(error=> {
                        console.log(error)
                    });
     },
        // addcountlist(){
        //     alert(1);
        //     this.usernamelist.push({
        //         name:'admin4'
        //     })
        // }
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
.h_d_com {
    margin-top: 10px;
}
.h_d_com ul li{
    background-color: #fff;
    line-height: 50px;
    padding-left: 15px;
    position: relative;
    border-bottom: 1px solid #EFEDED;
}
.reseaticon{
    position: absolute;
    right: 10px;
    top: 0;
}
.addcount{
    position: fixed;
    bottom:5px;
    left: 50%;
    width: 100%;
    padding: 20px;
    transform: translate(-50%);
    text-align: center;
    z-index: 999;
}
.addcount div{
    padding: 10px;
    background-color: red;
    color: #fff;
}
.dismsg img{
    width: 60%;
}
.dismsg_box{
   position: absolute;
    left: 50%;
    top: 45%;   
    transform: translate(-50%,-50%);
    text-align: center;
    color: #CCCCCC;
    font-size: 18px;
}
.No_Information{
    position: relative;
    top: -10px;
}
</style>
