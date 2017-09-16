<template>
    <container>
      <h1>Button 按钮</h1>
      
按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


      <h2> 代码展示 </h2>
      
    <code-show
      title="按钮类型"
      desc="<p>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</p>
<blockquote>
<p><code>danger</code> 在 <code>antd@2.7</code> 后支持。</p>
</blockquote>
"
      code="<pre><code class="lang-html">&lt;template&gt;
  &lt;div&gt;
    &lt;ant-button type=&quot;primary&quot;&gt;你好&lt;/ant-button&gt;
    &lt;ant-button type=&quot;dashed&quot;&gt;你好&lt;/ant-button&gt;
    &lt;ant-button&gt;你好&lt;/ant-button&gt;
    &lt;ant-button type=&quot;danger&quot;&gt;你好&lt;/ant-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import AntButton from &#39;@/button&#39;
export default {
  components: {
    AntButton
  }
}
&lt;/script&gt;
</code></pre>
">
      <button-base></button-base>

    </code-show>
    
      ## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `dashed` `danger`(版本 2.7 中增加) 或者不设 | string | -
htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
icon | 设置按钮的图标类型 | string | -
shape | 设置按钮形状，可选值为 `circle` 或者不设 | string | -
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`
loading | 设置按钮载入状态 | boolean \| { delay: number } | `false`
onClick | `click` 事件的 handler | function | -
ghost | 幽灵属性，使按钮背景透明，版本 2.7 中增加 | boolean | false

`<Button>Hello world!</Button>` 最终会被渲染为 `<button>Hello world!</button>`，并且除了上表中的属性，其它属性都会直接传到 `<button></button>`。

    </container>
  </template>
  <script>
  import Container from '../common/container'
  import CodeShow from '../common/code-show'
  import buttonBase from './demo/base'

  export default {
    components: {
      buttonBase,

      Container,
      CodeShow
    }
  }
  </script>
  