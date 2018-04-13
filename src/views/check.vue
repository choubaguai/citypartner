<template lang="html">
  <div class="check">
    <mt-navbar  v-model="selected" :fixed="true">
      <mt-tab-item id="1">待审核</mt-tab-item>
      <mt-tab-item id="2">已审核</mt-tab-item>
      <mt-tab-item id="3">未通过</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" >
        <checklist></checklist>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" v-show="selected==1 || selected ==3">
        <checklistsecond></checklistsecond>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" v-show="selected==1 || selected ==2">
        <checklistthree></checklistthree>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import checklist from '../components/check/checklist'
import checklistsecond from '../components/check/checklistsecond'
import checklistthree from '../components/check/checklistthree'


export default {
  components:{
      checklist,
      checklistsecond,
      checklistthree
  },
  data(){
    return{
      selected: "1",
   
    }
  },
 created(){
 },
  methods:{
    isclick(){
      alert(1)
    //  if(this.$refs.checktwo.$el.innerText=="已审核"){
    //   console.log('1')
    //  }
    //  console.log(this.$refs.checktwo.$el.innerText)
    //  console.log(this.$refs.checkthree.$el.innerText)
     
    }
  
  },
  watch:{
      selected:(val,oldval)=>{
          console.log('切换后'+val) //切换后
          console.log('切换前'+oldval) //切换前
      }
    
  }
}
</script>

<style lang="css">
.check{
  padding-top: 46px;
}
.mint-tab-container-wrap{
  margin-top: 15px;
}
.mint-tab-item-label{
    font-size: 16px;
}
.mint-navbar .mint-tab-item.is-selected{
  color:#E63827;
  border-bottom: 2px solid #E63827;
}
</style>
