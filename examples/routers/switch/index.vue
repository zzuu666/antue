<template>
  <container
    title="Switch 开关">
    <atu-switch v-model="check"></atu-switch>
    <atu-switch
      v-model="check"
      disabled
      on="开"
      off="关"
      size="small"></atu-switch>
    <atu-switch
      :defaultChecked="true"
      v-model="check"
      @change="handleChange">
      <icon type="check" slot="on" />
      <icon type="cross" slot="off" />
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
    handleChange (value) {
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

