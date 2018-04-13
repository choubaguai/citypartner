<template lang="html">
  <div class="main">
    <div class="menu">
      <!-- <router-link to="store" class="item-store"  @click.native="overTag()" >
          <span class="icon iconfont" :class="[isActive1 ? 'icon-shouye1' : 'icon-shouye2']"></span>
				  <p>门店</p>
      </router-link>
      <router-link to="check" class="item-check" @click.native="overTag()">
          <span class="icon iconfont " :class="[isActive2 ? 'icon-shenhe1' : 'icon-shenhe2']" ></span>
          <p>审核</p>
      </router-link>
      <router-link to="operation" class="item-operation" @click.native="overTag()">
        <span class="icon iconfont " :class="[isActive3 ? 'icon-yunying3' : 'icon-yunying2']"></span>
          <p>运营</p>
        </router-link>
      <router-link to="mine" class="item-mine" @click.native="overTag()">
        <span class="icon iconfont" :class="[isActive4 ? 'icon-geren1' : 'icon-geren2']"></span>
          <p>我的</p>
      </router-link> -->

     <router-link to="store" class="item-store">
          <span class="icon iconfont icon-shouye2"></span>
				  <p>门店</p>
      </router-link>
      <router-link to="check" class="item-check">
          <span class="icon iconfont icon-shenhe1"></span>
          <p>审核</p>
      </router-link>
      <router-link to="operation" class="item-operation">
        <span class="icon iconfont icon-yunying3"></span>
          <p>运营</p>
        </router-link>
      <router-link to="mine" class="item-mine">
        <span class="icon iconfont icon-geren1"></span>
          <p>我的</p>
      </router-link>


    </div>
    <!-- 二级路由出口-->
    <router-view class="content" name="main"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
    
  },
  methods:{
 
  }
}
</script>

<style lang="css" scoped>
.icon{
  font-size: 30px;

}
p{
  font-size: 14px;
}
.menu{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.menu{
  display: table;
  background-color: #fff;
  border-top: 1px solid #ccc;
  z-index: 999;
}
.main a{
  display: table-cell;
  padding: 8px 0;
  text-align: center;
}
.item-store{
  color: #000;
}
.item-check{
  color: #000;
}
.item-operation{
  color: #000;
}
.item-mine{
  color: #000;
}
.item-store.router-link-active{
  color: red;
}
.item-check.router-link-active{
  color: red;
}
.item-operation.router-link-active{
  color: red;
}
.item-mine.router-link-active{
  color: red;
}
</style>
