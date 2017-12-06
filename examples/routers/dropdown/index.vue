<template>
  <container
    title="Dropdown 下拉菜单">
    <code-show>
      <demo-basic />
    </code-show>
    <code-show>
      <demo-button />
    </code-show>
    <code-show>
      <demo-placement />
    </code-show>
    <code-show>
      <demo-trigger />
    </code-show>
    <code-show>
      <demo-event />
    </code-show>
    <code-show>
      <demo-submenu />
    </code-show>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import DemoBasic from './demo/basic'
import DemoButton from './demo/dropdown-button'
import DemoPlacement from './demo/placement'
import DemoTrigger from './demo/trigger'
import DemoEvent from './demo/event'
import DemoSubmenu from './demo/sub-menu'

export default {
  components: {
    Container,
    CodeShow,
    DemoBasic,
    DemoButton,
    DemoPlacement,
    DemoTrigger,
    DemoEvent,
    DemoSubmenu
  }
}
</script>
