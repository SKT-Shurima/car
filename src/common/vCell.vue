<template>
	<div class="wrap">
		<div class="slide" v-text='title'></div>
		<ul class="cell-list">
			<li v-for='item in lists' class="border-bottom-1px cell-item">
				<div class='cell-key color-gray' v-text='item.key'></div>
				<div class="cell-value" v-text='item.value'></div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			title: String,
			lists: Array
		}
	}
</script>