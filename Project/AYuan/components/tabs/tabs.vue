<!-- 横向标签栏 -->
<template>
	<u-tabs :list="tabNameList" :is-scroll="false" :current="cur"
		active-color="#392f41" inactive-color="#c2ccd0"
		:bar-style="{backgroundColor: '#0eb83a'}" class="tabs"
		@change="handleChangeTab">
	</u-tabs>
</template>

<script>
export default {
    name: "tabs",
    props: {
        tabs: Array,
        cur: {
            type: Number,
            default: 0,
            required: false
        }
    },
    computed: {
        tabNameList() {
            let res = [];
            this.tabs.map( el => res.push( {
                name: el
            } ) );
            return res;
        }
    },
    methods: {
        handleChangeTab( index ) {
            this.$emit('update:cur' , index);
        }
    }
};
</script>

<style lang="scss">
	.tabs {
		width: 100%
	}
</style>
