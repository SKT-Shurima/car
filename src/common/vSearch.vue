<template>
	<div>
		<div class="show-img">
			<img :src='searchInfo.img'>
		</div>
		<dl class='search-wrap'>
			<dt v-text='searchInfo.title'></dt>
			<dd>
				<div>
					<input type="text" name="" :placeholder="searchInfo.placeholder" v-model='val' @keyup="val=val.toUpperCase()">
				</div>
				<div>
					<mt-button type="primary" size='small' @touchstart.native='check'>{{searchInfo.btn}}</mt-button>
				</div>
			</dd>
		</dl>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				val: ''
			}
		},
		props: {
			searchInfo: Object
		},
		methods: {
			check(){
				this.$emit('sendval',this.val);
			}
		}
	}
</script>
