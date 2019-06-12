<template>
  <div>
    <div class="btn_area">
      <div class="searchBtn">
        <el-input v-model="search" size="mini" placeholder="输入菜單名"/>
      </div>
      <div class="add_btn">
        <el-button size="mini" type="primary" plain @click="handleCreate()">新增</el-button>
      </div>
      <div class="add_btn">
        <el-button size="mini" type="success" plain @click="toggleSelection()">一键还原</el-button>
      </div>
    </div>
    <div class="table_area">
      <el-table
        :data="menuData"
        max-height="700"
        ref="multipleTable"
        style="width: 100%;height:74vh;margin-bottom: 20px;"
        row-key="id"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="menuName" label="菜单名称" sortable ></el-table-column>
        <el-table-column prop="menuType" label="菜单类型" sortable ></el-table-column>
        <el-table-column prop="id" label="唯一KEY"></el-table-column>
        <el-table-column prop="url" label="URL地址"></el-table-column>
        <el-table-column prop="visible" label="是否隐藏"></el-table-column>
        <el-table-column align="center" label="操作" width="160">
          <template slot-scope="scope">
            <el-button size="mini" type="warning" @click="handleEdit(scope.$index, formatData)">编 辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, formatData)">删 除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <menu_form></menu_form>
    </div>
  </div>
</template>

<script>
import menu_form from "../form/menu_form";
import { eventBus } from "../common/eventBus";
import testData from "../../../dataTest";
import axios from "../../utils/axios";
import { Message, Loading } from "element-ui";

export default {
  name: "menuList",
  props: ["menuId"],
  components: {
    menu_form: menu_form
  },
  data() {
    return {
      showIcon: false,
      editMenu: true,
      addForm: true,
      currentPage: 4, //分页当前页码
      totalcount: 400,
      // menuData: testData.menuList.data.data,
      menuData: [],
      formatData: [],
      search: ""
    };
  },
  inject: ["getA"],
  computed: {
    ccc() {
      return this.getA();
    }
  },
  methods: {
    getMenuList() {
      this.$store
        .dispatch("axios_get_menu")
        .then(res => {
          console.log(
            "request:sysadmin/media/sysMenu/menuList success",
            JSON.stringify(res.data.data.list)
          );
          this.menuData = res.data.data.list;
          this.formatData = this.formatTreeData(this.menuData);
        })
        .catch(err => {
          console.log("request:auth/menuList err ", JSON.stringify(err));
        });
    },
    formatTreeData(d) {
      var nn = [];
      d.map(function(i) {
        nn.push(i);
        if (i.children.length > 0) {
          i.children.map(function(x) {
            nn.push(x);
            if (x.children.length > 0) {
              x.children.map(function(k) {
                nn.push(k);
              });
            }
          });
        }
      });
      return nn;
    },
    handleCreate() {
      eventBus.$emit("addMenu");
    },
    handleEdit(index, data) {
      eventBus.$emit("editMenu", data[index]);
    },
    handleDelete(index, data) {
      console.log(JSON.stringify(data[index].menuName));
      this.$store
        .dispatch("axios_del_menu", {
          menuId: data[index].id
        })
        .then(res => {
          if (res.data.errorCode == "1000") {
            Message({ message: res.data.errorMsg, type: "success" });
          } else {
            Message({ message: res.data.errorMsg, type: "warning" });
          }
          this.getMenuList();
        })
        .catch(err => {
          console.log("axios_del_menu err", JSON.stringify(res));
          Message({ message: "删除失败，服务器暂无响应！", type: "error" });
        });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getMenuList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table__body-wrapper .is-scrolling-none {
  overflow: hidden;
}
.btn_area {
  height: 6vh;
  padding: 15px 10px 10px 5px;
}
.searchBtn {
  margin: 0 0 0 10px;
  width: 20vh;
}
.add_btn {
  margin: 10px 0 0 10px;
  float: left;
}
.el-pagination {
  text-align: center;
}
.el-input--mini .el-input__inner {
  width: 100px;
}

.pading_area {
  margin-top: 25px;
}
</style>
