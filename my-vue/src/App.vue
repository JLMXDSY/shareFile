<template>
  <div id="app">
    <context-menu
      class="right-menu"
      :target="contextMenuTarget"
      :show.sync="contextMenuVisible"
    >
      <a href="javascript:;" @click="copyMsg">复制</a>
      <a href="javascript:;" @click="quoteMsg">引用</a>
      <a href="javascript:;" @click="deleteMsg">删除</a>
    </context-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      contextMenuTarget: document.body,
      contextMenuVisible: false
    };
  },
  methods: {
    copyMsg() {
      this.contextMenuVisible = false;
    },
    quoteMsg() {
      this.contextMenuVisible = false;
    },
    deleteMsg() {
      this.contextMenuVisible = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #333;
}
.right-menu {
  position: fixed;
  background: #fff;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 999;
  display: none;
}
.right-menu a {
  width: 75px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}

.right-menu {
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.1);
  border-radius: 1px;
}
a {
  text-decoration: none;
}
.right-menu a {
  padding: 2px;
}
.right-menu a:hover {
  background: #42b983;
}
</style>
