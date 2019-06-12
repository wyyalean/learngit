<template>
  <div>
    <div class="btn_area">
      <div class="searchBtn">
        <el-input v-model="search" size="mini" placeholder="输入账号"/>
      </div>
      <div class="add_btn">
        <el-button size="mini" type="primary" plain @click="handleCreate()">新增</el-button>
      </div>
      <div class="add_btn">
        <el-button size="mini" type="success" plain @click="toggleSelection()">一键还原</el-button>
      </div>
    </div>

    <el-table :data="roleData" style="width: 100%" max-height="700">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="角色编号" prop="id" sortable></el-table-column>
      <el-table-column label="角色名称" prop="rname"></el-table-column>
      <el-table-column label="权限" prop="rval"></el-table-column>
      <el-table-column label="角色描述" prop="rdesc"></el-table-column>
      <el-table-column label="创建时间" prop="createTime"></el-table-column>
      <el-table-column align="center" label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, roleData)">编 辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,roleData)">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <role_form></role_form>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40,50]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import testData from "../../../dataTest";
import { eventBus } from "../common/eventBus";
import { Message } from "element-ui";
import role_form from "../form/role_form";

export default {
  name: "role_table",
  props: ["menuId"],
  data() {
    return {
      currentPage: 1, //分页当前页码
      pageSize: 10,
      total: 1,
      roleData: [],
      search: ""
    };
  },
  components: {
    role_form: role_form
  },
  created() {
    // this.$message.success('roleList roleList');
    this.getRoleList(this.pageSize, this.currentPage);
  },
  methods: {
    getRoleList(currentPage, pageSize) {
      console.log(currentPage, " axios_get_role ", pageSize);
      this.$store
        .dispatch("axios_get_role", {
          pageNum: pageSize,
          pageSize: currentPage
        })
        .then(res => {
          this.roleData = res.data.data.list.records;
          this.total = res.data.data.list.total;
        })
        .catch(err => {
          console.log("request:roleList  err ", JSON.stringify(err));
        });
    },
    handleCreate() {
      eventBus.$emit("addRole");
    },
    handleEdit(index, rows) {
      eventBus.$emit("editRole", rows[index]);
    },
    handleDelete(index, rows) {
      this.$store
        .dispatch("axios_del_role", {
          roleIds: rows[index].id
        })
        .then(res => {
          if (res.data.errorCode == "1000") {
            Message({ message: res.data.errorMsg, type: "success" });
            rows.splice(index, 1);
          } else {
            Message({ message: res.data.errorMsg, type: "warning" });
          }
        })
        .catch(err => {
          console.log("axios_del_menu err", JSON.stringify(res));
          Message({ message: "删除失败，服务器暂无响应！", type: "error" });
        });
    },
    handleSizeChange(val) {
      this.getRoleList(val, this.currentPage);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getRoleList(this.pageSize, val);
      console.log(`当前页: ${val}`);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.el-input--mini .el-input__inner {
  width: 100px;
}
.el-pagination {
  margin-top: 15px;
  text-align: center;
}
.pading_area {
  margin-top: 25px;
}
</style>
