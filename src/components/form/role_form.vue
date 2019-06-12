<template>
  <div>
    <el-dialog
      width="35vw"
      v-dialogDrag
      ref="dialog__wrapper"
      title="新增角色"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="角色名" :label-width="formLabelWidth">
          <el-input v-model="form.rname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="formLabelWidth">
          <el-input v-model="form.rval" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.rdesc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜单权限" :label-width="formLabelWidth">
          <el-input v-model="form.menuIds" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" :style="{'text-align':'center'}">
        <el-button type="primary" @click="onSubmit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { eventBus } from "../common/eventBus";
export default {
  name: "user_form",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        id:"",
        rname: "",
        rdesc: "",
        rval: "",
        menuIds: "",
      },
      formLabelWidth: "120px",
      action:'',
      data: [],
      value: [1, 4]
    };
  },
  methods: {
    addRole() {
      this.action = "add";
      this.dialogFormVisible = true;
    },
    editRole(v) {
      this.form.id = v.id;
      this.form.rname=v.rname;
      this.form.rdesc=v.rdesc;
      this.form.rval=v.rval;
      this.form.menuIds=v.menuIds;
      this.dialogFormVisible = true;
      this.action = "edit";
    },
    onSubmit(){
      if (this.action == "add") {
        this.$store
          .dispatch("axios_add_role", {
            rname: this.form.rname,
            rdesc: this.form.rdesc,
            rval: this.form.rval,
            menuIds: this.form.menuIds
          })
          .then(res => {
            console.log(res);
            this.$message.success('添加成功');
          })
          .catch(err => {
            console.log(err);
            this.$message.error('添加成功');
          });
      } else {
        this.$store
          .dispatch("axios_edit_role", {
            id:this.form.id,
            rname: this.form.rname,
            rdesc: this.form.rdesc,
            rval: this.form.rval,
            menuIds: this.form.menuIds
          })
          .then(res => {
            this.$message.success('修改成功');
            console.log(res);
          })
          .catch(err => {
             this.$message.error('修改失败');
            console.log(err);
          });
      }
      this.dialogFormVisible = false;
    }
  },
  mounted() {
    eventBus.$on("addRole", () => {
      this.addRole();
    });
    eventBus.$on("editRole", v => {
      this.editRole(v);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-input {
  padding-left: 10px;
  width: 80%;
}
</style>
