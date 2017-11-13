<template>
	<div class="wrap">
		<mt-header fixed title="车辆出险查询">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
  		<div class="contain">
  			<div class="seach-res">
  				查询车辆: jdhscbdcdsb
  			</div>
  			<div class="overview">
  				<table cellspacing="0"  class="table-list">
	  				<tbody>
	  					<tr v-for='item in overview'>
	  						<td v-text='item.key'></td>
	  						<td v-text='item.value'></td>
	  					</tr>
	  				</tbody>
	  			</table>
  			</div>
  			<div class="records">
  				<div class="slide">出险次数</div>
				<ul class="records-list">
					<li v-for='(item,index) in records'>
						<dl class="border-bottom-1px">
							<dt class="border-bottom-1px">
								<div class="records-title-l">
									<span v-text='item.plate'></span>
									<em class="color-gray date" v-text='item.date'></em>
								</div>
								<div  class='records-title-r'>
									<router-link :to='{path:"/endangerDetail",query:{index:index}}'>
										<mt-button size="small" type='primary' plain>查看详情</mt-button>
									</router-link>
								</div>
							</dt>
							<dd>
								<div class="money">
									<span>换件金额：&yen;{{item.barterMoney}}</span>
									<span>维修金额：&yen;{{item.serviceMoney}}</span>
									<span>其他金额：&yen;{{item.otherMoney}}</span>
								</div>
								<div>
									总金额：<em class='color-price'>&yen;{{item.dangerMoney}}</em>
								</div>
							</dd> 
						</dl>
					</li>
				</ul>
  			</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	import {dangerOneSearch}  from '../assets/js/api';
	export default {
		props: {
			overview: Array,
			records: Array
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
 @import '../assets/css/mixin';
	.overview{
		padding: 0px .4rem .4rem;
		line-height: .8rem;
		background-color: #fff;
	}
	.records-list{
		padding: 0px .3rem;
		background-color: #fff;
		line-height: .9rem;
		font-size: .3rem;
		text-align: left;
		dt{
			display: -webkit-box;
		}
		.date{
			font-size: .18rem;
			margin-left: .26rem;
		}
		.records-title-l{
			-webkit-box-flex: 1;
		}
		.records-title-r{
			display: inline-block;
		}
		.money{
			display: flex;
			justify-content: space-around;
			span{
				@include ellipsis(1);
			}
		}
		.mint-button--small{
			height: .54rem;
		}
	}
</style>
