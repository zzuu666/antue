---
category: Components
type: Data Entry
title: Form
---

Form is used to collect, validate, and submit data.

## When To Use

- When you need to create or edit an instance with form fields such as input, checkbox, select, etc.
- When you need to validate fields before submission.

## API

### Form

Property | Description | Type | Default
-----|-----|-----|------
model | Data of form component | object | -
rules | Validation rules of form | object | -
layout | Define form layout, can be `horizontal`, `vertical`, `inline` | string | `horizontal`
labelCol | The layout of label. Set `span` `offset` to define width and position | object | -
wrapperCol | The layout for input controls. Same as `labelCol` | object | -
hideRequiredMark | Hide required mark of all form items | boolean | false

### Form Methods

Method | Description
-----|-----
validate(callback) | Validate all fields, callback receives (valid, fields)
validateField(prop, callback) | Validate a single field by prop name
resetFields() | Reset all fields and clear validation
clearValidate() | Clear all validation messages

### Form.Item

Property | Description | Type | Default
-----|-----|-----|------
label | Label text | string | -
prop | Field name in model for validation | string | -
required | Whether the field is required | boolean | false
rules | Validation rules for this field | array | -
labelCol | Label layout, overrides Form labelCol | object | -
wrapperCol | Input wrapper layout, overrides Form wrapperCol | object | -
help | Help message, will override validation message | string | -
extra | Extra information below the input control | string | -
validateStatus | Validation status, can be `success`, `warning`, `error`, `validating` | string | -
hasFeedback | Show validation feedback icon | boolean | false
