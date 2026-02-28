---
order: 2
title:
  zh-CN: 图标
  en-US: Icon
---

## zh-CN

可口的图标让信息类型更加醒目。

## en-US

Decent icon make information more clear and friendly.

```` html
<template>
  <div>
    <ant-alert type="success" message="Success Tips" showIcon />
    <ant-alert type="info" message="Informational Notes" showIcon />
    <ant-alert type="warning" message="Warning" showIcon />
    <ant-alert type="error" message="Error" showIcon />
    <ant-alert
      type="success"
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      showIcon
    />
    <ant-alert
      type="info"
      message="Informational Notes"
      description="Additional description and information about copywriting."
      showIcon
    />
    <ant-alert
      type="warning"
      message="Warning"
      description="This is a warning notice about copywriting."
      showIcon
    />
    <ant-alert
      type="error"
      message="Error"
      description="This is an error message about copywriting."
      showIcon
    />
  </div>
</template>

<script>
import AntAlert from '@/alert'

export default {
  components: {
    AntAlert
  }
}
</script>
````
