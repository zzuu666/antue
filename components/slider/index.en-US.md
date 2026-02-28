---
category: Components
type: Data Entry
title: Slider
---

A Slider component for displaying current value and intervals in range.

## When To Use

To input a value in a range.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| value | The value of slider | number | `0` |
| min | The minimum value the slider can slide to | number | `0` |
| max | The maximum value the slider can slide to | number | `100` |
| step | The granularity the slider can step through values | number | `1` |
| disabled | If true, the slider will not be interactable | boolean | `false` |
| vertical | If true, the slider will be vertical | boolean | `false` |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Callback when value changes | value |
| afterChange | Callback after mouse up or click | value |
