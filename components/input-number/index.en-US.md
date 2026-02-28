---
category: Components
type: Data Entry
title: InputNumber
---

Enter a number within certain range with the mouse or keyboard.

## When To Use

When a numeric value needs to be provided.

## API

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| value | Current value | number | - |
| min | Minimum value | number | `-Infinity` |
| max | Maximum value | number | `Infinity` |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal | number | `1` |
| disabled | Disable the input | boolean | `false` |
| size | Size of input box, options: `large`, `default`, `small` | string | `default` |
| precision | Precision of input value | number | - |
