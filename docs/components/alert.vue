<template lang="md">
# Alert

---

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 组件演示
<div class="code-boxes">
  <div class="code-boxes-col-2-1">
    <div class="code-box">
      <div class="code-box-demo">
        <v-alert :message="'成功提示的文案'" :type="'success'"></v-alert>
      </div>
    </div>
  </div>
  <div class="code-boxes-col-2-1">
    <div class="code-box">
      <div class="code-box-demo">
        <v-alert :message="'警告提示的文案'" :type="'warn'" :closable="true" :on-close="_close"></v-alert>
        <v-alert :message="'错误提示的文案'" :type="'error'" :description="'错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍'" :closable="true" :on-close="_close"></v-alert>
      </div>
    </div>
  </div>
  <div class="code-boxes-col-2-1">
    <div class="code-box">
      <div class="code-box-demo">
        <v-alert :message="'成功提示的文案'" :type="'success'" :description="'成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'"></v-alert>
        <v-alert :message="'消息提示的文案'" :type="'info'" :description="'消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍'"></v-alert>
        <v-alert :message="'警告提示的文案'" :type="'warn'" :description="'成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍'"></v-alert>
        <v-alert :message="'错误提示的文案'" :type="'error'" :description="'错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍'"></v-alert>
      </div>
    </div>
  </div>
  <div class="code-boxes-col-2-1">
    <div class="code-box">
      <div class="code-box-demo">
        <v-alert :message="'成功提示的文案'" :type="'success'"></v-alert>
        <v-alert :message="'消息提示的文案'" :type="'info'"></v-alert>
        <v-alert :message="'警告提示的文案'" :type="'warn'"></v-alert>
        <v-alert :message="'错误提示的文案'" :type="'error'"></v-alert>
      </div>
    </div>
  </div>
  <div class="code-boxes-col-2-1">
    <div class="code-box">
      <div class="code-box-demo">
        <v-alert :message="'消息提示的文案'" :type="'info'" :closable="true">
          <a slot="closeText" href="javascript:;">不再提醒</a>
        </v-alert>
      </div>
    </div>
  </div>
</div>

## API

| 参数        | 说明                                                      | 类型        | 默认值 |
|----------- |---------------------------------------------------------  | ---------- |-------|
| type       | 必选参数，指定警告提示的样式，有四种选择`success`、`info`、`warn`、`error`   | String     | 无    |
| closable   | 可选参数，默认不显示关闭按钮                                  | Boolean   | 无    || message    | 必选参数，警告提示内容                                       | String     | 无    |
| description | 可选参数，警告提示的辅助性文字介绍                            | String     | 无    |
| onClose     | 可选参数，关闭时触发的回调函数                                | Function   | 无    |
| slot::closeText  | 可选参数，自定义关闭按钮                                     | slot     | 无    |

</template>

<script>
import vAlert from '../../src/components/alert'

export default {
  data () {
    return {

    }
  },

  components: { vAlert },

  methods: {
    _close () {
      console.log('我要被关闭啦！')
    }
  }
}

</script>
