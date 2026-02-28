---
category: Components
subtitle: 穿梭框
type: Data Entry
title: Transfer
---

双栏穿梭选择框。

## 何时使用

用直觉的方式在两栏中移动元素，完成选择行为。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源，其中的数据将会被渲染到左边一栏 | Array<{key, title, disabled?, description?}> | [] |
| targetKeys | 显示在右侧框数据的key集合 | Array | [] |
| titles | 标题集合，按顺序从左至右 | Array | `['源列表', '目标列表']` |
| showSearch | 是否显示搜索框 | boolean | `false` |
| disabled | 是否禁用 | boolean | `false` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 选项在两栏之间转移时的回调函数 | targetKeys, direction, moveKeys |
| selectChange | 选中项发生改变时的回调函数 | sourceSelectedKeys, targetSelectedKeys |
| search | 搜索框内容变化时的回调函数 | direction, value |
