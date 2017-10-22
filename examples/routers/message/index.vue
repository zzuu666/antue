<template>
  <container title="Message 全局提示" profile="全局展示操作反馈信息。">
    <h2>何时使用</h2>
    <p>可提供成功、警告和错误等反馈信息。</p>
    <p>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</p>
    <h2>代码演示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show class="menu-code" title="普通提示" desc="普通信息反馈。">
          <demo-info />
        </code-show>
      </a-col>
      <a-col ref="abc" :span="12">
        <code-show class="menu-code" title="其他提示类型" desc="包括成功、失败、警告。">
          <demo-other />
        </code-show>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show class="menu-code" title="修改延时" desc="自定义时长 10s，默认时长为 3s。">
          <demo-duration />
        </code-show>
      </a-col>
      <a-col ref="abc" :span="12">
        <code-show class="menu-code" title="加载中" desc="进行全局 loading，异步自行移除。">
          <demo-loading />
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
import DemoInfo from './demo/info'
import DemoOther from './demo/other'
import DemoDuration from './demo/duration'
import DemoLoading from './demo/loading'

export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    DemoInfo,
    DemoOther,
    DemoDuration,
    DemoLoading
  }
}
</script>

<style lang="less" scoped>
  .code-show {
    margin-top: 20px;
  }
</style>
