<template>
  <div>
    <checkbox-group>
      <a-row>
        <a-col :span="8">
          <checkbox>A</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>B</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>C</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>D</checkbox>
        </a-col>
        <a-col :span="8">
          <checkbox>E</checkbox>
        </a-col>
      </a-row>
    </checkbox-group>
  </div>
</template>

<script>
  import { Row as ARow, Col as ACol } from '@/grid'
  import { Checkbox, CheckboxGroup } from '@/checkbox'

  export default {
    components: {
      ARow,
      ACol,
      Checkbox,
      CheckboxGroup
    }
  }
</script>
