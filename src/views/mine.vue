<template lang="html">
  <div class="mine">
      <div class="withdrawTop">
        
         <div class="withdrawDiv">
             <p class="city">{{title}}</p>
             <p class="city" style="font-size:20px">{{displayName}}({{promotionCode}})</p>
             
             <div class="left">

                <p>可提取余额</p>
                <p>{{incomeBack}}</p>

            </div>

            <div class="right">
                <p>累计收益</p>
                <p>{{income}}</p>
            </div>
            <div class="subDiv">
                <input id="WitSubmit" type="button" value="提现"/>
            </div>
           </div>

      </div> 

      <div class="earnings">
          <router-link :to="{name:'earningsInfo'}">
              <p>收益统计</p>
          </router-link>
          <router-link :to="{name:'earningsAnalyze'}">
              <p>收益分析</p>
          </router-link>
      </div> 
      <div class="withdrawRecord">
          <!-- <router-link :to="{name:'deposit'}"> -->
              <a href="javascript:;">
                  <p>提现记录   <span style="font-size:12px">(即将上线)</span> </p>
              </a>
          <!-- </router-link> -->
          <!-- <router-link :to="{name:'depositNum'}"> -->
              <a href="javascript:;">
                  <p>提现账号  <span style="font-size:12px">(即将上线)</span>  </p>
              </a>
          <!-- </router-link> -->
         
      </div>  
      <div class="set">
          <router-link :to="{name:'managment'}">
              <p>权限管理</p>
          </router-link>
          <router-link :to="{name:'set'}">
              <p>设置</p>
          </router-link>
      </div> 
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            displayName:'',
            promotionCode:'',
            income:'',
            incomeBack:''
        }
    },
     created(){
        this.title = localStorage.getItem('username')
        this.displayName = localStorage.getItem('displayName')
        this.promotionCode = localStorage.getItem('promotionCode')
        this.incomeBack = localStorage.getItem('incomeBack')
        this.income = localStorage.getItem('income')
        
    },

}
</script>

<style lang="css">  
.mine{
    background-color: #F2F1ED;  
    min-width: 320px;  
  }
  /* 头部 */
.withdrawTop{
    background-color: #fff;
  }
.withdrawDiv{
  padding-top: 20px;
}
.withdrawDiv > p{
  text-align: center;
  font-size: 28px;
} 
.left,.right{
    display: inline-block;
    width:48%;
    height: 100px;
    position: relative;
  }
.left::after{
    content: "";
    height: 50px;
    width: 4px;
    border-right: 1px solid #ccc;
    position: absolute;
    top:20px;
    right: -5px;
    color: #EDEDED;
}
.left > p:nth-of-type(1),.right > p:nth-of-type(1){
   text-align: center;
   padding-top:20px; 
 }
.left > p:nth-of-type(2),.right > p:nth-of-type(2){
  text-align: center;
  padding-top:15px; 
 }
.subDiv{
  text-align: center;
  padding-top:10px;
  padding-bottom:20px;
  
}
#WitSubmit{
    display: inline-block;
    width: 140px;
    height: 40px;
    background-color:#fff;
    border-radius: 20px;
    color: #DDDDDD;
}

/* 收益统计*/
.earnings,.withdrawRecord,.set{
    margin-top:15px;
    background-color: #fff;
}
.earnings  p,.withdrawRecord  p,.set  p{
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  padding-left:50px;
  font-size: 16px;
  position: relative;
}
.earnings > a:nth-of-type(1)>p,.withdrawRecord> a:nth-of-type(1)>p,.set> a:nth-of-type(1)>p{
  border-bottom: 1px solid #eee;
}
.earnings > a:nth-of-type(1)>p::before,.earnings > a:nth-of-type(2)>p::before,
.withdrawRecord > a:nth-of-type(1)>p::before,.withdrawRecord > a:nth-of-type(2)>p::before,
.set > a>p::before{
    content: "";
    height: 35px;
    width: 35px;
    position: absolute;
    top:7px;
    left: 7px;
}
.earnings > a:nth-of-type(1)>p::before{
  background: url('../../static/images/icon_tj.png');
  background-size: cover;
}
.earnings > a:nth-of-type(2)>p::before{
  background: url('../../static/images/icon_fx.png');
  background-size: cover;
}
.withdrawRecord > a:nth-of-type(1)>p::before{
    background: url('../../static/images/icon_txjl.png');
    background-size: cover;
}
.withdrawRecord > a:nth-of-type(2)>p::before{
    background: url('../../static/images/icon_txzh.png');
    background-size: cover;
}

.set >a:nth-of-type(1)>p::before{
    background: url('../../static/images/icon_qx.png');
    background-size: cover;
}
.set >a:nth-of-type(2)>p::before{
    background: url('../../static/images/xxx.png');
    background-size: cover;
}
  
.earnings > a:nth-of-type(1)>p::after,.earnings > a:nth-of-type(2)>p::after,
.withdrawRecord > a:nth-of-type(1)>p::after,.withdrawRecord > a:nth-of-type(2)>p::after,
.set >a> p::after{
    content: ">";
    height: 40px;
    width: 20px;
    position: absolute;
    top:4px;
    right:0px;
    font:bold 18px/40px 'simsun';
}
/* 提现记录 */

</style>