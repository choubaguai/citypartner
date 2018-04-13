<template>
  <div class="city_container">
          <div class="shop_content">
              <ul>
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
                            <td  style="width:75%"><div style="color:#AAAAAA; font-size:13px">快递服务网点</div></td>
                            <td style="width:10%;padding-right:10px;">
                                 <div style="color:#AAAAAA; font-size:13px">{{item.addtime}}</div>
                            </td>
                        </tr>
            
                    </table>
                      <div>
                    </div>
                  <!-- <div class="shop_img"></div> -->
                 </router-link>
                </li>
               
              </ul>
          </div>
          
  </div>
</template>

<script>
export default {
 data(){
     return{
         list:{},
     }
 },
  created(){
      this.login()
  },
  methods:{
      login(){
            this.$ajax({
                        method: 'post',
                        url: '/api/audit/getAuditList',
                        data: {
                            step:4,
                            pageno:1
                        },
                    })
                    .then(response=>{
                        console.log(JSON.parse(response.data.auditList).re_result.list);
                        this.list=JSON.parse(response.data.auditList).re_result.list;
                    })
                    .catch(error=> {
                        console.log(error)
            });
     },
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