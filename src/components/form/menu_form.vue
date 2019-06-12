<template>
  <div>
    <el-dialog
      width="70vw"
      v-dialogDrag
      ref="dialog__wrapper"
      title="新增菜单"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item
          label="上级菜单"
          :label-width="formLabelWidth"
          :style="{'text-align':'center','width':'60%'}"
        >
          <el-dropdown>
            <el-button type="primary">
              {{this.mtBtn}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:150px;padding:10px;margin:10px 0 0 40px">
              <el-tree
                default-expand-all
                :data="datas"
                :node-key="datas.id"
                @node-click="handleNodeClick"
              ></el-tree>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <el-input v-model="form.parentId" autocomplete="off"></el-input> -->
        </el-form-item>
        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio-group v-model="form.menuType" style="padding-left:30px">
            <el-radio :label="1">目录</el-radio>
            <el-radio :label="2">菜单</el-radio>
            <el-radio :label="3">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="form.menuName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="form.menuType==2" label="请求地址" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="form.menuType!==1" label="权限标识" :label-width="formLabelWidth">
          <el-input v-model="form.perms" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="form.menuType!==3" label="菜单排序" :label-width="formLabelWidth">
          <el-input v-model="form.orderNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="form.menuType==1" label="图标" :label-width="formLabelWidth">
          <!-- <el-transfer v-model="form.icon" :data="data"></el-transfer> -->
          <!-- <el-input v-model="form.icon" autocomplete="off"></el-input> -->
          <el-popover placement="right" width="350" trigger="hover">
            <el-button
              slot="reference"
              style="margin-left:20px"
              size="medium"
              :icon="form.icon"
              type="info"
              circle
            ></el-button>
            <transition name="fade-transform" mode="out-in">
              <icon_choice></icon_choice>
            </transition>
          </el-popover>
        </el-form-item>
        <el-form-item label="是否隐藏" :label-width="formLabelWidth">
          <el-checkbox v-model="form.visible">隐藏</el-checkbox>
        </el-form-item>
        <el-form-item label="菜单描述" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit()">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { eventBus } from "../common/eventBus";
import ds from "../../../dataTest";
import icon_choice from "../form/icon_choice";
export default {
  name: "menu_form",
  data() {
    return {
      iconView: false,
      dialogFormVisible: false,
      mtBtn: "根目录",
      action: "",
      menuId:'',
      form: {
        menuName: "",
        parentId: "",
        url: "",
        menuType: 1,
        orderNum: "",
        visible: false,
        perms: "",
        icon: "el-icon-circle-plus-outline",
        remark: ""
      },
      typeChange: {
        'M': 1,
        'C': 2,
        'F': 3,
        '1':'M',
        '2':'C',
        '3':'F'
      },
      formLabelWidth: "120px",
      value: [1, 4],
      datas: []
    };
  },
  methods: {
    parseJson() {
      this.$store
        .dispatch("axios_load_navbar")
        .then(res => {
          this.datas = JSON.parse(JSON.stringify(res.data.data).replaceAll("menuName", "label"));
        })
    },
    showIconPanel(arg) {
      this.iconView = arg;
    },
    addMenu(action) {
      this.form.menuName = "";
      this.form.parentId = "";
      this.form.orderNum = "";
      this.form.url = "";
      this.form.menuType = 1;
      this.form.visible = false;
      this.form.perms = "";
      this.form.icon = "el-icon-circle-plus-outline";
      this.form.remark = "";
      this.mtBtn = "根目录";
      this.dialogFormVisible = true;
    },
    editMenu(menu) {
      console.log("edit " + JSON.stringify(menu));
      this.menuId=menu.menuId;
      this.form.menuName = menu.menuName;
      this.form.parentId = menu.parentId;
      this.form.orderNum = menu.orderNum;
      this.form.url = menu.url;
      this.form.menuType = this.typeChange[menu.menuType];
      this.form.visible = this.visibleChange[menu.visible];
      this.form.perms = menu.perms;
      this.form.icon = menu.icon;
      this.form.remark = menu.remark;
      this.dialogFormVisible = true;
    },
    onSubmit() {
      console.log("action  " + this.action);
      if (this.action == "add") {
        let vi='';
        this.form.visible?vi='1':vi='0';
        this.$store
          .dispatch("axios_add_menu", {
            menuName: this.form.menuName,
            parentId: this.form.parentId,
            orderNum: this.form.orderNum,
            url: this.form.url,
            menuType: this.form.menuType,
            visible: vi,
            perms: this.form.perms,
            icon: this.form.icon,
            remark: this.form.remark
          })
          .then(res => {
            console.log(res);
            this.$message.success('添加成功');
          })
          .catch(err => {
            console.log(err);
            this.$message.error('添加失败');
          });
      } else {
        this.$store
          .dispatch("axios_edit_menu", {
            id: this.menuId,
            menuName: this.form.menuName,
            parentId: this.form.parentId,
            orderNum: this.form.orderNum,
            url: this.form.url,
            menuType: this.form.menuType,
            visible: this.form.visible,
            perms: this.form.perms,
            icon: this.form.icon,
            remark: this.form.remark
          })
          .then(res => {
            this.$message.success('修改成功');  
          })
          .catch(err => {
            this.$message.error('修改成功');  
          });
      }
      this.dialogFormVisible = false;
    },
    handleNodeClick(data, node, el) {
      this.form.parentId = data.id
      this.mtBtn = data.label
    }
  },
  mounted() {
    eventBus.$on("addMenu", v => {
      this.action = "add";
      this.addMenu(v);
    });
    eventBus.$on("editMenu", v => {
      this.action = "edit";
      this.editMenu(v);
    });
    eventBus.$on("selIcon", v => {
      this.form.icon = v;
    });
    this.parseJson();
  },
  components: {
    icon_choice: icon_choice
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.el-input {
  padding-left: 10px;
  width: 80%;
}
.el-checkbox {
  margin-left: 25px;
}

.dialog-footer {
  text-align: center;
}

.el-dropdown {
  vertical-align: top;
  width: 100px;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  width: 50x;
  font-size: 12px;
}
</style>
