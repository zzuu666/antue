<template>
    <div>
      <h1>Button 按钮</h1>
      <p>按钮用于开始一个即时操作。</p>
<h2 id="-">何时使用</h2>
<p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

      <pre><code class="lang-html">&lt;template&gt;
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

      <h2 id="api">API</h2>
<p>通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：<code>type</code> -&gt; <code>shape</code> -&gt; <code>size</code> -&gt; <code>loading</code> -&gt; <code>disabled</code></p>
<p>按钮的属性说明如下：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>设置按钮类型，可选值为 <code>primary</code> <code>dashed</code> <code>danger</code>(版本 2.7 中增加) 或者不设</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>htmlType</td>
<td>设置 <code>button</code> 原生的 <code>type</code> 值，可选值请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTML 标准</a></td>
<td>string</td>
<td><code>button</code></td>
</tr>
<tr>
<td>icon</td>
<td>设置按钮的图标类型</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>shape</td>
<td>设置按钮形状，可选值为 <code>circle</code> 或者不设</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设</td>
<td>string</td>
<td><code>default</code></td>
</tr>
<tr>
<td>loading</td>
<td>设置按钮载入状态</td>
<td>boolean \</td>
<td>{ delay: number }</td>
<td><code>false</code></td>
</tr>
<tr>
<td>onClick</td>
<td><code>click</code> 事件的 handler</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>ghost</td>
<td>幽灵属性，使按钮背景透明，版本 2.7 中增加</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<p><code>&lt;Button&gt;Hello world!&lt;/Button&gt;</code> 最终会被渲染为 <code>&lt;button&gt;Hello world!&lt;/button&gt;</code>，并且除了上表中的属性，其它属性都会直接传到 <code>&lt;button&gt;&lt;/button&gt;</code>。</p>
<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
    </div>
  </template>
  <script>
  export default {

  }
  </script>
  