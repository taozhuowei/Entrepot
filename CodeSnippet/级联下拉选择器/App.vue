<!-- -->
<template>
  <cascader :data="plainData"/>
</template>

<script>
import cascader from './cascader.vue';

export default {
  name: "",
  components: {
      cascader
  },
  data() {
    return {
      plainData: [
        { id: 0, label: 'null' , val: "root", pid: 0 },
        { id: 1, label: '辽宁省', val: "liaoning", pid: 0 },
        { id: 2, label: '其他省', val: "qita", pid: 0 },
        { id: 3, label: '锦州市', val: "jinzhou", pid: 1 },
        { id: 4, label: '沈阳市', val: "shenyang", pid: 1 },
        { id: 5, label: '无名市', val: "wuming", pid: 2 },
        { id: 6, label: '不知道市', val: "buzhidao", pid: 2 },
        { id: 7, label: '古塔区', val: "guta", pid: 3 },
        { id: 8, label: '太和区', val: "tahe", pid: 3 },
        { id: 9, label: '铁西区', val: "tiexi", pid: 4 },
        { id: 10, label: '皇姑区', val: "huanggu", pid: 4 },
        { id: 11, label: '不到啥区', val: "budaosha", pid: 5 },
        { id: 12, label: '内啥区', val: "neisha", pid: 5 },
        { id: 13, label: '这区', val: "zhe", pid: 6 },
        { id: 14, label: '乐啥啥区', val: "leshasha", pid: 6 },
        { id: 15, label: 'a', val: "a", pid: 7 },
        { id: 16, label: 'b', val: "b", pid: 8 },
        { id: 17, label: 'c', val: "c", pid: 9 },
        { id: 18, label: 'd', val: "d", pid: 10 },
        { id: 19, label: 'e', val: "e", pid: 11 },
        { id: 20, label: 'f', val: "f", pid: 12 },
        { id: 21, label: 'g', val: "g", pid: 13 },
        { id: 22, label: 'h', val: "h", pid: 14 },
        { id: 23, label: 'i', val: "i", pid: 14 },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
