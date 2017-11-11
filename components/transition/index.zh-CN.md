---
category: Components
subtitle: 动画
type: Transition
title: Transition
cols: 1
---

基于 Ant-Design 提供的动画效果和 Vue 原生 transition 组件封装的动画组件。

## 何时使用

- 元素展示或消失时使用。

## API

| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| type    | 动画类型 | string |  - |
| motion | 动画动作（部分可不填） | string |  - |

## 动画参数

| slide        | zoom        | move        | swing        |fade        |collapse        |
|--------------|-------------|--------------|--------------|--------------|--------------|
| up           | 空值        | up           | 空值        | 空值        |空值        |
| down         | big         | down           |           |           |           |      
| left         | big-fast    | left           |           |           |            |      
| right        | up          | right           |           |           |            |       
|             | down          |              |           |           |             |     
|             | left          |              |           |           |             |      
|             | right          |              |           |           |            |       
