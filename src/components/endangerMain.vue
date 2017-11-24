<template>
	<div>
		<router-view  :overview='overview' :records='records'></router-view>
	</div>
</template>
<script type="text/javascript">
	import {dangerOneSearch}  from '../assets/js/api';
	export default {
		data(){
			return {
				query: {},
				overview: [],
				records: []
			}
		},
		methods:{
			getDangerOneSearch(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				let params = {
					token: this.$root.getCookie('token'),
					vin: this.query.vin
				}
				dangerOneSearch(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode === 0) {
						let overview = [{
							key: '出险次数',
							value: content.overview.findCount
						},{
							key: '理赔总金额（元）',
							value: content.overview.dangerSumMoney
						},{
							key: '换件总件数',
							value: content.overview.barterSumCount
						},{
							key: '换件总金额（元）',
							value: content.overview.barterSumMoney
						},{
							key: '维修总次数',
							value: content.overview.serviceSumCount
						},{
							key: '维修总金额（元）',
							value: content.overview.serviceSumMoney
						}];
						this.overview = overview;
						this.records = content.records;
					}else{
						this.$root.errorInfo(ercode,message);
					}
					Indicator.close();
				})
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.query = this.$root.getHashReq();
				this.getDangerOneSearch();
				console.log(this.$router)
			}) 
		}
	}
</script>