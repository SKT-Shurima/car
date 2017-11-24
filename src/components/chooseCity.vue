<template>
	<div class="wrap">
		<mt-header fixed title="城市选择">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
		<div class="contain">
			<div class="mint-cell border-bottom-1px">
				<p class="mint-indexsection-index">
					快速选择
				</p>
				<div class="mint-cell-wrapper" :class='{"color-primary":chooseBol}'>
					当前定位城市：{{city}}
				</div>
			</div>
			<mt-index-list>
			  <mt-index-section :index="item.name" v-for='(item,index) in cityData' :key='index'>
			    <mt-cell :title="cityItem.name" v-for='cityItem in item.cities' :key='cityItem.cityid' class='border-bottom-1px' @touchstart.native='city=cityItem.name,chooseBol=true;'></mt-cell>
			  </mt-index-section>
			</mt-index-list>
		</div>
		<div class="footer-btn" :class='{"bg-primary":chooseBol}'>
			<div v-show='chooseBol' @touchstart='ensure'>
				确定
			</div>
			<div v-show='!chooseBol'>
				确定
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import cityData from '../assets/js/city';
	export default{
		data(){
			return{
				cityData: cityData,
				city: '',
				chooseBol: false
			}
		},
		methods:{
			ensure(){
				this.$root.setCookie('city',this.city,24*7);
				this.$router.back();
			}
		},
		created(){
			this.city = this.$root.getCookie('city');
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.wrap{
		text-align: left;
	}
	.footer-btn{
		width: 100%;
		position: fixed;
		bottom: 0px;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		background-color: #ccc;
		color: #fff;
	}
	.bg-primary{
		background-color: #007FD6;
	}
</style>