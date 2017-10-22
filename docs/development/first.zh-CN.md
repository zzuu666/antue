---
title: 开发流程
---

> 量力而行，做最符合自己能力的事情才会沉浸其中。

### 确认开发组件

**[20171017更新] 目前由于要处理组件之间通信问题，正在开发解决方案，暂时不接受伙伴们的PR。**

### Clone Ant-Design

Antue 为了保持样式与API与 Ant-Design 的 React 版本高度一致，需要复用其样式文件，并参考其源码内容。

[Antd Github](https://github.com/ant-design/ant-design)

```
git clone git@github.com:ant-design/ant-design.git --depth=10
```

### Fork & PR & Comment & Merge

参与贡献方式采用提交PR的方式。  

1. Fork [Antue](https://github.com/zzuu666/antue) 的主分支。
2. 创建一个分支，**命名规则** `dev-组件名-开发者`。
3. 提交 Pull Request。
4. 等待 Code Review 很快的。
5. Merge 恭喜你成为贡献者之一😉。

### 开发时

> 以下大部分内容是可以通过参考已有组件来得出结论的。

1. 在`components`下创建所要开发的以组件名命名的文件夹，组件名要与`Antd`中的`components`保持一致。
2. 进入你所创建的文件夹，按照`Antd`中的文件格式创建所对应的文件，可参考`button`组件。
3. 在`examples/routers/`中创建与组件名相同的文件夹用于开发，自行配置`index.js`和`App.vue`中的`menu`。在你的文件夹里你是自由的。
4. `npm run dev` 就可以进行开发了。

### Pull Request 之前

我们希望你充分的自测，至少做到：

1. 对照开发规范，比如：有无`name`，`<template>`中缩进是否规范，是否对`props`进行类型校验。
2. 对照 Ant Design 的文档，样式是否统一，功能是否齐全，`console`中有无报错。