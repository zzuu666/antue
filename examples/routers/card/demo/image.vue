<template>
  <div class="ant-card-base">
    <ant-card :title="title" :extra="extra" style="width: 240px" :bordered="bordered" :body-style="{padding: 0}">
      <a href="#" slot="extra">More</a>
      <div class="custom-image">
        <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </div>
      <div class="custom-card">
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

  .custom-image img {
    display: block;
  }
  .custom-card {
    padding: 10px 16px;
  }
  .custom-card p {
    color: #999;
  }
</style>
