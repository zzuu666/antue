<template>
  <div>
    <ant-cascader :options="options" placeholder="请选择" @change="onChange"></ant-cascader>
  </div>
</template>

<script>
  import AntCascader from '@/cascader'

  export default {
    components: {
      AntCascader
    },
    data () {
      return {
        options: [
          {
            value: 'zhejiang',
            label: '浙江',
            children: [
              {
                value: 'hangzhou',
                label: '杭州',
                children: [
                  {
                    value: 'xihu',
                    label: '西湖'
                  }
                ]
              }
            ]
          },
          {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: '中华门'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
      }
    }
  }
</script>
