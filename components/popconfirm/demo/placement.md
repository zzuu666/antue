---
order: 2
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。

## en-US

There are 12 `placement` options available.

```` html
<template>
  <div class="popconfirm-show">
    <div class="popconfirm-show-top">
      <atu-popconfirm title="Are you sure delete this task?" placement="topLeft">
        <span class="span">TL</span>
      </atu-popconfirm>
      <atu-popconfirm title="Are you sure delete this task?">
        <span class="span">Top</span>
      </atu-popconfirm>
      <atu-popconfirm title="Are you sure delete this task?" placement="topRight">
        <span class="span">TR</span>
      </atu-popconfirm>
    </div>
    <div class="popconfirm-show-middle">
      <span style="display: inline-block; width: 60px;">
        <atu-popconfirm title="Are you sure delete this task?" placement="leftTop">
          <span class="span">LT</span>
        </atu-popconfirm>
        <atu-popconfirm title="Are you sure delete this task?" placement="left">
          <span class="span">Left</span>
        </atu-popconfirm>
        <atu-popconfirm title="Are you sure delete this task?" placement="leftBottom">
          <span class="span">LB</span>
        </atu-popconfirm>
      </span>
      <span style="display: inline-block; margin-left: 204px; width: 60px;">
        <atu-popconfirm title="Are you sure delete this task?" placement="rightTop">
          <span class="span">RT</span>
        </atu-popconfirm>
        <atu-popconfirm title="Are you sure delete this task?" placement="right">
          <span class="span">Right</span>
        </atu-popconfirm>
        <atu-popconfirm title="Are you sure delete this task?" placement="rightBottom">
          <span class="span">RB</span>
        </atu-popconfirm>
      </span>
    </div>
    <div class="popconfirm-show-bottom">
      <atu-popconfirm title="Are you sure delete this task?" placement="bottomLeft">
        <span class="span">BL</span>
      </atu-popconfirm>
      <atu-popconfirm title="Are you sure delete this task?" placement="bottom">
        <span class="span">Bottom</span>
      </atu-popconfirm>
      <atu-popconfirm title="Are you sure delete this task?" placement="bottomRight">
        <span class="span">BR</span>
      </atu-popconfirm>
    </div>
  </div>
</template>

<script>
import AtuPopconfirm from '@/popconfirm'

export default {
  components: {
    AtuPopconfirm
  }
}
</script>

<style lang="less" scoped>
.popconfirm-show {
  &-top,
  &-bottom {
    margin-left: 60px;
    .span {
      margin: 0 4px;
    }
  }
  &-middle {
    .span {
      margin: 4px 0;
    }
  }
  .span {
    display: inline-block;
    width: 60px;
    height: 32px;
    line-height: 32px;
    border-radius: 6px;
    background-color: #f5f5f5;
    color: #108ee9;
    text-align: center;
  }
}
</style>
````
