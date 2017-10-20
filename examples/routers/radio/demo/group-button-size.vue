<template>
  <div class="radio-base-container">
    <div>
      <radio-group v-model="checkedValue" @change="handleChange" size="large">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
    <div style="margin-top: 16px">
      <radio-group v-model="checkedValue" @change="handleChange" size="small">
        <radio-button value="a">Hangzhou</radio-button>
        <radio-button value="b">Shanghai</radio-button>
        <radio-button value="c">Beijing</radio-button>
        <radio-button value="d">Chengdu</radio-button>
      </radio-group>
    </div>
  </div>
</template>

<script>
  import Radio from '@/radio'
  export default {
    data () {
      return {
        checkedValue: 'a'
      }
    },
    methods: {
      handleChange (val) {
        console.log(val)
      }
    },
    components: {
      Radio,
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button
    }
  }
</script>

<style>
  .radio-base-container {
    text-align: left;
    padding: 10px 20px;
  }
</style>
