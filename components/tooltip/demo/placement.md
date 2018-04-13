---
order: 2
title: 
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有 12 个方向。

## en-US 

The ToolTip has 12 placements choice.

```` html
<template>
  <div class="tooltip-show">
    <div class="tooltip-show-top">
      <atu-tooltip title="prompt text" placement="topLeft">
        <span class="span">TL</span>
      </atu-tooltip>
      <atu-tooltip title="prompt text">
        <span class="span">Top</span>
      </atu-tooltip>
      <atu-tooltip title="prompt text" placement="topRight">
        <span class="span">TR</span>
      </atu-tooltip>
    </div>
    <div class="tooltip-show-middle">
      <span style="display: inline-block; width: 60px;">
        <atu-tooltip title="prompt text" placement="leftTop">
          <span class="span">LT</span>
        </atu-tooltip>
        <atu-tooltip title="prompt text" placement="left">
          <span class="span">Left</span>
        </atu-tooltip>
        <atu-tooltip title="prompt text" placement="leftBottom">
          <span class="span">LB</span>
        </atu-tooltip>
      </span>
      <span style="display: inline-block; margin-left: 204px; width: 60px;">
        <atu-tooltip title="prompt text" placement="rightTop">
          <span class="span">RT</span>
        </atu-tooltip>
        <atu-tooltip title="prompt text" placement="right">
          <span class="span">Right</span>
        </atu-tooltip>
        <atu-tooltip title="prompt text" placement="rightBottom">
          <span class="span">RB</span>
        </atu-tooltip>
      </span>
    </div>
    <div class="tooltip-show-bottom">
      <atu-tooltip title="prompt text" placement="bottomLeft">
        <span class="span">BL</span>
      </atu-tooltip>
      <atu-tooltip title="prompt text" placement="bottom">
        <span class="span">Bottom</span>
      </atu-tooltip>
      <atu-tooltip title="prompt text" placement="bottomRight">
        <span class="span">BR</span>
      </atu-tooltip>
    </div>
  </div>
</template>

<script>
import AtuTooltip from '@/tooltip'

export default {
  components: {
    AtuTooltip
  }
}
</script>

<style lang="less" scoped>
.tooltip-show {
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
