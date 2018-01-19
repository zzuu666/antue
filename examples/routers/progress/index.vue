<template>
  <container title="Progress 进度条" profile="展示操作的当前进度">
    <h2>何时使用</h2>
    <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
    <ul>
      <li>当一个操作会打断当前界面，或者需要后台运行，且耗时可能超过2秒时；</li>
      <li>当需要显示一个操作完成的百分比时。</li>
    </ul>
    <h2>代码演示</h2>

    <a-row :gutter="12">
      <a-col :span="12">
        <a-col :span="24">
          <code-show title="进度条" desc="标准的进度条。">
            <progress-line></progress-line>
          </code-show>
        </a-col>
        <a-col :span="24">
          <code-show title="小型进度条" desc="适合放在较狭窄的区域内">
            <line-mini></line-mini>
          </code-show>
        </a-col>
        <a-col :span="24">
          <code-show title="进度圈动态展示" desc="会动的进度条才是好进度条。">
            <circle-dynamic></circle-dynamic>
          </code-show>
        </a-col>
        <a-col :span="24">
          <code-show title="自定义文字格式" desc="`format`属性指定格式。">
            <format></format>
          </code-show>
        </a-col>
      </a-col>
      <a-col :span="12">
        <a-col :span="24">
          <code-show title="进度圈" desc="圈形的进度。">
            <progress-circle></progress-circle>
          </code-show>
        </a-col>
        <a-col :span="24">
          <code-show title="小型进度圈" desc="小一号的圈形进度">
            <circle-mini></circle-mini>
          </code-show>
        </a-col>
        <a-col :span="24">
          <code-show title="动态展示" desc="会动的进度条才是好进度条。">
            <dynamic></dynamic>
          </code-show>
        </a-col>
        <a-col :span="24">
          <code-show title="仪表盘" desc="通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。">
            <dashboard></dashboard>
          </code-show>
        </a-col>
      </a-col>
    </a-row>
  </container>
</template>

<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import ARow from '@/row'
  import ACol from '@/col'
  import ProgressLine from './demo/line'
  import ProgressCircle from './demo/circle'
  import LineMini from './demo/line-mini'
  import CircleMini from './demo/circle-mini'
  import CircleDynamic from './demo/circle-dynamic'
  import Format from './demo/format'
  import Dynamic from './demo/dynamic'
  import Dashboard from './demo/dashboard'

  export default {
    components: {
      Container,
      CodeShow,
      ARow,
      ACol,
      ProgressLine,
      ProgressCircle,
      LineMini,
      CircleMini,
      CircleDynamic,
      Format,
      Dynamic,
      Dashboard
    }
  }
</script>

