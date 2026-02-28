---
category: Components
subtitle: 折叠面板
type: Data Display
title: Collapse
---

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string[]/string | - |
| defaultActiveKey | 初始化选中面板的 key | string[] | `[]` |
| accordion | 手风琴模式 | boolean | `false` |
| bordered | 带边框风格 | boolean | `true` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 切换面板的回调 | activeKey |

### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 面板头内容 | string | - |
| panelKey | 对应 activeKey | string/number | - |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | boolean | `false` |
| showArrow | 是否展示箭头 | boolean | `true` |
