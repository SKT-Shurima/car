<template>
	<div>
		<header class="mint-header is-fixed">
			<em class="header-title">
				<i class="icon icon-area"></i>
				<router-link to='/chooseCity'>{{city}}</router-link>
			</em>
		</header>
  		<div class="contain">
			<v-search :search-info='searchInfo' @sendval='getval'></v-search>
		</div>
	</div>
</template>
<script type="text/javascript">
	import vSearch from '../common/vSearch';
	import {getInfo,apply,getuserinfo} from '../assets/js/api';
	export default{
		data(){
			return {
				city: '',
				searchInfo:{
					title: '您是我们服务的第0位车主',
					placeholder: '请输入您的手机号',
					btn: '提交',
					img: './static/img/maintain.png'
				}
			}
		},
		components: {
			vSearch
		},
		methods:{
			getval(phone){
				let phoneBol = this.$root.checkPhone(phone);
				if (phoneBol) {
					this.sendApply(phone);
				}
			},
			sendApply(phone){
				if (!this.city) {
					this.$root.checkVal(this.city,'请选择城市');
					return false;
				}
				let params ={
					token: this.$root.getCookie('token'),
					city: this.city,
					phone: phone
				}
				apply(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode===0) {
						MessageBox('提示', message);
					}else{
						this.$root.errorInfo(errcode,message);
					}
				})
			},
			getCarInfo(params){
				getInfo(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode===0) {
						this.searchInfo.title = `您是我们服务的第${content.total_count}位车主`;
					}else{
						this.$root.errorInfo(ercode,message);
					}
				})
			},
			getUserInfo(params){
				getuserinfo(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode===0) {
						this.city = content.area;
						this.$root.setCookie('city',this.city,24*7);
					}else{
						this.$root.errorInfo(errcode,message);
					}
				})
			}
		},
		mounted(){
			this.$nextTick(()=>{
				let params  ={
					token: this.$root.getCookie('token')
				}
				this.getCarInfo(params);
				this.city = this.$root.getCookie('city');
				if (!this.city) {
					this.getUserInfo(params);
				}
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.icon-area{
		height: .36rem;
		background-image: url('../assets/img/area.png');
	}
	.header-title{
		position: absolute;
		display: inline-block;
		left: 0px;
		right: 0px;
		line-height: .36rem;
		margin: auto;
		a{
			vertical-align: .08rem;
			font-size: .28rem;
		}
	}
</style>