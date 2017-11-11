<template>
  <div class="radio-base-container">
    <radio-group v-model="value1" :options="options1" v-on:change="change1"></radio-group>
    <radio-group v-model="value2" :options="options2" v-on:change="change1"></radio-group>
    <radio-group v-model="value3" :options="optionsWithDisabled" v-on:change="change1"></radio-group>
  </div>
</template>

<script>
  import Radio from '@/radio'
  export default {
    data () {
      return {
        value1: 'Apple',
        value2: 'Apple',
        value3: 'Apple',
        options1: ['Apple', 'Pear', 'Orange'],
        options2: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ],
        optionsWithDisabled: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange', disabled: false }
        ]
      }
    },
    methods: {
      change1 (val) {
        console.log(val)
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.Group
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
