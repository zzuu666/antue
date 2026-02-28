---
order: 1
title:
  zh-CN: 含有辅助性文字介绍
  en-US: Description
---

## zh-CN

含有辅助性文字介绍的警告提示。

## en-US

Additional description for alert message.

```` html
<template>
  <div>
    <ant-alert
      type="success"
      message="Success Text"
      description="Detailed description and advices about successful copywriting."
    />
    <ant-alert
      type="info"
      message="Info Text"
      description="Additional description and information about copywriting."
    />
    <ant-alert
      type="warning"
      message="Warning Text"
      description="This is a warning notice about copywriting."
    />
    <ant-alert
      type="error"
      message="Error Text"
      description="This is an error message about copywriting."
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
