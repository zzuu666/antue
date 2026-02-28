---
category: Components
subtitle: 树形控件
type: Data Display
title: Tree
---

树形控件。

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 `树控件` 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## API

### Tree

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据 | Array<{title, key, children?, disabled?, selectable?}> | [] |
| checkable | 节点前添加 Checkbox 复选框 | boolean | `false` |
| defaultExpandAll | 默认展开所有树节点 | boolean | `false` |
| checkedKeys | 受控选中复选框的树节点 | Array | [] |
| selectedKeys | 受控设置选中的树节点 | Array | [] |
| expandedKeys | 受控展开指定的树节点 | Array | - |
| autoExpandParent | 是否自动展开父节点 | boolean | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击树节点触发 | selectedKeys, {node, selected} |
| check | 点击复选框触发 | checkedKeys, {node, checked} |
| expand | 展开/收起节点时触发 | expandedKeys, {node, expanded} |
