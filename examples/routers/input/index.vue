<template>
  <container title="Input 输入框" profile="通过鼠标或键盘输入内容，是最基础的表单域的包装。">
    <h2>何时使用</h2>
    <p>需要用户输入表单域内容时。</p>
    <p>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="基本使用" desc="基本使用">
          <base-demo></base-demo>
        </code-show>
        <code-show title="前置/后置标签" desc="用于配置一些固定组合。">
          <addon-demo></addon-demo>
        </code-show>
        <code-show title="前缀和后缀" desc="在输入框上添加前缀或后缀图标。">
          <prefix-demo></prefix-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="三种大小" desc="我们为 <input /> 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 22px。
注意： 在表单里面，我们只使用大尺寸的输入框。">
          <size-demo></size-demo>
        </code-show>
      </a-col>
    </a-row>
  </container>
</template>

<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import ARow from '@/row'
  import ACol from '@/col'
  import BaseDemo from './demo/base'
  import SizeDemo from './demo/size'
  import PrefixDemo from './demo/prefix.vue'
  import AddonDemo from './demo/addon.vue'

  export default {
    components: {
      Container,
      ARow,
      ACol,
      BaseDemo,
      CodeShow,
      SizeDemo,
      PrefixDemo,
      AddonDemo
    }
  }
</script>

<style lang="less" scoped>
.code-show {
  margin-top: 20px;
}
</style>
