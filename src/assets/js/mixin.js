export default {
	methods:{
		_back(){
			this.$router ? this.$router.back() : window.history.back();
		}
	}
}