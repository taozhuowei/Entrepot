<script>
export default {
    onLaunch: function() {
        console.log('App Launch');
    },
    onShow: function() {
        console.log('App Show');
    },
    onHide: function() {
        console.log('App Hide');
    }
};
</script>

<style lang="scss">
	/* uview common scss */
	@import "uview-ui/index.scss";
	
	/* animate.css */
	@import  "animate.css/animate.min.css";
	
	.page-container {
		width: 100vw;
		min-height: calc(100vh - 44px);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: $uni-bg-color-grey;
	}
	
	/* #ifdef APP-PLUS */
	.page-container {
		height: 100vh;
	}
	/* #endif */
	
	.card {
		width: $uni-width-main;
		display: flex;
		margin-top: $uni-spacing-lg ;
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-base;
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
