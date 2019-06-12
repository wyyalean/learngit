<template>
  <div class="aside-container">
    <el-scrollbar
      wrap-class="scrollbar-wrapper"
      wrap-style="color:red;"
      view-style="font-weight: bold;"
      view-class="view-box"
      :native="false"
    >
      <div class="aside-container_body">
        <el-menu
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <!-- unique-opened :default-active="pagedefault" router> -->

          <el-submenu :key="d.id" :index="d.id+''" v-for="d in menuData">
            <template slot="title">
              <i :class="d.icon"></i>
              <span slot="title">{{d.menuName}}</span>
            </template>
            <el-menu-item
              :key="c.id"
              v-for="c in d.children"
              @click="addTab(c)"
              :index="c.id+''"
            >{{c.menuName}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-scrollbar>
    <div class="btn_menu">
      <el-button v-if="isCollapse" @click="emitCollapse(isCollapse)" icon="el-icon-s-unfold"></el-button>
      <el-button v-else @click="emitCollapse(isCollapse)" icon="el-icon-s-fold"></el-button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../common/eventBus";
import axios from "../../utils/axios";
import testData from "../../../dataTest";

export default {
  name: "navBar",
  data() {
    return {
      menuData: {},
      isCollapse: false,
      pagedefault: ""
    };
  },
  computed: {},
  watch: {
    $route() {
      if (this.$route.meta.parentPath) {
        this.pagedefault = this.$route.meta.parentPath; // 实现路由切换
      }
    }
  },
  methods: {
    initNav() {
      this.$store
        .dispatch("axios_load_navbar")
        .then(res => {
          console.log(
            "request:sysadmin/auth/pageIndex new success ",
            JSON.stringify(res.data.data)
          );
          this.menuData = this.filterMenu(res.data.data);
        })
        .catch(err => {
          console.log(
            "request:sysadmin/auth/pageIndex new  err  testData  ",
            JSON.stringify(err)
          );
          this.menuData = this.filterMenu(testData.pageIndex.data.data);
        });
    },
    emitCollapse(v) {
      this.isCollapse = v ? false : true;
    },
    addTab(menuItem) {
      
      let actionName = menuItem.url.split("/");
      eventBus.$emit("addTab", {
        title: menuItem.menuName,
        menuId: menuItem.id,
        content: actionName[actionName.length - 1]
      });
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    filterMenu(fdata) {
      return fdata
        .filter(items => items.visible == 0)
        .map(item => {
          item = Object.assign({}, item);
          if (item.children) {
            item.children = this.filterMenu(item.children);
          }
          return item;
        });
    }
  },
  created() {
    this.initNav();
  }
};
</script>
<style scoped>
.aside-container_body {
  height: 90vh;
  background-color: rgb(84, 92, 100);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.btn_menu {
  text-align: right;
  background-color: rgb(84, 92, 100);
}
.el-button {
  width: 100%;
}
</style>