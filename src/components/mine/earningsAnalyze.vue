<template>
  <div class="mine">
       <div class="h_details_header">
         <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>收益分析
      </div>
      <div class="info_bbox">
           <div class="info_box">
                <div class="earningslist">
                    <ul>
                        <li>
                            <div class="listbox">
                                <div>
                                    <img class="icon_dz" src="../../../static/images/common_jcxx.png" alt="">
                                </div>
                                <div>
                                    收益信息
                                </div>
                                <div></div>
                            </div>
                        
                        </li>
                        <li>
                            <div class="listbox">
                                <div class="round"><i></i></div>
                                <div>
                                    选择时间
                                </div>
                                <div class="data-class" style="white-space:nowrap; ">
                                    <!-- 2017.08.02-2017.09.02 <span style="font-family:simsun;">></span> -->
                                    <input class="date-style" type="text" @click="openByDialog" v-model="calendar4.display" :value="calendar4.display" readonly style="border:none">
<span style="font-family: simsun;position: absolute;right: 22px;">></span>
                                </div>
                            </div>
                        </li>   
                        <li>
                            <div class="listbox">
                                <div class="round"><i></i></div>
                                <div>
                                    收益总量
                                </div>
                                <div>
                                    {{count}}
                                </div>
                            </div>
                        </li>   
                    </ul>
                </div>
                <!-- echarts -->
                <div class="charts">
                    <div id="myChart" :style="{width: '320px', height: '320px'}">
                </div>
            </div>
           </div>

    <transition name="fade">
        <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
            <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
        </div>
        </transition>

        <transition name="fade">
        <div class="calendar-dialog" v-if="calendar4.show">
            <div class="calendar-dialog-mask" @click="closeByDialog"></div>
            
            <div class="calendar-dialog-body">
                <calendar :range="calendar4.range" :zero="calendar4.zero" :lunar="calendar4.lunar" :value="calendar4.value"  @select="calendar4.select"></calendar>
            </div>
            
        </div>
    </transition>




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
      components: {
        calendar
    },
    data(){
        return{
            data:[],
                count:0,
                startDate:'',
            endDate:'',
            calendar1:{
                    value:[2018,2,16], //默认日期
                    // lunar:true, //显示农历
                    weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    events:{
                        '2018-2-14':'$408','2018-2-15':'$460','2018-2-16':'$500',
                    },
                    select(value){
                        console.log(value.toString());
                    },
                    timestamp:Date.now()
            },
            calendar2:{
                range:true,
                value:[[2017,12,1],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                begin:[2017,2,16], //可选开始日期
                end:[2019,2,16], //可选结束日期
                select(begin,end){
                    // console.log(begin.toString(),end.toString());
                }
            },
            calendar3:{
                display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            },
            calendar4:{
                display:"2017-01-01 ~ 2017-01-31",
                show:false,
                range:true,
                zero:true,
                value:[[2017,1,1],[2017,1,31]], //默认日期
                lunar:true, //显示农历
                select:(begin,end)=>{
                    console.log(begin,end)
                    this.calendar4.show=false;
                    this.calendar4.value=[begin,end];
                    this.calendar4.display=begin.join("/")+" ~ "+end.join("/");
                }
            },
        }
    },
    created(){

    },
mounted(){
    
        this.login()
        this.datasta()
    },
    methods:{
        drawLine(data,count) {
            console.log(data,count)
            var arr =[];
            for(var  i = 0;i<data.length;i++){
                arr[i] ={}
                arr[i].value = data[i].income
                arr[i].name = data[i].type;
                if(data[i].type==1){
                    arr[i].name='新用户注册'
                    // +(Math.round(arr[i].value / count * 10000) / 100.00 + "%");
                    
                }
                if(data[i].type ==2){
                    arr[i].name='自营产品交易收益'
                }
                if(data[i].type == 3){
                    arr[i].name='周边商户交易收益'
                }
            }
            console.log(data,count)
            let chartBox = document.getElementsByClassName('charts')[0]
            let myChart = document.getElementById('myChart')
            // 用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
            function resizeCharts () {
                myChart.style.width = chartBox.style.width + 'px'
                myChart.style.height = chartBox.style.height + 'px'
             }
            // 设置容器高宽
            resizeCharts()
                
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
                        data:arr
                        // [
                        //     {value:335, name:'直接访问'},
                        //     {value:310, name:'邮件营销'},
                        //     {value:234, name:'联盟广告'},
                        //     {value:135, name:'视频广告'},
                        // ]
                        ,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            )
        },
        backto(){
            this.$router.go(-1)
        },
         login(){
             let count = 0
            this.$ajax({
                        method: 'post',
                        url: '/api/income/analysis',
                        data: {
                           startDate:this.startDate,
                           endDate:this.endDate
                        },
                    })
                    .then(response=>{
                       
                        this.data=response.data.analysis
                        response.data.analysis.forEach((element)=>{
                          count += element.income
                        })
                        console.log(response.data.analysis);
                        console.log(count)
                        this.count=count
                        setTimeout(()=>{
                            this.drawLine(response.data.analysis,this.count)
                        })

                    })
                    .catch(error=> {
                        console.log(error)
            });
        },
        openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
            this.login()
        },
        closeByDialog(){
            this.calendar4.show=false;
        },
        changeEvents(){
            this.calendar1.events={
                '2018-2-14':'$'+(Math.random()*1000>>0),
                '2018-2-15':'$'+(Math.random()*1000>>0),
                '2018-2-16':'$'+(Math.random()*1000>>0),
            }
        },
        datasta(){
            console.log(this.calendar4.display)
             console.log(this.calendar4.display)
             let startDate =this.calendar4.display.substr(0,10)
             let endDate = this.calendar4.display.substr(13,10)
             this.startDate = startDate
             this.startDate = endDate
            console.log(startDate)
            console.log(endDate)
            
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
   width: 32%;
}

.listbox div:nth-of-type(3){
   width: 50%;
    
}
.earningslist{
    padding: 5px;
}
.earningslist ul >li{
  height: 30px;
  line-height: 30px;
}
.charts{
    width: 320px;
    height: 220px;
    overflow: hidden;
    text-overflow:ellipsis; 
}
.charts[data-v-48d4ba2e]{
    margin: 0 auto;
}
.charts[data-v-1c67b23f]{
    margin: auto;
}
/* === */

/*transition*/
.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-in-out;
}
.fade-enter,.fade-leave-active{
    opacity: 0;
    transform: translateY(-10px);

}

/*下拉框*/
.calendar-dropdown{
    background: #fff;
    position: absolute;
    left:0;
    top:0;
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
}
.calendar-dropdown:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}
.calendar-dropdown:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
}

.calendar-dialog-mask{
    background:rgba(255,255,255,.5);
    width:100%;
    height:100%;
}

.calendar-dialog-body{
    background: #fff;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
    
}	
</style>
