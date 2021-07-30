<!-- 渐变色文字组件 -->
<template>
	<text
		:style="{backgroundImage: gradient , fontSize: fontSize+'rpx' , fontWeight: fontWeight}"
		class="text-gradient">{{ text }}</text>
</template>

<script>
export default {
    name: "text-gradient",
    props: {
        direction: { //渐变方向
            type: String,
            default: 'to right',
            required: false
        },
        colors: { //颜色数组
            type: Array,
            required: false,
            validator: val => val.every( el =>
                el.length === 7 && el.slice( 0, 1 ) === '#'
            )
        },
        percents: { //颜色百分比的值
            type: Array,
            validator: val => {
                return val.every(el => el <= 100);
            }
        },
        text: { //文字
            type: String,
            default: 'text-gradient',
        },
        fontSize: { //字号
            type: Number,
            required: false,
            default: 32
        },
        fontWeight: {
            type: String,
            required: false,
            default: 'normal'
        }
    },
    computed: {
        gradient() {
            let pre = 'linear-gradient(' + this.direction + ',';
            const suffix = ')';
            this.colors.map( ( el, i ) => {
                const content = el + ' ' + this.percents[ i ] + '%,';
                pre += content;
            } );
            pre = pre.slice( 0, -1 );
            return pre + suffix;
        }
    }
};
</script>

<style lang="scss">
	.text-gradient {
		background-clip: text;
		box-decoration-break: clone;
		color: transparent;
	}
</style>
