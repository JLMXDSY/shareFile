<template>
  <div class="app-wrapper">
    <context-menu :show="true">
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button
          type="primary"
          icon="el-icon-delete"
        ></el-button> </el-button-group
    ></context-menu>
  </div>
</template>

<script>
import ContextMenu from "./ContextMenu/index.vue";
export default {
  name: "Layout",
  components: { ContextMenu }
};
</script>

<style>
.app-wrapper {
  width: 100%;
  height: 100%;
  background: pink;
}
</style>
