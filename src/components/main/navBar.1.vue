<template>
  <div class="aside-container">
    <div class="aside-container_body">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <!-- unique-opened :default-active="pagedefault" router> -->
        <!-- {{menuData.rq}} -->
          <el-submenu :key="d.id" :index="d.id+''" v-for="d in menuData.rq">
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
      </el-scrollbar>
    </div>
    <div class="btn_menu">
      <el-button v-if="isCollapse" @click="emitCollapse(isCollapse)" icon="el-icon-s-unfold"></el-button>
      <el-button v-else @click="emitCollapse(isCollapse)" icon="el-icon-s-fold"></el-button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../common/eventBus";
import axios from "../../utils/axios";

export default {
  name: "navBar",
  data() {
    return {
      menuData: {
        rq: [
          {
            children: [
              {
                children: [],
                createBy: null,
                createTime: null,
                filemTime: null,
                icon: "",
                id: 10,
                menuName: "角色管理",
                menuType: "C",
                orderNum: 1,
                parentId: 1,
                perms: null,
                remark: null,
                updateBy: null,
                url: "/system/user",
                visible: "1"
              },
              {
                children: [],
                createBy: null,
                createTime: null,
                filemTime: null,
                icon: "#",
                id: 11,
                menuName: "用户管理",
                menuType: "C",
                orderNum: 2,
                parentId: 1,
                perms: null,
                remark: null,
                updateBy: null,
                url: "/media/sysUser/list",
                visible: "0"
              }
            ],
            createBy: null,
            createTime: "2018-03-16 11:33:00",
            filemTime: null,
            icon: "el-icon-s-custom",
            id: 1,
            menuName: "系统管理",
            menuType: "M",
            orderNum: 1,
            parentId: 0,
            perms: null,
            remark: null,
            updateBy: null,
            url: "#",
            visible: "0"
          },
          {
            children: [],
            createBy: null,
            createTime: "2018-03-16 11:33:00",
            filemTime: null,
            icon: "el-icon-tickets",
            id: 2,
            menuName: "系统监控",
            menuType: "M",
            orderNum: 2,
            parentId: 0,
            perms: null,
            remark: null,
            updateBy: null,
            url: "#",
            visible: "0"
          },
          {
            children: [],
            createBy: null,
            createTime: "2018-03-16 11:33:00",
            filemTime: null,
            icon: "el-icon-tickets",
            id: 3,
            menuName: "角色管理",
            menuType: "M",
            orderNum: 2,
            parentId: 0,
            perms: null,
            remark: null,
            updateBy: null,
            url: "#",
            visible: "0"
          },
          {
            children: [],
            createBy: null,
            createTime: "2018-03-16 11:33:00",
            filemTime: null,
            icon: "el-icon-tickets",
            id: 4,
            menuName: "角色管理",
            menuType: "M",
            orderNum: 2,
            parentId: 0,
            perms: null,
            remark: null,
            updateBy: null,
            url: "#",
            visible: "0"
          }
        ],
        errorCode: "1000",
        errorMsg: "操作成功",
        successFlg: 1
      },
      isCollapse: false,
      pagedefault: ""
    };
  },
  computed: {
  },
  watch: {
    $route() {
      if (this.$route.meta.parentPath) {
        this.pagedefault = this.$route.meta.parentPath; // 实现路由切换
      }
    }
  },
  methods: {
    filterMenu(fdata) {
      return fdata
        .filter(items => items.visible == 0)
        .map(item => {
          item = Object.assign({}, item);
          console.log('item childen '+item.children);
          if (item.children) {
            item.children = this.filterMenu(item.children);
          }
          return item;
        });
    },
    initNav(){
      // axios
      //   .post("http://192.168.2.48:8080/media/sysMenu/list", {})
      //   .then(res => {
      //     this.menuData = res.data;
      //   });
      this.menuData=this.filterMenu(this.menuData.data);
      console.log('menu '+JSON.stringify(this.menuData));
    },
    emitCollapse(v) {
      this.isCollapse = v ? false : true;
    },
    addTab(menuItem) {
      eventBus.$emit("addTab", {
        title: menuItem.menuName,
        content: "user_table"
      });
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {}
  },
  created() {
    // this.initNav();
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
  height: 90vh;
}
.btn_menu {
  text-align: right;
  background-color: rgb(84, 92, 100);
}
.el-button {
  width: 100%;
}
</style>