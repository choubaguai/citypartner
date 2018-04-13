<template>
  <div class="mine">
        <div class="h_details_header">
              <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   提现账号
        </div>
        <div class="deposit_list">
            <ul>
              <li v-for="(item,index) in list" :key="index" 
                  @touchstart="_toucheStart(index)" 
                  @touchmove="_touchMove(index)"
                  @touched="_touchEnd(index)"
                  :style="txtStyle"
              >
             <div class="d_left">
               <div class="d_l_l"></div>
                <div class="d_l_r">
                    <div class="d_l_r_h">{{item.num}}</div>
                    <div class="d_l_r_h">{{item.name}}</div>
                </div>
             </div>
                <div class="d_right">
                  <div>
                    删除
                  </div>
                </div>
                 
              </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[
          {name:'张三',num:'111111111'},
          {name:'李四',num:'111111111'},
          {name:'王五',num:'111111111'},
        ],
        startX:0,
        moveX:0,
        disX:0,
        txtStyle:'',
        delWidth:200,
        top:'',
        ZIndex:'z-index:-1'
      }
    },
    methods:{
      backto(){
        this.$router.go(-1)
      },
      _toucheStart: function(ev) {
                ev = ev || event;
                if(ev.touches.length == 1){
                    // 手指按下的时候记录按下的位置
                    this.startX = ev.touches[0].clientX;
                    console.log(this.startX)
                }
            },
      _touchMove: function(ev) {
                ev = ev || event;
                if(ev.touches.length == 1) {
                    // 滑动过程中的实时位置
                    this.moveX = ev.touches[0].clientX
                    // 滑动过程中实时计算滑动距离
                    this.disX = this.startX - this.moveX;
                    // console.log('disX==>',this.disX)
                    // 如果是向右滑动或者只是点击，不改变滑动位置
                    if(this.disX < 0 || this.disX == 0) {
                        // console.log('没有移动');
                        this.txtStyle = "transform:translateX(0rem)";
                    }else if (this.disX > 0) {
                        this.txtStyle = "transform:translateX(-" + this.disX/100 + "rem)";
                        if (this.disX >= this.delWidth/100) {
                            this.txtStyle = "transform:translateX(-" + this.delWidth/100 + "rem)";
                            this.zIndex = "z-index:" + 10 + "rem";
                        }
                    }
                }
                },
            _touchEnd: function(ev) {
                  if (event.changedTouches.length == 1) {
                      this.startX = 0;
                      this.zIndex = "z-index:" + -1 + "rem";
                      console.log(event.changedTouches[0].clientX)
                      // 手指移动结束后的水平位置
                      let endX = event.changedTouches[0].clientX;
                      // 触摸开始与结束,手指移动的距离
                      this.disX = this.startX - endX;
                      //如果距离小于删除按钮的1/2，不显示删除按钮
                  }
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

.deposit_list>ul>li{
  background-color: #fff;
  line-height: 20px;
  padding:5px 10px;
  border-bottom: 1px solid #E7E7E7;
  font-size: 14px;
  position: relative;
}
.d_l_l{
  width: 40px;
  height: 40px;
  background: url('../../../static/images/icon_zh.png');
  background-size: cover;
  margin-right: 8px;
  float: left;
}
.d_l_r{
  
}
.d_left{
 

}
.d_right{

}
</style>
