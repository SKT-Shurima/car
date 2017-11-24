<template>
	<div class="wrap">
		<mt-header fixed title="出险次数查询">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  			</mt-button>
  		</mt-header>
  		<div class="contain">
  			<div class="seach-res">
  				查询车辆: {{vin}}
  			</div>
  			<v-cell :title='baseInfo.title' :lists='baseInfo.info'>
  			</v-cell>
  			<v-cell :title='baseDetail.title' :lists='baseDetail.info'>
  			</v-cell>
  			<div class="result">
				<div class="slide">结果报告</div>
				<p class="cell-page" v-text='result.report'></p>
				<ul class="cell-list">
					<li v-for='item in result.info' class="border-bottom-1px cell-item">
						<div class='cell-key color-gray' v-text='item.key'></div>
						<div class="cell-value" v-text='item.value'></div>
					</li>
					<li class="border-bottom-1px cell-item">
						<div class='cell-key color-gray'>照片详情</div>
						<div class="cell-value">
							<router-link to='/imgDetail' class='color-primary'>点击查看照片</router-link>	
						</div>
					</li>
				</ul>
				<div v-for='item in result.character'>
					<p class="cell-page border-bottom-1px" v-text='item.content'></p>
					<ul class="cell-list">
						<li class="border-bottom-1px cell-item">
							<div class='cell-key color-gray'>公里数</div>
							<div class="cell-value" v-text='item.mileage'></div>
						</li>
						<li class="border-bottom-1px cell-item">
							<div class='cell-key color-gray'>时间</div>
							<div class="cell-value" v-text='item.date'></div>
						</li>
					</ul>
				</div>
				<ul class="cell-list" style="margin: .22rem 0px;">
					<li class="border-bottom-1px cell-item">
						<div class='cell-key color-gray'>事故次数</div>
						<div class="cell-value" v-text='result.count'></div>
					</li>
				</ul>
			</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	import vCell from '../common/vCell';
	import {upkeepSearch} from '../assets/js/api';
	export default {
		data(){
			return {
				query: {},
				vin: '',
				baseInfo: {
					title: '基本信息',
					info: []
				},
				baseDetail:{
					title: '车辆详情',
					info: [] 
				},
				result: {
					title: '结果报告',
					report: '',
					info: [],
					character: [],
					count: ''
				}
			}
		},
		components:{
			vCell
		},
		methods:{
			getUpkeepSearch(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				let params = {
					token: this.$root.getCookie('token'),
					vin: this.query.vin
				}
				upkeepSearch(params).then(res=>{
					let {errcode,message,content} = res;
					if(errcode===0){
						this.vin = content.vin;
						// 获取基本信息
						let baseInfo = [{
							key: '公里数',
							value: content.lastMileage
						},{
							key: '查询状态',
							value: content.status
						},{
							key: '车架号',
							value: content.vin
						}];
						this.baseInfo.info = baseInfo;
						// 获取车辆详情
						let baseDetail = [{
							key: '车系',
							value: content.basic_information.series
						},{
							key: '车身形式',
							value: content.basic_information.body
						},{
							key: '驱动形式',
							value: content.basic_information.drivemode
						},{
							key: '发动机型号',
							value: content.basic_information.carlevel
						},{
							key: '车辆级别',
							value: content.basic_information.engine
						},{
							key: '上市年月',
							value: content.basic_information.listingdate
						},{
							key: '发动机参数',
							value: content.basic_information.enginetype
						},{
							key: '变速箱',
							value: content.basic_information.transmission
						},{
							key: '车型',
							value: content.basic_information.models
						},{
							key: '车辆配置名称',
							value: content.basic_information.passengers
						},{
							key: '换挡类型',
							value: content.basic_information.transmissiontype
						},{
							key: '指导价格',
							value: content.basic_information.price
						},{
							key: '档位数',
							value: content.basic_information.gear
						},{
							key: '排量',
							value: content.basic_information.displacement
						},{
							key: '厂家名称',
							value: content.basic_information.manufacturer
						},{
							key: '车架号',
							value: content.basic_information.vin
						},{
							key: '车门车座',
							value: content.basic_information.bodytype
						},{
							key: '品牌',
							value: content.basic_information.brand
						},{
							key: '燃油标号',
							value: content.basic_information.fuel
						},{
							key: '年款',
							value: content.basic_information.year
						},{
							key: '生产年份',
							value: content.basic_information.manufacturedate
						}];
						this.baseDetail.info = baseDetail;
						// 结果文字
						this.result.report = content.report.join('；');
						let result = [{
							key: '品牌名称',
							value: content.brand
						},{
							key: '订单ID',
							value: content.order_id
						},{
							key: '最后进店时间',
							value: content.brand
						}]
						this.result.info = result;
						this.result.character = content.character;
						this.result.count = content.size;
						sessionStorage.imgList = content.images;
					}else{
						this.$root.errorInfo(errcode,message);
					}
					Indicator.close();
				})
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.query = this.$root.getHashReq();
				this.getUpkeepSearch();
			})
		}
	}	
</script>
<style type="text/css" lang='scss' scoped>
	
</style>