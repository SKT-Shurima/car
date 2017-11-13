<template>
	<div class="wrap">
		<mt-header fixed title="车辆出险查询">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
  		<div class="contain">
  			<div class="detail">
  				<table cellspacing="0"  class="table-list">
	  				<thead>
	  					<tr>
	  						<th>理赔项目</th>
	  						<th>理赔类型</th>
	  						<th>金额（元）</th>
	  					</tr>
	  				</thead>
	  				<tbody>
	  					<tr v-for='item in records[query.index].result'>
	  						<td v-text='item.dangerSingleName'></td>
	  						<td v-text='item.dangerSingleType'></td>
	  						<td v-text='item.dangerSingleMoney'></td>
	  					</tr>
	  				</tbody>
	  			</table>
  			</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				query:{index:0}
			}
		},
		props:{
			records: Array
		},
		mounted(){
			this.$nextTick(()=>{
				this.query = this.$root.getHashReq();
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.contain{
		background-color: #fff;
	}
	.detail{
		padding: .4rem;
	}
</style>