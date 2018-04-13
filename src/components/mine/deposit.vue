<template>
  <div class="mine">
        <div class="h_details_header">
              <a href="javascript:;" @click="backto" class="go_back icon iconfont icon-fanhui"></a>   提现记录
        </div>
        <div class="deposit_list">
            <ul>
              <li>
                <div class="d_l_h clearfix">
                    <div class="d_l_h_l f_left">提现</div>
                    <div class="d_l_h_l f_right">-5.00</div>
                </div>
                <div class="d_l_b">
                  2017-08-12 17:20
                </div>
              </li>
              <li>
                <div class="d_l_h clearfix">
                    <div class="d_l_h_l f_left">提现</div>
                    <div class="d_l_h_l f_right">-5.00</div>
                </div>
                <div class="d_l_b">
                  2017-08-12 17:20
                </div>
              </li>
              <li>
                <div class="d_l_h clearfix">
                    <div class="d_l_h_l f_left">提现</div>
                    <div class="d_l_h_l f_right">-5.00</div>
                </div>
                <div class="d_l_b">
                  2017-08-12 17:20
                </div>
              </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  methods:{
    backto(){
        this.$router.go(-1)
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
  line-height: 28px;
  padding:5px 10px;
  border-bottom: 1px solid #E7E7E7;
}
.d_l_b{
  font-size: 14px;
}
</style>
