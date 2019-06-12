<template>
  <div class="header-container">
    <img class="header-logo" src="../../assets/images/TVJOY_logo.png">
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img
            :src="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'"
            class="user-avatar">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import axios from "../../utils/axios";
export default {
  name: "headerBar",
  state: {},
  data() {
    return {
      isCollapse: this.$store.state.isCollapse
    };
  },
  methods: {
    emitCollapse(v) {
      this.isCollapse = v ? false : true;
      this.$store.state.isCollapse = this.isCollapse;
    },
    async logout() {
      axios
      this.$router.push(`/`);
    }
  }
};
</script>
<style lang='scss' scoped >
a {
  text-decoration: none;
}
.header-logo {
  margin: -15px 0 0 25px;
}
.router-link-active {
  text-decoration: none;
}
.el-header {
  padding: 0;
  height: 50px;
}
.header-container {
  width: auto;
  height: 50px;
  font-size: 24px;
  color: #cccccc;
}

.el-dropdown-menu .el-popper .user-dropdown {
  top: 44px;
  left: 900px;
}
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;

  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>