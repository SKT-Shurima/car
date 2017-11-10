<template>
	<div>
		<div class="slide" v-text='title'></div>
		<ul>
			<li v-for='item in lists' class="border-bottom-1px cell-item">
				<div class='key color-gray' v-text='item.name'></div>
				<div class="value" v-text='item.value'></div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{

			}
		},
		props: {
			title: String,
			lists: Array
		}
	}
</script>
<style type="text/css" lang='scss' scoped>
	.cell-item{
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		padding: 0px .3rem;
		overflow: hidden;
		font-size: .28rem;
		font-weight: 600;
		text-align: left;
	}
	.key{
		float: left;
		width: 40%;
	}
	.value{
		float: left;
		width: 60%;
	}
</style>