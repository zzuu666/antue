---
category: Components
subtitle: 走马灯
type: Data Display
title: Carousel
---

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | `false` |
| dots | 是否显示面板指示点 | boolean | `true` |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |
| easing | 动画效果 | string | `linear` |
| effect | 动画效果函数，可选 `scrollx` `fade` | string | `scrollx` |
| vertical | 垂直显示 | boolean | `false` |
| autoplaySpeed | 自动切换的间隔 | number | `3000` |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| next() | 切换到下一面板 | - |
| prev() | 切换到上一面板 | - |
| goTo(slideNumber) | 切换到指定面板 | slideNumber |
