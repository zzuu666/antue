<template>
  <div>
    <checkbox-group v-model="value1" :options="options1">Checkbox</checkbox-group>
    <br/>
    <checkbox-group v-model="value2" :options="options2">Checkbox</checkbox-group>
    <br/>
    <checkbox-group v-model="value2" :options="options2" disabled>Checkbox</checkbox-group>
  </div>
</template>

<script>
  import { CheckboxGroup } from '@/checkbox'

  export default {
    components: {
      CheckboxGroup
    },
    data: () => ({
      options1: ['Apple', 'Pear', 'Orange'],
      value1: ['Apple'],
      options2: [
        { label: 'Apple', value: '1' },
        { label: 'Pear', value: '2' },
        { label: 'Orange', value: '3' }
      ],
      value2: ['2']
    }),
    watch: {
      value (val) {
        console.log(val)
      }
    }
  }
</script>
