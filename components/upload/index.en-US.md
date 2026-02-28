---
category: Components
type: Data Entry
title: Upload
---

Upload file by selecting or dragging.

## When To Use

Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| action | Uploading URL | string | - |
| accept | File types that can be accepted | string | - |
| multiple | Whether to support selected multiple files | boolean | `false` |
| disabled | Whether to disable | boolean | `false` |
| showUploadList | Whether to show upload list | boolean | `true` |
| listType | Built-in stylistic type, options: `text`, `picture`, `picture-card` | string | `text` |
| fileList | List of files that have been uploaded | Array | - |
| beforeUpload | Hook function before uploading | Function | - |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| change | Called when uploading state is changed | {file, fileList} |
| remove | Called when a file is removed | file |
