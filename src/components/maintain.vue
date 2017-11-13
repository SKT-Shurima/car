<template>
	<div class="wrap">
		<mt-header fixed title="维修保养查询">
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
			return{
				searchInfo:{
					title: '请输入您想要查询的车架号(VIN)',
					placeholder: '17位车架号(VIN)',
					btn: '查询',
					img: './static/img/maintain.png',
					path: '/maintainRefer'
				}
			}
		},
		components: {
			vSearch
		}
	}
</script>
<style type="text/css">
</style>
