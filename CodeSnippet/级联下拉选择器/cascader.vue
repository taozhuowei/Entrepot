<!-- 级联选择器（使用树形数组） -->
<template>
  <div class="cascader-container">
    <select
      v-for="(select, i) in selectList"
      :key="i"
      v-model="selections[i]"
      @change="handleChange(i)"
    >
      <option v-for="(item, j) in options[select]" :key="j" :value="item.val">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
import arrayToTree from "./arrayToTree";

export default {
  name: "cascader",
  props: {
    data: Array,
  },
  data() {
    return {
      treeData: [], //树

      treeDepth: 0, //树的深度

      selectList: [],

      selections: {},

      options: {},
    };
  },
  created() {
    this.treeData = arrayToTree(this.data);
    this.treeDepth = this.getDepth(this.treeData);

    for (let i = 0; i < this.treeDepth; i++) {
      this.selectList.push(i);
      this.$set(this.selections , i , '');
      this.$set(this.options , i , []);
    }
  },
  mounted() {
    this.selectionInit();
  },
  methods: {
    //初始化选项数组
    selectionInit() {
      console.log(this.options);
      this.options[0] = this.findFromTreeData(
        this.treeData[0],
        "root"
      ).children;
      this.selections[0] = this.options[0][0].val;

      this.handleChange(0);
    },

    // change事件回调
    handleChange(index) {
      const res = this.findFromTreeData(
        this.treeData[0],
        this.selections[index]
      );

      if (index < this.treeDepth-1) {
        this.options[index + 1] = res.children;
        this.selections[index + 1] = res.children[0].val;
        this.handleChange(index + 1);
      } else {
        console.log(res);
      }
    },

    // 获取树的深度
    getDepth(treeData) {
      let tempTree = treeData.concat();
      let depth = 0;

      while (tempTree.length > 0) {
        const temp = [];

        for (const el of tempTree) temp.push(el);

        tempTree = [];

        for (let i = 0; i < temp.length; i++) {
          if (temp[i].children && temp[i].children.length > 0) {
            for (let j = 0; j < temp[i].children.length; j++) {
              tempTree.push(temp[i].children[j]);
            }
          }
        }

        if (tempTree.length >= 0) {
          depth++;
        }
      }
      return depth - 1;
    },

    /**
     * 遍历树形结构数据并找到目标节点
     * @param node 节点
     * @param val 目标值
     * @param valPath 由值组成的路径
     * @param labelPath 由标签组成的路径
     * @param nodePath 由节点组成的路径
     * @retrun res {
          valpath,
          labelPath,
          nodePath,
          lastNode, //最后一个节点
          lastVal, //最后一个节点的值
          lastLabel, //最后一个节点的标签
          children // 子节点数组
     * }
     */
    findFromTreeData(node, val, valPath, labelPath, nodePath) {
      // 初始化查找路径
      valPath = valPath || []; // 值
      labelPath = labelPath || []; // 标签
      nodePath = nodePath || []; // 节点

      // 深拷贝path
      const tempValPath = valPath.concat();
      const tempLabelPath = labelPath.concat();
      const tempNodePath = nodePath.concat();

      // 记录路径
      tempValPath.push(node.val);
      tempLabelPath.push(node.label);
      tempNodePath.push(node);

      // 查找
      if (node.val === val) {
        return {
          valpath: tempValPath.slice(1),
          labelPath: tempLabelPath.slice(1),
          nodePath: tempNodePath,
          lastNode: node,
          lastVal: node.val,
          lastLabel: node.label,
          children: node.children,
        };
      }
      if (node.children.length > 0) {
        for (const child of node.children) {
          const res = this.findFromTreeData(
            child,
            val,
            tempValPath,
            tempLabelPath,
            tempNodePath
          );
          if (res) return res;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
