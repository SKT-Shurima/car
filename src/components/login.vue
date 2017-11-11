<template>
	<div class="wrap">
		<mt-header fixed title="登录"></mt-header>
		<div class="contain">
			<div class="logo">
				<img src="../assets/img/logo.png">
			</div>
			<dl class="login-box">
				<dt class="border-bottom-1px">
					<i class="icon icon-phone"></i>
					<input type="number" v-model='phone' placeholder="请输入手机号" onkeypress="return(/[\d]/.test(String.fromCharCode(event.keyCode)))">
				</dt>
				<dd class="border-bottom-1px">
					<i class="icon icon-code"></i>
					<input type="number" v-model='password' placeholder="请输入密码" >
				</dd>
			</dl>
			<div class="login-btn" @touchstart='login'>
				<mt-button type="primary" size='small'>登录</mt-button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {login} from  '../assets/js/api';
	export default {
		data(){
			return {
				phone: '',
				password: '',
			}
		},
		methods:{
			login(){
				let params = {
					phone: 15158417521,
					password: "e10adc3949ba59abbe56e057f20f883e"
				}
				login(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode===0) {
						this.$root.setCookie('token',content.token,2);
						this.$router.replace('/home');
					}
				})
			}
		},
		mounted(){
			this.$nextTick(()=>{
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.wrap{
		min-height: 100vh;
		padding: 0px .85rem; 
		background-color: #fff;
	}
	.logo{
		width: 1.74rem;
		height: 1.74rem;
		margin: 1.5rem auto 1.3rem;
		text-align: center;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.icon{
		width: .6rem;
		height: .6rem;
		vertical-align: middle;
		margin: 0px .3rem;
	}
	.icon-phone{
		background-image: url('../assets/img/phone.png');
	}
	.icon-code{
		background-image: url('../assets/img/code.png');
	}
	.login-box{
		line-height: 1rem;
		text-align: left;
	}
	input::-webkit-input-placeholder{ 
    	color: #9DA5A8;
	}
	.login-btn{
		margin-top: 1.5rem;
	}
</style>