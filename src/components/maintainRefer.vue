<template>
	<div>
		<mt-header fixed title="出险次数查询">
  			<mt-button slot="left" icon='back' @touchstart.preventDefault.native='_back'>
  			</mt-button>
  		</mt-header>
  		<div class="contain">
  			<div class="seach-res">
  				查询车辆: jdhscbdcdsb
  			</div>
  			<v-cell :title='title' :lists='lists'>
  			</v-cell>
  		</div>
	</div>
</template>
<script type="text/javascript">
	import vCell from '../common/vCell';
	export default {
		data(){
			return {
				title: '基本信息',
				lists: [
					{name:' 公里数',value:'18.9555'},
					{name:' 公里数',value:'18.9555'},
					{name:' 公里数',value:'18.9555'}]
			}
		},
		components:{
			vCell
		},
	}	
</script>
<style type="text/css" lang='scss' scoped>
	
</style>