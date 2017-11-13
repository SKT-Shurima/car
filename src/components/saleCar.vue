<template>
	<div>
		<mt-header fixed title="杭州">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
  		<div class="contain">
			<v-search :search-info='searchInfo'></v-search>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vSearch from '../common/vSearch';
	export default{
		data(){
			return {
				searchInfo:{
					title: '您是我们服务的第位车主',
					placeholder: '请输入您的手机号',
					btn: '提交',
					img: './static/img/maintain.png',
					path: '/endangerMain'
				}
			}
		},
		components: {
			vSearch
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	
</style>