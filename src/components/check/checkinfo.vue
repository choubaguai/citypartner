<template>
  <div class="city_container">
      <div class="h_details_header">
         <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a> 
          {{allList.step == 3 ? "已审核":allList.step =="4"?"未通过":"待审核"}} 
      </div>
      <div class="h_checklist_details_content">
          <table>
              <tr>
                <td class="table_left">
                    社区
                </td>
                <td  class="table_right">{{allList.county_name}}</td>
            </tr>
              <tr>
                <td class="table_left">
                    名称
                </td>
                <td  class="table_right">{{allList.name}}</td>
            </tr>
              <tr>
                <td class="table_left">
                    电话
                </td>
                <td  class="table_right">{{allList.mobi}}</td>
            </tr>
            
            <tr>
                <td  valign="top" class="table_left">
                   详细地址
                </td>
                <td  class="table_right">{{allList.address}}</td>
            </tr>
            <tr>
                <td  valign="top" class="table_left">申请时间</td>
                <td  class="table_right">{{allList.addtime}}</td>
            </tr>
            <tr>
                <td  valign="top" class="table_left">当前步骤</td>
                <td  class="table_right">{{allList.step == 3 ? "已审核":allList.step =="4"?"未通过":"待审核"}} </td>
            </tr>
            <tr>
                <td  valign="top" class="table_left">门头照片</td>
                <td  class="table_right">
                    <img :src="allList.doorheadurl" alt="">
                </td>
            </tr>
            <tr>
                <td  valign="top" class="table_left">手持身份证或营业执照</td>
                <td  valign="top"  class="table_right">
                    <img :src="allList.headimgurl" alt="">
                </td>
            </tr>
             <tr>
                <td  valign="top" class="table_left">类型</td>
                <td  valign="top"  class="table_right">快递服务网点</td>
            </tr>
             <tr>
                <td  valign="top" class="table_left">合伙人编码</td>
                <td  valign="top"  class="table_right">{{allList.id}}</td>
            </tr>
             <tr>
                <td  valign="top" class="table_left">区域网点检测</td>
                <td  valign="top" style="color:#E83828;" class="table_right">500米内有其他网站</td>
            </tr>
          </table>
          <div class="mt_button"  v-if="allList.step=='2'">
              <mt-button class="btn reject" @click="reject()" type="danger">拒绝</mt-button>
              <mt-button class="btn" @click="checkin()"  type="danger">审核</mt-button>  
          </div>
     
              <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" ref="disnone" >
                <mt-checklist  title="请选择拒绝理由" v-model="value" :options="options" @change="checkon"></mt-checklist>
                <div class="textarea">
                    <div class="text_s_b">
                    <textarea name="" id="" cols="30" rows="5" maxlength="200" @input="descInpuct" v-model="desc"></textarea>
                    <span class="text_num">{{remnant}}/200</span>
                    </div>
                </div>
                <div class="btn_check">
                    <mt-button type="danger" @click="clickBt">取消</mt-button>
                    <mt-button type="danger" @click="checktwo">拒绝</mt-button>
                </div>
            </mt-popup>
   
           
          
      </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            popupVisible:false,
            value:[],
            options:[],
            remnant:0,
            desc:'',
            p1:'',
            allList:{},
            refusal:'',
            allcount:''
        }
    },
    ready(){
        
    },
    mounted(){
        console.log(this.$route.params)
        this.allList = this.$route.params;
    },
    methods:{
        reject(){
           this.popupVisible=true
            this.options = [
                {
                    label: '资料不全',
                    value: 'valueA'
                },
                {
                    label: '信息不全',
                    value: 'valueB'
                },
                {
                    label: '资质不够',
                    value: 'valueC'
                },
                {
                    label: '其他',
                    value: 'valueD',
                    disabled: false
                },
            ];
            console.log('111')
        },
        textdis(){
        },
        descInpuct(){
            var txtVal = this.desc.length;
            this.remnant=0+txtVal;
        },
        backto(){
            this.$router.go(-1)
        },
        clickBt(){
        },
        checktwo(){
              
              this.$ajax({
                        method: 'post',
                        url: '/apiaudit/doAudit',
                        data: {
                            shop_id:this.allList.id,
                            status:'0', 
                            info:this.refusal+this.desc
                        },
                    })
                    .then(response=>{
                        console.log(JSON.parse(response.data.auditList).re_result.list);
                         Toast({
                            message: 'operation success',
                            iconClass: 'icon icon-success'
                         });
                    })
                    .catch(error=> {
                        console.log(error)
                    });
                    Toast({
                    message: '已拒绝，审核未通过',
                    position: 'top',
                    duration: 5000
                    });
        },
        checkin(){
            alert('000')
              this.$ajax({
                        method: 'post',
                        url: '/apiaudit/doAudit',
                        data: {
                            shop_id:this.allList.id,
                            status:1,
                            info:''
                        },
                    })
                    .then(response=>{
                        console.log(JSON.parse(response.data.auditList).re_result.list);
                         Toast({
                            message: 'operation success',
                            iconClass: 'icon icon-success'
                         });
                    })
                    .catch(error=> {
                        console.log(error)
            });
            Toast({
                message: '审核成功',
                iconClass: 'icon iconfont icon-chenggong-copy'
            });
        },
        checkon(){  
            let arr=''
            this.descInpuct(); 
           
            this.value.forEach(ele=>{ 
               this.options.forEach(element=>{
                if(ele==element.value){
                    arr += element.label+','
                }
                }); 
            })  
             console.log('==='+arr)
            this.refusal=arr
        } 
    }
}
</script>

<style scoped>

html,body,.city_container{
    background-color: #fff;
    height:100%;
}
.mint-checklist>.mint-checklist-title{
    text-align: center;
}
.h_details_header{
    text-align: center;
    height: 60px;
    padding-top: 10px;
    line-height: 50px;
    color:#444444;
    font-size: 18px;
    border-bottom: 1px solid #E6E6E6;
}
.go_back{
   position: absolute;
   color: #878787;
   font-size: 22px;
   width: 40px;
   left: 5px;
}
.h_checklist_details_content{
    margin-top: 10px;
}
tr{
    font-size: 14px;
    color: #aaa;
}
td{
    padding:8px 6px;
}
td>img{
    width: 90px;
    height: 60px;
    margin-right: 10px;
}
.table_left{
    width: 110px;
    padding-left: 20px;
}
.table_right{
       padding-right: 6px;
}
.mt_button{
    text-align: center;
}
.btn{
    margin:10px 15px;
}
.mint-button--normal, .mint-button--small{
    padding: 0px 50px;
}
.mint-popup-bottom{
    width: 100%;
}
.textarea{
    margin:10px;
}

textarea{
    width: 100%;
    background-color: #F1F1F1;
    border: none;
    outline: none;
    resize: none;
   border-radius: 3px;
}
.text_s_b{
    padding:0 23px;
    position: relative;
}
.text_num{
    position: absolute;
    right: 25px;
    bottom: 9px;
    color: #B6B6B6;
}
.mint-checklist-title{
}
.btn_check{
    text-align: center;
}
.btn_check >button{
   margin:20px 20px 40px 20px;
}
</style>
