<template>
	<div>
		<div class="show-img">
			<img :src='searchInfo.img'>
		</div>
		<dl class='search-wrap'>
			<dt v-text='searchInfo.title'></dt>
			<dd>
				<div>
					<input type="text" name="" :placeholder="searchInfo.placeholder" v-model='vin' @keyup="vin=vin.toUpperCase()">
				</div>
				<div>
					<mt-button type="primary" size='small' @touchstart.native='check'>{{searchInfo.btn}}</mt-button>
				</div>
			</dd>
		</dl>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				vin: ''
			}
		},
		props: {
			searchInfo: Object
		},
		methods: {
			check(){
				if (!this.vin) {
					Toast({
					  message: '提示',
					  position: 'middle',
					  duration: 3000
					});
					return false;
				}
				let path = this.searchInfo.path;
				this.$router.push({path: path, query:{vin: this.vin}});
			}
		}
	}
</script>