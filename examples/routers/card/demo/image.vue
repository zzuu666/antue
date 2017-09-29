<template>
  <div :class="[
    'ant-card-base',
    !bordered ? `ant-bgc` : '']">
    <ant-card :title="title" :extra="extra" style="width: 300px" :bordered="bordered">
      <a href="#" slot="extra">More</a>
      <div className="custom-image">
        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </div>
      <div className="custom-card">
        <h3>Europe Street beat</h3>
        <p>www.instagram.com</p>
      </div>
    </ant-card>
  </div>
</template>

<script>
  import AntCard from '@/card'
  export default {
    components: {
      AntCard
    },
    props: {
      bordered: {
        type: Boolean,
        default: true
      },
      title: String,
      extra: String
    }
  }
</script>

<style lang="less" scoped>
  .ant-card-base {
    padding: 10px 30px;
    text-align: left;
  }

  .ant-bgc {
    background-color: rgba(236,236,236,1);
  }
</style>
