<template>
	<div class="wrap">
		<mt-header fixed title="历史记录">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  		</mt-header>
  		<div class='contain'>
  			<ul v-if='history.length'>
  				<li v-for='item in history' class='border-bottom-1px history-list'>
  					<dl>
  						<dt>
  							<div>
  								{{item.search_text}}（{{item.title}}）
  							</div>
  							<div class="color-gray">
  								{{item.date_add*1000|dateStyle}}
  							</div>
  						</dt>
  						<dd>
  							<i class="icon icon-del" @click='del(item.search_id)'></i>
  						</dd>
  					</dl>
  				</li>
  			</ul>
  			<div class="no-contain">
  				暂无数据
  			</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	import {historyInfo,historyDelete} from '../assets/js/api';
	export default{
		data(){
			return {
				history: []
			}	
		},
		methods:{
			getHistoryInfo(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				let params = {
					token: this.$root.getCookie('token')
				}
				historyInfo(params).then(res=>{
					let {errcode,message,content} = res;
					if (errcode===0) {
						this.history = content.history;
					}else{
						this.$root.errorInfo(ercode,message);
					}
					Indicator.close();
				})
			},
			del(id){
				MessageBox.confirm('确定删除该记录?').then(action => {
					let params ={
						token: this.$root.getCookie('token'),
						search_id:id
					}
					historyDelete(params).then(res=>{
						let {errcode,message,content} = res;
						if (errcode ===0 ) {
							this.getHistoryInfo();
						}else{
							this.$root.errorInfo(errcode,message);
						}
					})
				}).catch(action=>{
				});
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.getHistoryInfo();
			})
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.contain{
		background-color: #fff;
	}
	.history-list{
		dl{
			display: -webkit-box;
			text-align: left;
			padding: .2rem .4rem;
			line-height: .5rem;
			font-size: .3rem;
		}
		dt{
			-webkit-box-flex: 1;
		}
		.icon-del{
			width: .36rem;
			height: .42rem;
			vertical-align: -.3rem;
			background-image: url('../assets/img/delete.png');
		}
	}
</style>