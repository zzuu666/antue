<template>
  <container
    title="Rate 评分"
    profile="评分组件。">
    <h2>何时使用</h2>
    <ul class="mt20">
      <li>对评价进行展示。</li>
      <li>对事物进行快速的评级操作。</li>
    </ul>
    <h2 class="mt20">代码演示</h2>
    <a-row :gutter="12" class="mt20">
      <a-col :span="12">
        <code-show title="基本" desc="最简单的用法。">
          <rate :onChange="onChange" :onHoverChange="onHoverChange" :value="value"></rate>
        </code-show>
      </a-col>
      <a-col :span="12">
        <code-show title="半星" desc="支持选中半星">
          <rate :defaultValue="halfValue" :allowHalf="allowHalf"></rate>
        </code-show>
      </a-col>
      <a-col :span="12" class="mt20">
        <code-show title="文案展现" desc="给评分组件加上文案展示。">
          <span>
            <rate :value="value" :onChange="onChange"></rate>
            <span class="ant-rate-text">{{value}} star</span>
          </span>
        </code-show>
      </a-col>
      <a-col :span="12" class="mt20">
        <code-show title="只读" desc="只读，无法进行鼠标交互。">
          <rate :defaultValue="defaultValue" :disabled="disabled"></rate>
        </code-show>
      </a-col>
      <a-col :span="12" class="mt20">
        <code-show title="其他字符" desc="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。">
          <div>
            <rate :defaultValue="defaultValue" :allowHalf="allowHalf">
              <template scope="character">
                <Icon type="heart"></Icon>
              </template>
            </rate>
          </div>
          <div>
            <rate :defaultValue="defaultValue" :allowHalf="allowHalf">
              <template scope="character">
                <span>A</span>
              </template>
            </rate>
          </div>
          <div>
            <rate :defaultValue="defaultValue" :allowHalf="allowHalf">
              <template scope="character">
                <span>好</span>
              </template>
            </rate>
          </div>
        </code-show>
      </a-col>
    </a-row>
  </container>
</template>

<script>
import Container from '../../common/container'
import CodeShow from '../../common/code-show'
import ARow from '@/row'
import Icon from '@/icon'
import ACol from '@/col'
import Rate from '@/rate'
export default {
  components: {
    Container,
    ARow,
    ACol,
    CodeShow,
    Rate,
    Icon
  },
  data () {
    return {
      defaultValue: 3,
      halfValue: 2.5,
      allowHalf: true,
      value: 1,
      count: 7,
      disabled: true
    }
  },
  methods: {
    onChange (v) {
      this.value = v
      console.log('click', v)
    },
    onHoverChange (v) {
      console.log('hover', v)
    }
  }
}
</script>

<style lang="less" scoped>
  .mt20 {
    margin-top: 20px;
  }
</style>

