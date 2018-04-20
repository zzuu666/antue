<template>
      <container
    title="Notification通知提醒框"
    profile="全局展示通知提醒信息。">
    <h2>何时使用</h2>
    <p>在系统四个角显示通知提醒信息。经常用于以下情况：</p>
    <ul><li><p>较为复杂的通知内容。</p></li><li><p>带有交互的通知，给出用户下一步的行动点。</p></li><li><p>系统主动推送。</p></li></ul>
    <h2>代码演示</h2>
    <a-row :gutter="12" style="margin-bottom: 20px">
      <a-col :span="12">
        <code-show title="基本" desc="最简单的用法，4.5 秒后自动关闭。">
          <base-demo></base-demo>
        </code-show>
        <code-show title="带图标的通知提醒框" desc="通知提醒框左侧有图标。">
         <with-icon-demo></with-icon-demo>
        </code-show>
        <code-show title="自定义图标" desc="图标可以被自定义。">
          <custom-icon-demo></custom-icon-demo>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="自动关闭的延时" desc="自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。">
         <duration-demo></duration-demo>
        </code-show>
        <code-show title="自定义按钮" desc="自定义关闭按钮的样式和文字。">
          <with-btn-demo></with-btn-demo>
        </code-show>
        <code-show title="位置" desc="可以设置通知从右上角、右下角、左下角、左上角弹出。">
          <placement-demo></placement-demo>
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
  import DurationDemo from './demo/duration.vue'
  import WithIconDemo from './demo/with-icon.vue'
  import PlacementDemo from './demo/placement.vue'
  import CustomIconDemo from './demo/custom-icon.vue'
  import WithBtnDemo from './demo/with-btn.vue'
  
  export default {
    components: {
      Container,
      ARow,
      ACol,
      CodeShow,
      BaseDemo,
      DurationDemo,
      WithIconDemo,
      PlacementDemo,
      CustomIconDemo,
      WithBtnDemo
    }
  }
</script>
