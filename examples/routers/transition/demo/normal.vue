<template>
  <div>
    <atu-row>
      <atu-col :span="6">
        <atu-input addonBefore="Type" v-model="type" />
      </atu-col>
      <atu-col :offset="4" :span="6">
        <atu-input addonBefore="Motion" v-model="motion" />
      </atu-col>
      <atu-col :span="8">
        <atu-button @click="handleClick"> Click Me </atu-button>
      </atu-col>
    </atu-row>
    <atu-transtion :type="type" :motion="motion">
      <div class="big-text" v-show="isShow">
        {{type}} {{motion}}
      </div>
    </atu-transtion>
  </div>
</template>

<script>
import AtuTranstion from '@/transition'
import AtuButton from '@/button'
import AtuRow from '@/row'
import AtuCol from '@/col'
import AtuInput from '@/input'

export default {
  data () {
    return {
      isShow: true,
      motion: 'up',
      type: 'slide'
    }
  },
  components: {
    AtuTranstion,
    AtuButton,
    AtuRow,
    AtuCol,
    AtuInput
  },
  methods: {
    handleClick () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="less" scoped>
.big-text {
  font-size: 36px;
  font-weight: 900;
}
</style>

