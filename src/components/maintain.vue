<template>
	<div class="wrap">
		<mt-header fixed title="维修保养查询">
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
	import {prepay,pay} from '../assets/js/api';
	export default{
		data(){
			return{
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
					let params = {
						token: this.$root.getCookie('token'),
						order_type: '2'
					}
					prepay(params).then(res=>{
						let {errcode,message,content} = res;
						if (errcode===0) {
							let msg = `查询需要支付${content.order_amount}元，是否继续？`;
							MessageBox.confirm(msg).then(action => {
								this.payfor(content.order_amount);
							}).catch(action=>{
							});
						}else{
							this.$root.errorInfo(errcode,message);
						}
					})
				}
			},
			payfor(order_amount){
				let params = {
					token: this.$root.getCookie('token'),
					order_amount: order_amount,
					pay_id: 3,
					order_type: ''
				}
				pay(params).then(res=>{
					let {errcode,message,content} = res,_this=this;
					if (errcode===0) {
						WeixinJSBridge.invoke('getBrandWCPayRequest',{
						   	"appId":content.appid,
						  	"nonceStr":content.noncestr,
						  	"package":content.package,
						  	"signType":content.signType,
						  	"timeStamp":content.timestamp,
						  	"paySign":content.paySign
						},function(res){
						    // WeixinJSBridge.log(res.err_msg);
						    // alert(res.err_code+res.err_desc+res.err_msg);
						    let  err_msg = res.err_msg;
						    alert(err_msg);
						    _this.$router.push('/maintainRefer');
						});
					}else{
						this.$root.errorInfo(errcode,message);
					}
				})
			}
		}
	}
</script>
<style type="text/css">
</style>
