<template>
	<div>
		<mt-header fixed title="出险次数查询">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
		<div class="contain">
			<v-search :search-info='searchInfo' @sendval='getval'></v-search>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vSearch from '../common/vSearch';
	export default{
		data(){
			return {
				searchInfo:{
					title: '请输入您想要查询的车架号(VIN)',
					placeholder: '17位车架号(VIN)',
					btn: '查询',
					img: './static/img/maintain.png',
				}
			}
		},
		components: {
			vSearch
		},
		methods: {
			getval(vin){
				let vinBol = this.$root.checkVin(vin);
				if (vinBol) {
					vin = vin.trim();
					this.$router.push({path: '/endangerNumRefer', query: {vin:vin}});
				}
			}
		}
	}
</script>