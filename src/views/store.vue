<template>
  <div class="store">
    <div class="withdrawTop">
        <div class="withdrawDiv">
             <p class="city">{{title}}</p>
             <p class="city">({{promotionCode}})</p>
             
             <div class="left">
                <p>网站总数</p>
                <p>{{total.total_num}}</p>
                <p class="amount_l_bottom">发展网点总数</p>
            </div>
            <div class="right">
                <p>告警网点数</p>
                <p>{{total.warn_num}}</p>
                <p class="amount_l_bottom">每日快递量≤10</p> 
            </div>
           </div>
    </div>
    <div>
                <ul  v-infinite-scroll="loadMore"
                      infinite-scroll-disabled="loading"
                      infinite-scroll-distance="20">
                    <li v-for="(item,index) in list" :key="index">
                            <router-link :to="{name:'storelist',params:{spu_id:item.spu_id}}">
                            <img src="../../static/images/icon_icon_wd.png">
                            <div class="web_message">
                                <div class="web_message_header cleanfix">
                                    <p class="f_left">{{item.name}}</p>
                                    <p class="f_right" ref="statuCol">{{item.status == "1"?"正常":item.status =="0"?"关闭":"异常"}}</p>
                                </div>
                                <div class="web_message_footer">
                                    <p>{{item.express_in_num}}件</p>
                                </div>
                            </div>
                            </router-link>
                    </li>
                    <li v-show='moreData' style="text-align:center">无更多数据</li>  
                    <!-- <li>
                       <div @click="addcount" style="height:40px;text-align:center;lineHeight:40px;color:#ccc;font-size:20px;">点击加载更多</div>
                    </li> -->
                </ul>
      </div>
  </div>
</template>

<script>
  import {
        InfiniteScroll
    } from 'mint-ui';



export default {
    data(){
        return{
            title:'',
            promotionCode:'',
            pageno: 1,
            total: {},
            allLoaded: '',
            pagecheck: 1,
            count: 10,
            newlist: {},
            loading: false,
            moreData: false,
            list: [],
        }
    },
    created(){
         this.title = localStorage.getItem('displayName')
        this.promotionCode = localStorage.getItem('promotionCode')
         this.webnum();
        this.login(1)
    },
    mounted(){
        this.getcol()
    },
 methods:{
      loadMore(){
                this.loading = true;
                setTimeout(() => {
                    if(!this.addcount()){
                        return 
                    }
                    this.loading = false;
                }, 500);
            },
     login(pageno){
            this.$ajax({
                        method: 'post',
                        url: '/api/express/getExpress',
                        data: {
                            pageno :this.pageno,
                        },
                    })
                    .then(response=>{
                        this.count = JSON.parse(response.data.express).re_result.total;
            
                        if(this.list.length===0){
                            this.list=JSON.parse(response.data.express).re_result.list;
                            console.log(this.list)
                        }
                        this.list.push(...JSON.parse(response.data.express).re_result.list);
                        console.log(this.list)
                        
                    })
                    .catch(error=>{
                        console.log(error+'-----------');
                    }); 
     },
     webnum(){
          this.$ajax({
                        method: 'post',
                        url: '/api/express/getServicePoint',
                        data: {
                        },
                    })
                    .then(response=>{
                       console.log(JSON.parse(response.data.servicePoint).re_result);
                       this.total=JSON.parse(response.data.servicePoint).re_result;
                    })
                    .catch(error=> {
                        console.log(error)
            });
     },
    addcount(){
        this.pageno++;
        console.log(1);
        if (Math.ceil(this.count / 10) >= this.pageno){
            this.login(this.pageno);
            return true
        }else {
            this.moreData = true;
            this.loading = true;
            return false
        }
    },
    getcol(){
        console.log(this.$refs.statuCol+"==============")
    }
 }
}
</script>
<style scoped>
/* 头部 */
.withdrawTop{
    background-color: #fff;
  }
.withdrawDiv{
  padding-top: 20px;
}
.withdrawDiv > p{
  text-align: center;
  font-size: 20px;
} 
.left,.right{
    display: inline-block;
    width:48%;
    height: 100px;
    position: relative;
  }
.left::after{
    content: "";
    height: 60px;
    width: 4px;
    border-right: 1px solid #ccc;
    position: absolute;
    top:25px;
    right: -5px;
    color: #EDEDED;
}
.left > p:nth-of-type(1),.right > p:nth-of-type(1){
   text-align: center;
   padding-top:20px; 
 }
.left > p:nth-of-type(2),.right > p:nth-of-type(2){
  text-align: center;
  padding-top:8px; 
 }

#WitSubmit{
    display: inline-block;
    width: 140px;
    height: 40px;
    background-color:#fff;
    border-radius: 20px;
}
.amount_l_bottom{
    font-size:13px;
    color:#D6D6D6;
    text-align:center;
    padding-top:8px;
}
/* 扣扣 */
/* .username{
    height: 20px;
    line-height: 20px;
    width: 100%;
    text-align: center;
    padding:30px 0px;
    background-color: #fff;
}
.amount{
    padding-bottom: 20px;
    background-color: #fff;
}
.amount_left,.amount_right{
    text-align: center;
    width: 49%;
    float: left;
    background-color: #fff;
}
.amount_left>p,.amount_right>p{
    margin-bottom: 0px;
    
}
.amount_left>p:nth-of-type(2),.amount_right>p:nth-of-type(2){
    margin: 5px 0;
}
.amount_left{
    border-right: 1px solid #E7E7E7;
} */
ul{
    width: 100%;
    margin-bottom: 88px;
}
li{
  width: 95%;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 10px;
  padding: 5px 8px;
  position: relative;
}

img{
    width: 38px;
    height: 38px;
    top: 50%;
    transform: translateY(-50%);
    
   position: absolute;
}
.web_message{
     padding-left: 50px;
}
.web_message_header,.web_message_footer{
  height: 25px;
  line-height: 25px;
}
p{
    margin-bottom: 0px;
}
</style>
