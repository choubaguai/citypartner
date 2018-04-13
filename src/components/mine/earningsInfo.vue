<template>
  <div class="mine">
      <div class="h_details_header">
         <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   收益统计
      </div>
   <div class="info_bbox">
          <div class="info_box">
            <div class="earningslist">
                <ul>
                    <li>
                        <div class="listbox">
                            <div>
                                <img class="icon_dz" src="../../../static/images/icon_dz.png" alt="">
                            </div>
                            <div>
                                {{title}}
                            </div>
                            <div>
                               {{promotionCode}}
                            </div>
                        </div>
                      
                    </li>
                    <li v-for="(item,index) in list" :key="index">
                        <div class="listbox">
                            <div class="round"><i></i></div>
                            <div>
                                收益￥{{item.income}}
                             
                            </div>
                            <div>
                                <!-- 上涨 -->
                            </div>
                        </div>
                          <div class="listbox">
                              <div></div>
                            <div style="color:#9C9C9C;font-size:12px;padding-top:5px;">
                                 {{item.monthGroup}}
                            </div>
                        </div>
                    </li>   
                    
                
                </ul>
            </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:{},
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
            this.$router.go(-1);
        },
        login(){
            this.$ajax({
                        method: 'post',
                        url: '/api/income/statis',
                        data: {
                            pageno:1
                        },
                    })
                    .then(response=>{
                        console.log(response.data.result.statis);
                        this.list= response.data.result.statis
                    })
                    .catch(error=> {
                        console.log(error)
            });
     },
    }
}
</script>

<style scoped>
.h_details_header{
    text-align: center;
    height: 60px;
    padding-top: 10px;
    line-height: 50px;
    color:#444444;
    font-size: 18px;
}
.go_back{
   position: absolute;
   color: #878787;
   font-size: 22px;
   width: 40px;
   left: 5px;
}
.info_box{
    border-radius: 10px;
    background-color: #fff;
}
.icon_dz{
 height: 18px;
 vertical-align: middle;
}
.info_bbox{
    padding:0px 15px;

}
.listbox{
    display: flex;
 
}
.listbox div:nth-of-type(1){
   width: 8%;
   text-align: center;
}

.listbox div:nth-of-type(2){
   width: 78%;
}

.listbox div:nth-of-type(3){
   width: 15%;
    
}
.earningslist{
    padding: 5px;
}
.earningslist ul >li{
  height: 50px;
}
.earningslist ul >li:nth-of-type(1){
    border-bottom: 1px solid #EEEEEE;
    line-height: 50px;
}
.earningslist ul >li:nth-of-type(2){
    margin-top: 10px;
}
.round{
    position: relative;
}
.round>i{
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.round>i::after{
    content:'';
    height: 50px;
    width: 1px;
    background-color: red;
    position: absolute;
    left: 50%;
    top: 2px;
    transform: translateX(-50%)
}
.earningslist ul >li:nth-of-type(2) .round>i{
     height: 14px;
    width: 14px;

}
.earningslist ul >li:last-of-type .round>i::after{
    display: none;
}
</style>
