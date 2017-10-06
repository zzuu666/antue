<template>
  <container
    title="Switch 开关">
    <atu-switch
      :defaultChecked="true"
      disabled
      checkedChildren="开"
      unCheckedChildren="关"></atu-switch>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import ARow from '@/row'
import Icon from '@/icon'
import ACol from '@/col'
import AtuSwitch from '@/switch'
export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    AtuSwitch,
    Icon
  }
}
</script>

