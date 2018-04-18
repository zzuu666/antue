<template>
      <container
    title="Badge徽标数"
    profile="图标右上角的圆形徽标数字。">
    <h2>何时使用</h2>
    <p>一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="12">
        <code-show title="基本" desc="简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。">
          <base-demo></base-demo>
        </code-show>
        <code-show title="封顶数字" desc="超过 overflowCount 的会显示为 ${overflowCount}+，默认的 overflowCount 为 99。">
         <overflow-demo></overflow-demo>
        </code-show>
        <code-show title="状态点" desc="用于表示状态的小圆点。">
          <status-demo></status-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="独立使用" desc="不包裹任何元素即是独立使用，可自定样式展现。">
         <no-wrapper-demo></no-wrapper-demo>
        </code-show>
        <code-show title="讨嫌的小红点" desc="没有具体的数字。">
          <dot-demo></dot-demo>
        </code-show>
        <code-show title="动态" desc="展示动态变化的效果。">
          <change-demo></change-demo>
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

  import BaseDemo from './demo/basic.vue'
  import NoWrapperDemo from './demo/no-wrapper.vue'
  import OverflowDemo from './demo/overflow.vue'
  import DotDemo from './demo/dot.vue'
  import StatusDemo from './demo/status.vue'
  import ChangeDemo from './demo/change.vue'
  
  export default {
    components: {
      Container,
      ARow,
      ACol,
      CodeShow,
      BaseDemo,
      NoWrapperDemo,
      OverflowDemo,
      DotDemo,
      StatusDemo,
      ChangeDemo
    }
  }
</script>
