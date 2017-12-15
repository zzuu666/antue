<template>
  <div>
    <p style="margin-bottom: 20px;">
      <ant-checkbox v-model="check" :disabled="disable">Checkbox</ant-checkbox>
    </p>
    <p>
      <ant-button type="primary" size=small @click="toggleCheck">{{ checkText }}</ant-button>
      <ant-button type="primary" size=small @click="disable=!disable">{{ disableText }}</ant-button>
    </p>
  </div>
</template>

<script>
  import AntCheckbox from '@/checkbox'
  import AntButton from '@/button'

  export default {
    components: { AntCheckbox, AntButton },
    data: () => ({
      check: true,
      disable: false
    }),
    computed: {
      checkText () {
        return this.check ? 'Uncheck' : 'Check'
      },
      disableText () {
        return this.disable ? 'Enable' : 'Disable'
      }
    },
    methods: {
      toggleCheck () {
        this.check = !this.check
      },
      toggleDisable () {}
    }
  }
</script>
