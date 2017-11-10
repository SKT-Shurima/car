<template>
	<div>
		<mt-header fixed title="车辆出险查询">
  			<mt-button slot="left" icon='back'>
  			</mt-button>
  		</mt-header>
  		<div class="contain">
  			<div class="seach-res">
  				查询车辆: jdhscbdcdsb
  			</div>
  			<div class="overview">
  				<table border='1'>
	  				<thead>
	  					<tr>
	  						<th>出险次数</th>
	  						<th>3</th>
	  					</tr>
	  				</thead>
	  				<tbody>
	  					<tr>
	  						<td>理赔总金额(元)</td>
	  						<td>3000</td>
	  					</tr>
	  				</tbody>
	  			</table>
  			</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style type="text/css" lang='scss' scoped>
	.overview{
		padding: 0px .4rem;
		line-height: .8rem;
		table{
			border-color: #ddd;
		}
	}
</style>
