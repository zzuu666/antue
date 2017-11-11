---
order: 6
title:
  zh-CN: 按钮组合
  en-US: Button Group
---

## zh-CN

可以将多个 `Button` 放入 `Button.Group` 的容器中。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Buttons can be grouped by placing multiple `Button` components into a `Button.Group`.

The `size` can be set to `large`, `small` or left unset resulting in a default size.

```` html
<template>
  <div>
    <btn-group size="small">
      <atu-button>Right</atu-button>
      <atu-button>M</atu-button>
      <atu-button>M</atu-button>
      <atu-button>Left</atu-button>
    </btn-group>

    <btn-group>
      <atu-button>Right</atu-button>
      <atu-button>M</atu-button>
      <atu-button>M</atu-button>
      <atu-button>Left</atu-button>
    </btn-group>

    <btn-group size="large">
      <atu-button>Right</atu-button>
      <atu-button>M</atu-button>
      <atu-button>M</atu-button>
      <atu-button>Left</atu-button>
    </btn-group>

  </div>
</template>

<script>
import AtuButton from '@/button'

const BtnGroup = AtuButton.Group

export default {
  components: {
    AtuButton,
    BtnGroup
  }
}
</script>
````

