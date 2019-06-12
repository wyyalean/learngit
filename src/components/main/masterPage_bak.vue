<template>
<div>
      <el-tabs v-model="editableTabsValue" type="card" closable  @tab-click="tabChange" @tab-remove="removeTab">
        <!-- <router-link to="/user-mgmt"> -->
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name">
          </el-tab-pane>
        <!-- </router-link> -->
      </el-tabs>
    

    <keep-alive>   
      <transition name="fade-transform" mode="out-in">
        <component :is="tabView"></component>  
      </transition>
    </keep-alive>

  </div>
</template>

<script>
import user_table from '../table/user_table'
import role_table from '../table/role_table'
import { eventBus } from '../common/eventBus';

  export default {
    name:'masterPage',
    data() {
      return {
        tabView:'',
        editableTabsValue: '0',
        editableTabs: [],
        tabIndex: 0
      }
    },
    methods: {
      tabChange(v){  
        this.tabView = v.name;  
      },
      addTab(menuItem) {
        if(menuItem.name==this.editableTabsValue){return}
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push(menuItem);
        this.editableTabsValue = newTabName;
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
              }
            }
          });
        }
      }
    },
    mounted(){
      eventBus.$on('addTab',(v)=>{
        this.addTab(v)
      })
    },
    components:{
      'user_table':user_table,
      'role_table':role_table
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
   
</style>
