<template>
	<div class="wrap">
		<mt-header fixed title="图片列表">
  			<span slot='left' @touchstart='_back'>
  				<i class="mintui mintui-back"></i>
  			</span>
  			</mt-button>
  		</mt-header>
  		<div class="contain">
  			<ul v-if='list.length'>
	  			<li v-for='item in list' class="img-list">
	  				<img src="item">
	  			</li>
	  		</ul>
	  		<div class="no-contain" v-else>
	  			暂无数据
	  		</div>
  		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				list: []
			}
		},
		created(){
			this.list = sessionStorage.imgList?sessionStorage.imgList:[];
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.img-list{
		width: 100%;
		img{
			width: 100%;
		}
	}
</style>