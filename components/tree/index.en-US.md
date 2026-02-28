---
category: Components
type: Data Display
title: Tree
---

Tree control.

## When To Use

Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The Tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a Tree.

## API

### Tree

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| treeData | Tree data | Array<{title, key, children?, disabled?, selectable?}> | [] |
| checkable | Add a Checkbox before the treeNodes | boolean | `false` |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | `false` |
| checkedKeys | Specifies the keys of checked treeNodes | Array | [] |
| selectedKeys | Specifies the keys of selected treeNodes | Array | [] |
| expandedKeys | Specifies the keys of expanded treeNodes | Array | - |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | `true` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| select | Callback function for when the user clicks a treeNode | selectedKeys, {node, selected} |
| check | Callback function for when the user clicks a checkbox | checkedKeys, {node, checked} |
| expand | Callback function for when a treeNode is expanded or collapsed | expandedKeys, {node, expanded} |
