<template>
<header id="header" class="clearfix">
  <a class="logo" href="..">
    <img width="60" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg">
    Vue Antd
  </a>
  <nav class="nav">
    <ul>
      <li :class="{current: isHomePage}">
        <a href=".." data-no-instant="" >首页</a>
      </li>
      <li :class="{current: isComponentsPage}">
        <a v-link="{path: '/components'}">Components</a>
      </li>
      <li>
        <a target="_blank" title="Please star me and fork me!" alt="star and fork" href="https://github.com/okoala/vue-antd">Github</a>
      </li>
    </ul>
  </nav>
</header>
<router-view class="view"></router-view>
</template>

<script>
export default {
  computed: {
    isHomePage () {
      if (this.$route.path === '/' || this.$route.path.indexOf('/?') === 0) return true

      return false
    },

    isComponentsPage () {
      if (this.$route.path.indexOf('/components') === 0) return true

      return false
    }
  }
}
</script>

<style lang="less">
html {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",SimSun,sans-serif;
  line-height: 1.5;
  color: #777;
  font-size: 14px;
  background: #fff;
  transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  position: relative;
}

a.logo {
  float: left;
  height: 46px;
  line-height: 46px;
  margin: 17px 48px 17px 40px;
  transition: margin 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s, width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s, height 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  text-transform: uppercase;
  font-size: 18px;
  font-family: "Hiragino Sans GB","Microsoft YaHei","微软雅黑",sans-serif;
  color: #6EB4E0;
}

.logo img {
  float: left;
  margin-top: -7px;
  -webkit-animation: rotateCircleBack 0.6s 1 ease-in-out;
  animation: rotateCircleBack 0.6s 1 ease-in-out;
}

.nav {
  margin: 0;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 25px;
  height: 40px;
  line-height: 40px;
  font-size: 0.875em;
}

.nav ul li {
  display: inline-block;
  margin: 0 0.6em;
  text-align: center;
}

.nav ul li a {
  color: #728AA3;
  padding-bottom: 3px
}

.nav ul li.current a {
  border-bottom: 3px solid #71b5de;
}

.nav ul li a:hover{
  border-bottom: 3px solid #71b5de;
}

.nav .bar {
  width: 20%;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background: #6EB4E0;
  display: none;
}

</style>
