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
    <el-table :data="userData" style="width: 100%" max-height="690">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" width="100" label="id"></el-table-column>
      <el-table-column prop="nick" label="用户名"></el-table-column>
      <el-table-column prop="uname" label="账号"></el-table-column>
      <el-table-column prop="roleIds" label="角色"></el-table-column>
      <el-table-column prop="status" label="账号状态"></el-table-column>
      <el-table-column prop="createTime" label="时间" sortable></el-table-column>
      <el-table-column align="center" width="160">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, userData)">编 辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, userData)">删 除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <user_form></user_form>
    <div class="pading_area">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "../../utils/axios";
import testData from "../../../dataTest";
import { Message, Loading } from "element-ui";
import { eventBus } from "../common/eventBus";
import user_form from "../form/user_form";

export default {
  name: "userList",
  props: ["menuId"],
  data() {
    return {
      currentPage: 1, //分页当前页码
      pageSize: 10,
      total: 1,
      userData: [],
      search: ""
    };
  },
  computed: {
    a() {
      return 1;
    }
  },
  watch: {},
  created() {
    this.getUserList(this.currentPage, this.pageSize);
  },
  methods: {
    getUserList(pageNum, pageSize) {
      const loadOption = {
        text: "加载中",
        fullscreen: true,
        lock: true,
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      };
      // let loadingInstance1 = Loading.service(loadOption);
      this.$store
        .dispatch("axios_get_user", {
          menuId: this.menuId,
          pageNum: pageNum,
          pageSize: pageSize
        })
        .then(res => {
          if (res != "undefined") {
            console.log(
              "axios_get_user success ",
              JSON.stringify(res.data.data.list)
            );
            this.userData = res.data.data.list.records;
            this.total = res.data.data.list.total;
            // this.userData = testData.userList.data.records;
            // this.total=testData.userList.data.total;
          }
          // loadingInstance1.close();
        })
        .catch(err => {
          console.log("axios_get_user err ", JSON.stringify(err));
          // this.userData = testData.userList.data.records;
          // this.total = testData.userList.data.total;
          // loadingInstance1.close();
        });
    },
    handleCreate() {
      eventBus.$emit("addUser");
    },
    handleEdit(index, rows) {
      eventBus.$emit("editUser", rows[index]);
    },
    handleDelete(index, rows) {
      this.$store
        .dispatch("axios_del_user", {
          userid: rows[index].id
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
    handleSizeChange(val) {
      this.getUserList(this.currentPage, val);
    },
    handleCurrentChange(val) {
      this.getUserList(val, this.pageSize);
    }
  },
  components: {
    user_form: user_form
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
  text-align: center;
}
.pading_area {
  margin-top: 25px;
}
</style>
