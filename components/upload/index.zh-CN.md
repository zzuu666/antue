---
category: Components
subtitle: 上传
type: Data Entry
title: Upload
---

文件选择上传。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传的地址 | string | - |
| accept | 接受上传的文件类型 | string | - |
| multiple | 是否支持多选文件 | boolean | `false` |
| disabled | 是否禁用 | boolean | `false` |
| showUploadList | 是否展示文件列表 | boolean | `true` |
| listType | 上传列表的内建样式，支持 `text`、`picture` 和 `picture-card` | string | `text` |
| fileList | 已经上传的文件列表 | Array | - |
| beforeUpload | 上传文件之前的钩子 | Function | - |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| change | 上传文件改变时的回调 | {file, fileList} |
| remove | 文件被移除时的回调 | file |
