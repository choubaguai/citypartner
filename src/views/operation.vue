<template>
  <div  class="operation">
         <div class="runlist">
         		<p>{{displayName}}</p>
				 <p>{{promotionCode}}</p>
         		<div class="runlist-body">
							<router-link :to="{name:'courier'}"><div class="advertising"><span>快递分析</span></div></router-link>
                <div class="courier"><span>广告配置</span></div>
                <div class="money"><span>佣金配置</span></div>
         		</div>
         </div>
  </div>
</template>

<script>

export default {
	data(){
		return{
			title:'',
			promotionCode:''
		}
	},
	created(){
		this.title = localStorage.getItem('displayName')
        this.promotionCode = localStorage.getItem('promotionCode')
	}
}
</script>

<style scoped>
	.runlist{
		width: 100%;
		background: #f2f1ed;
		font-size: 0.28rem;
		line-height: 0.74rem;
		background: #fff;
		text-align: center;
	}
	.runlist-body{
		background: #f2f1ed;
		padding-top: 0.34rem;
		padding-bottom: 1.3rem;
	}
	.runlist-body span{
		display: block;
		margin: 0 auto;
		color: #fff;
		font-size: 0.31rem;
		line-height: 0.31rem;
	}
	.advertising{
		width: 5.94rem;
		height: 3.04rem;
		background:url('../../static/images/Courier.png');
		background-position: center center;
		background-size: 100%;
		background-repeat: no-repeat;
		margin: 0 auto;
		display: flex;
  	align-items: center; 
	
	}
	.courier{
		width: 5.94rem;
		height: 3.04rem;
		background:url('../../static/images/advertising.png');
		background-position: center center;
		background-size: 100%;
		background-repeat: no-repeat;
		margin: 0 auto;
		display: flex;
  	align-items: center; 
  	margin-top: 0.34rem;
	}
	.money{
				width: 5.94rem;
		height: 3.04rem;
		background:url('../../static/images/Money.png');
		background-position: center center;
		background-size: 100%;
		background-repeat: no-repeat;
		margin: 0 auto;
		display: flex;
  	align-items: center; 
  	margin-top: 0.34rem;
	}
</style>