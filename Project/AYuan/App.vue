<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* uview common scss */
	@import "uview-ui/index.scss";
	
	/* animate.css */
	@import  "animate.css/animate.min.css";
	
	.page-container {
		width: 100vw;
		height: calc(100vh - 44px);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: $uni-bg-color-grey;
	}
</style>
