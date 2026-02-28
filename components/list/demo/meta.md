---
order: 2
title:
  zh-CN: Meta 信息
  en-US: Meta information
---

## zh-CN

使用 List.Item.Meta 展示头像、标题和描述信息。

## en-US

Use List.Item.Meta to display avatar, title and description.

```` html
<template>
  <div>
    <ant-list>
      <ant-list-item>
        <ant-list-item-meta
          avatar="user"
          title="Ant Design Title 1"
          description="Ant Design, a design language for background applications."
        />
      </ant-list-item>
      <ant-list-item>
        <ant-list-item-meta
          avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          title="Ant Design Title 2"
          description="Ant Design, a design language for background applications."
        />
      </ant-list-item>
    </ant-list>
  </div>
</template>

<script>
import AntList from '@/list'

const AntListItem = AntList.Item
const AntListItemMeta = AntListItem.Meta

export default {
  components: {
    AntList,
    AntListItem,
    AntListItemMeta
  }
}
</script>
````
