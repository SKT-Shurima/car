<template>
	<div class="wrap">
		<mt-header fixed title="出险次数查询">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
  		<div class="contain">
  			<div class="seach-res">
  				查询车辆: {{query.vin}}
  			</div>
  			<div class="count-box">
  				<table cellspacing="0"  class="table-list">
	  				<tbody>
	  					<tr>
	  						<td>出险次数</td>
	  						<td v-text='count'></td>
	  					</tr>
	  				</tbody>
	  			</table>
  			</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	import {countSearch} from '../assets/js/api';
	export default {
		data(){
			return {
				query: {},
				count: ''
			}
		},
		methods:{
			getCountSearch(){
				let params ={
					token: this.$root.getCookie('token'),
					vin: this.query.vin
				}
				countSearch(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode===0) {
						this.count = content.count;
					}else{
						this.$root.errcode(errcode,message);
					} 
				})
			},
		},
		mounted(){
			this.$nextTick(()=>{
				this.query = this.$root.getHashReq();
				this.getCountSearch();
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.wrap{
		background-color: #fff;
	}
	.count-box{
		padding: 0px .4rem;
		td,th{
			width: 50%;
		}
	}
</style>