<div align="center">
  <img src="./icon.svg">
</div>

## Antd-Vue
这里是 [Ant-Design](https://ant.design/index-cn) 的 [Vue](https://vuejs.org/) **完全**实现，开发和服务于企业级后台产品。

## 开发指南
### clone代码库
``` bash
git clone antd-vue
cd antd-vue
npm install # yarn install
npm run dev
```

### 目录结构
``` bash
bulid # webpack打包配置相关
components
	|--  _util # 公用方法
	|--  style # 组件样式 复用ant-design一般情况下不做修改
	|--  button
		|-- dome # 用法相关文档
		|-- style # 组件样式 复用ant-design一般情况下不做修改
		|-- button.vue # button组件
		|-- index.js # 出口文件
	|-- ...
examples # 开发时预览界面与将来的文档页面
	|-- common # 公用组件
	|-- routers # 路由
		|-- button # button 组件开发页面
			|-- demo # 组件示例代码，由/components/button/demo里面的文件生成
		|-- ...
		|-- index.js # vue-router 配置
	|-- App.vue # 根组件, 在其 data.menu 中配置左侧目录
		 
```
## Doing List
组件名|负责人|进度
---|---|---
Button按钮|zzuu666|
Grid栅格| zzuu666
Menu导航菜单| zzuu666

## Todo List
+ Icon图标
+ Layout布局
+ Affix固钉
+ Breadcrumb面包屑
+ Dropdown下拉菜单
+ Pagination分页
+ Steps步骤条
+ AutoComplete自动完成
+ Cascader级联选择
+ Checkbox多选框
+ DatePicker日期选择框
+ Form表单
+ InputNumber数字输入框
+ Input输入框
+ Mention提及
+ Rate评分
+ Radio单选框
+ Select选择器
+ Slider滑动输入条
+ Switch开关
+ TreeSelect树选择
+ TimePicker时间选择框
+ Transfer穿梭框
+ Upload上传
+ Avatar头像
+ Badge徽标数
+ Calendar日历
+ Card卡片
+ Carousel走马灯
+ Collapse折叠面板
+ Popover气泡卡片
+ Tooltip文字提示
+ Table表格
+ Tabs标签页
+ Tag标签
+ Timeline时间轴
+ Tree树形控件
+ Alert警告提示
+ Modal对话框
+ Message全局提示
+ Notification通知提醒框
+ Progress进度条
+ Popconfirm气泡确认框
+ Spin加载中
+ Anchor锚点
+ BackTop回到顶部
+ LocaleProvider国际化

