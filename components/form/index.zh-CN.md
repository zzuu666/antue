---
category: Components
type: Data Entry
title: Form
subtitle: 表单
---

具有数据收集、校验和提交功能的表单。

## 何时使用

- 用于创建或编辑实体时，需要数据采集和校验的场景。
- 需要对输入的数据类型进行校验时。

## API

### Form

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
model | 表单数据对象 | object | -
rules | 表单验证规则 | object | -
layout | 表单布局，可选 `horizontal`、`vertical`、`inline` | string | `horizontal`
labelCol | 标签布局，设置 `span` `offset` 来控制宽度和位置 | object | -
wrapperCol | 输入控件布局，用法同 `labelCol` | object | -
hideRequiredMark | 隐藏所有表单项的必选标记 | boolean | false

### Form 方法

方法 | 说明
-----|-----
validate(callback) | 对整个表单进行校验，callback 接收 (valid, fields)
validateField(prop, callback) | 对单个字段进行校验
resetFields() | 对整个表单进行重置，并移除校验结果
clearValidate() | 移除整个表单的校验结果

### Form.Item

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
label | 标签文本 | string | -
prop | 表单域 model 字段名 | string | -
required | 是否必填 | boolean | false
rules | 表单验证规则 | array | -
labelCol | 标签布局，覆盖 Form 的 labelCol | object | -
wrapperCol | 输入控件布局，覆盖 Form 的 wrapperCol | object | -
help | 提示信息，会覆盖校验信息 | string | -
extra | 额外的提示信息 | string | -
validateStatus | 校验状态，可选 `success`、`warning`、`error`、`validating` | string | -
hasFeedback | 是否展示校验图标 | boolean | false
