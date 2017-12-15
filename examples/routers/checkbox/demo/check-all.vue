<template>
  <div>
    <div style="border-bottom: 1px solid rgb(233, 233, 233);">
      <checkbox v-model="checkAll" :indeterminate="indeterminate" @change="toggleChellAll">Check all</checkbox>
    </div>
    <br/>
    <checkbox-group v-model="value" :options="options"></checkbox-group>
  </div>
</template>

<script>
  import { Checkbox, CheckboxGroup } from '@/checkbox'

  export default {
    components: {
      Checkbox, CheckboxGroup
    },
    data: () => ({
      checkAll: false,
      indeterminate: true,
      value: ['Apple', 'Orange'],
      options: ['Apple', 'Pear', 'Orange']
    }),
    watch: {
      value (val) {
        this.checkAll = this.value.length === this.options.length
        this.indeterminate = this.value.length !== this.options.length && this.value.length !== 0
      }
    },
    methods: {
      toggleChellAll (checkAllVal) {
        this.value = checkAllVal ? this.options.map(option => option) : []
      }
    }
  }
</script>
