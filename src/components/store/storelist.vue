<template>
  <div class="store">
        <div class="h_details_header">
                <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   {{list.name}}
      </div>
      <div class="h_details_user_information">
        <table>
             <tr>
                <td class="table_left">
                    <h4>基本信息</h4>
                </td>
                <td  class="table_right"></td>
            </tr>
            <tr>
                <div class="table_left">社区</div>
                <td  class="table_right">{{list.name}}</td>
            </tr>
            <tr>
                <td class="table_left">名称</td>
                <td class="table_right">{{list.county_name}}</td>
            </tr>
            <tr>
                <td class="table_left">账号</td>
                <td class="table_right">{{list.username}}</td>
            </tr>
            <tr>
                <td class="table_left">电话</td>
                <td class="table_right">{{list.mobi}}</td>
            </tr>
            <tr>
                <td valign="top" class="table_left">详细地址</td>
                <td class="table_right">{{list.address}}</td>
            </tr>
            <tr>
                <td  class="table_left">加入时间</td>
                <td class="table_right">{{new Date(time) | datemat('YYYY-MM-DD')}}</td>
            </tr>
            <tr>
                <td class="table_left">状态</td>
                <td class="table_right">{{list.status == "1"?"正常":list.status =="0"?"关闭":"异常"}}</td>
            </tr>
        </table>
      </div>
      <div class="h_details_express_information">
          <table>
             <tr>
                <td class="table_left">
                    <h4>快递信息</h4>
                </td>
                <td  class="table_right"></td>
            </tr>
            <tr>
                <div class="table_left">选择时间</div>
                <td  class="table_right">2017.08.02-2017.09.02</td>
            </tr>
            <tr>
                <td class="table_left">快递总量</td>
                <td class="table_right">{{datalist.total}}</td>
            </tr>
            <tr>
                <td class="table_left">日均快递量</td>
                <td class="table_right">{{datalist.avgtotal}}</td>
            </tr>
        </table>
            <div class="charts" ref="charts">
                <div id="myChart1" :style="{width: '320px', height: '320px'}" ref="myChart1"></div>
            </div>
      </div>
      
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/pie')
 // 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
import calendar from '../../subcom/calendar.vue'


export default {
    data(){
        return{
            list:{},
            datalist:{},
            addtime1:'',
            firstdata:[],
            time:0
        }
    },
    created(){
        this.login()
        setTimeout(function(){
             this.time= new Number(this.list.addtime)
        })
       

    },
    methods:{
        drawLine(data){
            console.log(data,'------------')
            var arr = [];
            for(var i =0;i<data.length;i++){
                arr[i] = {};
                arr[i].value = data[i].expressinnum;
                arr[i].name = data[i].company;
            }
            console.log(arr,'----')
            // let chartBox = document.getElementsByClassName('charts')[0];
            let chartBox = this.$refs.charts;
            console.log(this.$refs.charts,'--------------')
            let myChart = this.$refs.myChart1;
            // let myChart = document.getElementById('myChart1')
            // 用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            function resizeCharts () {
                myChart.style.width = chartBox.style.width + 'px'
                myChart.style.height = chartBox.style.height + 'px'
             }
            // 设置容器高宽
            resizeCharts()
            // {value:1548, name:'搜索引擎'}
                
            let mainChart = echarts.init(myChart)
            mainChart.setOption({
               
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '40%',
                        center: ['50%', '35%'],
                        data:arr,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        },
        backto(){
            this.$router.go(-1)
        },
        login(){
            let obj ={}
            this.$ajax({
                        method: 'post',
                        url: '/api/express/expressInfo',
                        data: {
                            spu_id :this.$route.params.spu_id,
                        },
                    })
                    .then(response=>{
                        console.log(JSON.parse(response.data.signInNum).re_result.info)
                        this.list = JSON.parse(response.data.signInNum).re_result.info;
                        this.datalist = JSON.parse(response.data.signInNum).re_result;
                        this.firstdata = JSON.parse(response.data.signInNum).re_result.num;
                        setTimeout(()=>{
                            this.drawLine(this.firstdata)
                        })
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
    line-height: 50px;
    padding-top: 10px;
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
.h_details_user_information,.h_details_express_information{
    margin: 8px;
    border-radius: 8px;
    background: #fff;
    padding:7px 3px;
}
tr{
    font-size: 13px;
    color: #aaa;
}
.table_left{
    width: 110px;
    padding-left: 30px;
    
}
.table_right{
       padding-right: 6px;
}
.charts{
    width: 320px;
    height: 220px;
    overflow: hidden;
}
.charts[data-v-48d4ba2e]{
    margin: 0 auto;
}
/* #myChart{
    height: 220px !important;
} */

</style>
