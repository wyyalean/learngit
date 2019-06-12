<template>
  <div class="master_tabs">
    <div class="tab_page">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-click="tabChange"
        @tab-remove="removeTab"
      >
        <el-tab-pane
          :key="index"
          v-for="(item, index) in editableTabs"
          :label="item.title"
          :name="item.name"
          :contented="item.content"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <keep-alive>
      <transition name="fade-transform" mode="out-in">
        <component :is="tabView" :menuId="menuId"></component>
      </transition>
    </keep-alive>
    
    <!-- <div>
      <ul class='selectImg'>
        <li v-for="img in imgData">
            <img :id="img.id" :src="img.imgUrl" @click="showAttr(img)"/>
        </li>
      </ul>
    </div>
    <img :src="curimg"/> -->
  </div>
</template>

<script>
import menuList from "../table/menuList";
import roleList from "../table/roleList";
import userList from "../table/userList";
import { eventBus } from "../common/eventBus";
import axios from "../../store"

export default {
  name: "masterPage",
  data() {
    return {
      curimg:'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_efde696.png',
      imgData:[{
        imgId:'2',
        imgUrl:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/c/ccwu53qr0ww08tw_y.jpg'
      },{
        imgId:'3',
        imgUrl:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/c/chtf29h5g2jlsfl_y.jpg'
        },{
        imgId:'4',
        imgUrl:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/z/za4cs38zgy4qcbv_y.jpg'
        },{
        imgId:'5',
        imgUrl:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/7/75ijb6qovzrhtp7_y.jpg'
         },{
        imgId:'6',
        imgUrl:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/1/1jnzhlclsozgc0i_y.jpg'
      }],
      tabView: "",
      editableTabsValue: "0",
      editableTabs: [],
      tabIndex: 0,
      already : false,
      menuId:'menuId',
      testD:'1'
    };
  },
  provide(){
    return {
      setA: (value) => this.testD = value,
      getA: () => { return this.testD }
    }
  },
  methods: {
    showAttr(item){
      console.log(item.imgId);
      this.curimg=item.imgUrl
    },
    tabChange(tab) {
      this.tabView=tab.$attrs.contented
    },
    addTab(menuItem) {
      console.log('editableTabs ',JSON.stringify(this.editableTabs));
      console.log("add menuTab " + JSON.stringify(menuItem));
      this.editableTabs.forEach(item => {
        if (item.menuId == menuItem.menuId){
          this.already = true;
        }
      });

      if (!this.already) {
        let newTabName = ++this.tabIndex + "";
        menuItem.name = newTabName;
        this.editableTabs.push(menuItem);
        this.editableTabsValue = menuItem.menuId;
        this.tabView = menuItem.content;
        this.menuId=menuItem.menuId;
      }else{
        // this.tabView =menuItem.content;
        this.already = false;
      }
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
              this.tabView = nextTab.content;
            } else {
              this.tabView = "";
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
  mounted() {
    eventBus.$on("addTab", v => {
      this.addTab(v);
    });
  },
  components: {
    menuList: menuList,
    roleList: roleList,
    userList: userList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.selectImg{
  width: 100%;height: 400px;
  border:1px solid red;
  white-space:nowrap;
}
ul li{
  list-style-type:none;float: left; margin-left: 10px;margin-top:  10px
}
.master_tabs {
  width: 100%;
  max-height: 88vh;
}

.tab_page {
  width: auto;
  height: 5vh;
}
</style>
