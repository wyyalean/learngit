<template lang='pug'>
  .main
    el-container
      el-header(:style="{height:'50px'}") 
        headerBar
      el-container
        el-aside(width="auto" style="{padding-top:'11px'}") 
          navBar
        el-main(:style="{padding:'11px 11px',overflow:'hidden'}")
          masterPage
</template>

<script>
import side from "./navBar";
import header from "./headerBar";
import master from "./masterPage";
export default {
  name: "mainPage",
  data() {
    return {
      msg: "this is Home page"
    };
  },
  methods: {},
  components: {
    navBar: side,
    headerBar: header,
    masterPage: master
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  overflow: hidden;
  width: 100%;
}
</style>
