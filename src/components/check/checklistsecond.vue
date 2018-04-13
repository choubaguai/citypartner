<template>
  <div class="city_container">
          <div class="shop_content">
              <ul  v-infinite-scroll="loadMore"
                   infinite-scroll-disabled="loading"
                   infinite-scroll-distance="10"
              >
                <li v-for="(item,index) in list" :key="index" >
                 <router-link :to="{name:'checkinfo',params:{address:item.address,addtime:item.addtime,areapoint:item.areapoint,
                 county_name:item.county_name,doorheadurl:item.doorheadurl,headimgurl:item.headimgurl,id:item.id,invite_code:item.invite_code,mobi:item.mobi,name:item.name,step:item.step,}}" >
                      <table>
                        <tr>
                            <td style="width:8%">
                                <img class="icon_dz" src="../../../static/images/icon_dz.png" alt="">
                            </td>
                            <td>
                                <div style="color:#737373">{{item.name}}</div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td  style="width:65%"><div style="color:#AAAAAA; font-size:13px">快递服务网点</div></td>
                            <td style="width:30%;padding-right:10px;">
                                 <div style="color:#AAAAAA; font-size:13px">{{ new Date(+item.addtime)| datemat('YYYY-MM-DD')}}</div>
                            </td>
                        </tr>
            
                    </table>
                      <div>
                    </div>
                  <!-- <div class="shop_img"></div> -->
                 </router-link>
                </li>
                <li v-show='moreData' style="text-align:center;padding:5px;">无更多数据</li>  
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
          moreData: false,
          pageno:0,
          list:[],
          allLoaded: '',
          newlist: {},
          loading: false,
          moreData: false,
     }
 },
  created(){
      this.login(1)
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
                        url: '/api/audit/getAuditList',
                        data: {
                            step:3,
                            pageno:this.pageno
                        },
                    })
                    .then(response=>{
                          if(this.list.length === 0){
                             this.list=JSON.parse(response.data.auditList).re_result.list;
                             console.log(response.data.auditList+'---------------1');
                          }
                          this.list.push(...JSON.parse(response.data.express).re_result.list);
                        
                       
                    })
                    .catch(error=> {
                        console.log(error)
            });
     },
      addcount(){
        this.pageno++;
        console.log(1);
            if (this.list.length == 0){
                console.log('2=============='+this.pageno);
                this.login(this.pageno);
                return true
                
            }else {
                console.log('3========'+this.pageno);
                this.moreData = true;
                this.loading = true;
                return false
            }
    }
  }
}
</script>

<style scoped>
.shop_content{
  margin: 10px;
  font-size: 16px;
}
.shop_content ul{
    margin-bottom: 80px;
}
.shop_content ul li{
  padding-top: 10px; 
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
}
.icon_dz_box{
  padding-left: 8px;
}
.icon_dz{
 height: 20px;
  vertical-align: middle;
  padding-left: 8px;
}

.shop_img{
  margin-top: 8px;
  height: 180px;
  width: 100%;
  background-image: url("../../../static/images/Courier.png");
  background-clip: border-box;
  background-size: cover;
  border-radius:0px 0px 8px 8px;
}
</style>