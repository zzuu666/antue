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
  <div class="popover-show">
    <div class="popover-show-top">
      <atu-popover title="prompt text" placement="topLeft">
        <span class="span">TL</span>
        <div slot="content">
          <p>content</p>
          <p>content</p>
        </div>
      </atu-popover>
      <atu-popover title="prompt text">
        <span class="span">Top</span>
        <div slot="content">
          <p>content</p>
          <p>content</p>
        </div>
      </atu-popover>
      <atu-popover title="prompt text" placement="topRight">
        <span class="span">TR</span>
        <div slot="content">
          <p>content</p>
          <p>content</p>
        </div>
      </atu-popover>
    </div>
    <div class="popover-show-middle">
      <span style="display: inline-block; width: 60px;">
        <atu-popover title="prompt text" placement="leftTop">
          <span class="span">LT</span>
          <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
        </atu-popover>
        <atu-popover title="prompt text" placement="left">
          <span class="span">Left</span>
          <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
        </atu-popover>
        <atu-popover title="prompt text" placement="leftBottom">
          <span class="span">LB</span>
          <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
        </atu-popover>
      </span>
      <span style="display: inline-block; margin-left: 204px; width: 60px;">
        <atu-popover title="prompt text" placement="rightTop">
          <span class="span">RT</span>
          <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
        </atu-popover>
        <atu-popover title="prompt text" placement="right">
          <span class="span">Right</span>
          <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
        </atu-popover>
        <atu-popover title="prompt text" placement="rightBottom">
          <span class="span">RB</span>
          <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
        </atu-popover>
      </span>
    </div>
    <div class="popover-show-bottom">
      <atu-popover title="prompt text" placement="bottomLeft">
        <span class="span">BL</span>
        <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
      </atu-popover>
      <atu-popover title="prompt text" placement="bottom">
        <span class="span">Bottom</span>
        <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
      </atu-popover>
      <atu-popover title="prompt text" placement="bottomRight">
        <span class="span">BR</span>
        <div slot="content">
            <p>content</p>
            <p>content</p>
          </div>
      </atu-popover>
    </div>
  </div>
</template>

<script>
import AtuPopover from '@/popover'

export default {
  components: {
    AtuPopover
  }
}
</script>

<style lang="less" scoped>
.popover-show {
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
