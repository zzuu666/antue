<template>
  <container
    title="Switch 开关">
    <atu-switch
      :defaultChecked="true"
      ></atu-switch>
    <atu-switch
      :defaultChecked="true"
      disabled
      checkedChildren="开"
      unCheckedChildren="关"
      size="small"></atu-switch>
    <atu-switch
      :defaultChecked="true"
      v-model="check"
      @change="canChange">
      <icon type="check" slot="checkedChildren" />
      <icon type="cross" slot="unCheckedChildren" />
    </atu-switch>
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
  data () {
    return {
      check: false
    }
  },
  methods: {
    canChange (value) {
      console.log(this.check)
    }
  },
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

