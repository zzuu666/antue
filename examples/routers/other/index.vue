<template>
  <container title="BackTop组件" profile="滚动条回退">
    <h2  ref="dom">代码展示</h2>
    <a-row :gutter="12">
      <a-col :span="12">
        <code-show title="回到特定元素的顶部" desc="初级使用：回到页面顶部">
          <back-top time="10"><ant-button type="primary">回到顶部</ant-button></back-top>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="回到特定元素的顶部" desc="进阶使用：回到特定元素的位置本例使用this.$refs.dom">
          <back-top :item="item"><ant-button type="primary">回到文档顶部</ant-button></back-top>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="引入动画" desc="广泛使用：为行为引入动画">
          <back-top :item="item" time="10"><ant-button type="primary">回到文档顶部</ant-button></back-top>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="设置回调" desc="高阶使用：返回到顶部后执行回调">
          <back-top :item="item" time="10" :callBack="callBack"><ant-button type="primary">回到文档顶部</ant-button></back-top>
        </code-show>
      </a-col>
    </a-row>
    <tbody>
      <tr>
        <td>API</td>
        <td>默认值</td>
        <td>类型</td>
        <td>描述</td>
      </tr>
      <tr>
        <td>time</td>
        <td>0</td>
        <td>Number</td>
        <td>单位是s描述了移动的快慢</td>
      </tr>
      <tr>
        <td>callBack</td>
        <td>()=>{}</td>
        <td>Function</td>
        <td>动画执行结束后的回调</td>
      </tr>
      <tr>
        <td>item</td>
        <td>()=>window.body</td>
        <td>Function</td>
        <td>移动到特定的元素，默认是body</td>
      </tr>
    </tbody>
  </container>
</template>

<script>
  import Container from '../../common/container'
  import CodeShow from '../../common/code-show'
  import ARow from '@/row'
  import ACol from '@/col'
  import AntButton from '../../../components/button/index.js'
  import BackTop from '../../../components/backtop'

  const index = {
    components: {
      Container,
      CodeShow,
      ARow,
      ACol,
      AntButton,
      BackTop
    },
    methods: {
      item: function () {
        return this.$refs.dom
      },
      callBack: function () {
        alert('已经上来了')
      }
    }
  }
  export default index
</script>


<style scoped>
  .other{
  }
  *{
    margin: 0;
    padding:0;
  }
  li{
    list-style: none;
  }
  tbody{
    display: block;
    font-size: 20px;
  }
  tr{
    display: block;
    border-bottom: 1px solid;
  }
  tr td{
    display: inline-block;
    text-align: left;
    width: 20%;
  }

</style>
