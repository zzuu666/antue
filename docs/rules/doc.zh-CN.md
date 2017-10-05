---
title: 文档规范
---

每个组件都应该有文档。官方网站由 markdown 文档生成，所以文档路径与明明必须符合规范。

### 组件整体文档

用来描述组件的作用、何时使用、API。

+ 路径：`components/button/`
+ 中文文档名：`index.zh-CN.md`
+ 英文文档名：`index.en-US.md`
+ 头部：写在文档头部，基本可以复用 Ant-Design 中的文档。

```
---
category: Components
type: General
title: Button
subtitle: 按钮
cols: 1             # 若指定为 1 则代码展示会一行展示一部分 不指定一行展示两部分
---
```

+ 内容：`### API` 必须要有，这是用来区分代码展示区域的分界线。

### 组件代码展示文档

用来展示组件如何使用。

+ 路径：`components/button/demo`
+ 文档名：`base.md` 参考 Ant-Design
+ 头部：写在文档头部，基本可以复用 Ant-Design 中的文档。

```
---
order: 0 # 展示顺序
title:
  zh-CN: 按钮类型
  en-US: Type
---
```

+ **必选内容**：中文内容需声明 `## zh-CN` 英文内容需声明 `## en-US`，这两个标题是必须要有的。代码展示区域声明如下。 注意 ```` 与 html 之间的**空格**。代码必须是完全的可以作为一个组件的代码。

``` html
```` html
<template>
  <div>
    <ant-button type="primary">Primary</ant-button>
    <ant-button>Default</ant-button>
    <ant-button type="dashed">Dashed</ant-button>
    <ant-button type="danger">Danger</ant-button>
  </div>
</template>

<script>
import AntButton from '@/button'
export default {
  components: {
    AntButton
  }
}
</script>
````
```

### 通用文档

用来说明一些操作性的文档。

+ 路径：`components/button/demo`
+ 中文文档名：`base.md` 参考 Ant-Design
+ 英文文档名：``
+ 头部：写在文档头部，目前只需指定title。

```
---
title: 组件规范
---
```
