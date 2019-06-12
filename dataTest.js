export default {
  pageIndex: {
    "data": {
      "data": [{
        "children": [{
          "children": [],
          "createBy": null,
          "createTime": null,
          "filemTime": null,
          "icon": "",
          "id": 7,
          "menuName": "菜单管理",
          "menuType": "C",
          "orderNum": 1,
          "parentId": 1,
          "perms": null,
          "remark": null,
          "updateBy": null,
          "url": "sysadmin/media/sysMenu/menuList",
          "visible": "0"
        }, {
          "children": [],
          "createBy": null,
          "createTime": null,
          "filemTime": null,
          "icon": "",
          "id": 15,
          "menuName": "角色管理",
          "menuType": "C",
          "orderNum": 1,
          "parentId": 1,
          "perms": null,
          "remark": null,
          "updateBy": null,
          "url": "sysadmin/media/sysMenu/roleList",
          "visible": "0"
        }, {
          "children": [],
          "createBy": null,
          "createTime": null,
          "filemTime": null,
          "icon": "#",
          "id": 6,
          "menuName": "用户管理",
          "menuType": "C",
          "orderNum": 2,
          "parentId": 1,
          "perms": null,
          "remark": null,
          "updateBy": null,
          "url": "media/sysUser/userList",
          "visible": "0"
        }],
        "createBy": null,
        "createTime": "2018-03-16 11:33:00",
        "filemTime": null,
        "icon": "el-icon-eleme",
        "id": 1,
        "menuName": "系统管理",
        "menuType": "M",
        "orderNum": 1,
        "parentId": 0,
        "perms": null,
        "remark": null,
        "updateBy": null,
        "url": "#",
        "visible": "0"
      }, {
        "children": [{
          "children": [],
          "createBy": null,
          "createTime": null,
          "filemTime": null,
          "icon": "#",
          "id": 63,
          "menuName": "用户管理",
          "menuType": "C",
          "orderNum": 2,
          "parentId": 1,
          "perms": null,
          "remark": null,
          "updateBy": null,
          "url": "media/sysUser/userList",
          "visible": "0"
        }],
        "createBy": null,
        "createTime": "2018-03-16 11:33:00",
        "filemTime": null,
        "icon": "el-icon-s-tools",
        "id": 2,
        "menuName": "监控系统",
        "menuType": "M",
        "orderNum": 2,
        "parentId": 0,
        "perms": null,
        "remark": null,
        "updateBy": null,
        "url": "#",
        "visible": "0"
      }, {
        "children": [{
          "children": [],
          "createBy": null,
          "createTime": null,
          "filemTime": null,
          "icon": "#",
          "id": 64,
          "menuName": "用户管理",
          "menuType": "C",
          "orderNum": 2,
          "parentId": 1,
          "perms": null,
          "remark": null,
          "updateBy": null,
          "url": "media/sysUser/userList",
          "visible": "0"
        }],
        "createBy": null,
        "createTime": "2018-03-16 11:33:00",
        "filemTime": null,
        "icon": "el-icon-user",
        "id": 28,
        "menuName": "系统监控",
        "menuType": "M",
        "orderNum": 2,
        "parentId": 0,
        "perms": null,
        "remark": null,
        "updateBy": null,
        "url": "#",
        "visible": "0"
      }],
      "errorCode": "1000",
      "errorMsg": "操作成功",
      "successFlg": 1
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "content-type": "application/json;charset=UTF-8"
    },
    "config": {
      "transformRequest": {},
      "transformResponse": {},
      "timeout": 20000,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "x-a-t": "e5f58643-cfef-44df-82d1-9b0bfecc4346"
      },
      "baseURL": "http://192.168.2.48:8081",
      "method": "get",
      "url": "http://192.168.2.48:8081/sysadmin/auth/pageIndex"
    },
    "request": {}
  },
  menuList: {
    "data": {
      "data": [
        {
          "children": [{
            "children": [
              {
                "children": [],
                "createBy": "",
                "createTime": null,
                "filemTime": null,
                "icon": "#",
                "id": 9,
                "menuName": "菜单新增",
                "menuType": "F",
                "orderNum": 2,
                "parentId": 7,
                "perms": "system:menu:add",
                "remark": "",
                "updateBy": "",
                "url": "/media/sysMenu/list",
                "visible": "0"
              }, {
                "children": [],
                "createBy": "",
                "createTime": null,
                "filemTime": null,
                "icon": "#",
                "id": 130,
                "menuName": "菜单删除",
                "menuType": "F",
                "orderNum": 3,
                "parentId": 7,
                "perms": "system:menu:delete",
                "remark": "",
                "updateBy": "",
                "url": "/media/sysMenu/delete",
                "visible": "0"
              }
            ],
            "createBy": "",
            "createTime": null,
            "filemTime": null,
            "icon": "",
            "id": 15,
            "menuName": "角色管理",
            "menuType": "C",
            "orderNum": 1,
            "parentId": 1,
            "perms": "system:role:view",
            "remark": "角色管理",
            "updateBy": "",
            "url": "/system/user",
            "visible": "0"
          }],
          "createBy": "admin",
          "createTime": "2018-03-16 11:33:00",
          "filemTime": "2019-05-31 13:47:07",
          "icon": "fa fa-gear",
          "id": 11,
          "menuName": "系统管理",
          "menuType": "M",
          "orderNum": 1,
          "parentId": 0,
          "perms": "",
          "remark": "2",
          "updateBy": "2018-03-16 11:33:00",
          "url": "#",
          "visible": "0"
        },
        {
          "children": [{
            "children": [
              {
                "children": [],
                "createBy": "",
                "createTime": null,
                "filemTime": null,
                "icon": "#",
                "id": 19,
                "menuName": "菜单新增",
                "menuType": "F",
                "orderNum": 2,
                "parentId": 7,
                "perms": "system:menu:add",
                "remark": "",
                "updateBy": "",
                "url": "/media/sysMenu/list",
                "visible": "0"
              }, {
                "children": [],
                "createBy": "",
                "createTime": null,
                "filemTime": null,
                "icon": "#",
                "id": 104,
                "menuName": "菜单删除",
                "menuType": "F",
                "orderNum": 3,
                "parentId": 7,
                "perms": "system:menu:delete",
                "remark": "",
                "updateBy": "",
                "url": "/media/sysMenu/delete",
                "visible": "0"
              }
            ],
            "createBy": "",
            "createTime": null,
            "filemTime": null,
            "icon": "",
            "id": 235,
            "menuName": "角色管理",
            "menuType": "C",
            "orderNum": 1,
            "parentId": 1,
            "perms": "system:role:view",
            "remark": "角色管理",
            "updateBy": "",
            "url": "/system/user",
            "visible": "0"
          }],
          "createBy": "admin",
          "createTime": "2018-03-16 11:33:00",
          "filemTime": "2019-05-31 13:47:07",
          "icon": "fa fa-gear",
          "id": 41,
          "menuName": "系统管理",
          "menuType": "M",
          "orderNum": 1,
          "parentId": 0,
          "perms": "",
          "remark": "2",
          "updateBy": "2018-03-16 11:33:00",
          "url": "#",
          "visible": "0"
        },
        {
          "children": [{
            "children": [
              {
                "children": [],
                "createBy": "",
                "createTime": null,
                "filemTime": null,
                "icon": "#",
                "id": 59,
                "menuName": "菜单新增",
                "menuType": "F",
                "orderNum": 2,
                "parentId": 7,
                "perms": "system:menu:add",
                "remark": "",
                "updateBy": "",
                "url": "/media/sysMenu/list",
                "visible": "0"
              }, {
                "children": [],
                "createBy": "",
                "createTime": null,
                "filemTime": null,
                "icon": "#",
                "id": 160,
                "menuName": "菜单删除",
                "menuType": "F",
                "orderNum": 3,
                "parentId": 7,
                "perms": "system:menu:delete",
                "remark": "",
                "updateBy": "",
                "url": "/media/sysMenu/delete",
                "visible": "0"
              }
            ],
            "createBy": "",
            "createTime": null,
            "filemTime": null,
            "icon": "",
            "id": 57,
            "menuName": "角色管理",
            "menuType": "C",
            "orderNum": 1,
            "parentId": 1,
            "perms": "system:role:view",
            "remark": "角色管理",
            "updateBy": "",
            "url": "/system/user",
            "visible": "0"
          }],
          "createBy": "admin",
          "createTime": "2018-03-16 11:33:00",
          "filemTime": "2019-05-31 13:47:07",
          "icon": "fa fa-gear",
          "id": 18,
          "menuName": "系统管理",
          "menuType": "M",
          "orderNum": 1,
          "parentId": 0,
          "perms": "",
          "remark": "2",
          "updateBy": "2018-03-16 11:33:00",
          "url": "#",
          "visible": "0"
        },
      ],
      "errorCode": "1000",
      "errorMsg": "操作成功",
      "successFlg": 1
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "content-type": "application/json;charset=UTF-8"
    },
    "config": {
      "transformRequest": {},
      "transformResponse": {},
      "timeout": 20000,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "x-a-t": "3d6888fb-5011-4fb5-83f6-c6e6b2f682fc"
      },
      "baseURL": "http://192.168.2.48:8081",
      "method": "get",
      "url": "http://192.168.2.48:8081/sysadmin/media/sysMenu/list"
    },
    "request": {}
  },
  roleList: {
    "data": {
      "data": {
        "btns": [], "list": {
          "current": 1,
          "pages": 2,
          "size": 8,
          "total": 10,
          "records": [{
            "createTime": "2019-05-31 15:27:00",
            "filemTime": null,
            "id": 1,
            "menuIds": null,
            "rdesc": "拥有所有权限",
            "rname": "超级管理员", 
            "rval": "superadmin"
          }, {
            "createTime": "2019-05-31 16:02:20",
            "filemTime": null,
            "id": 2,
            "menuIds": null,
            "rdesc": null,
            "rname": "普通管理员",
            "rval": "normal"
          }, {
            "createTime": null, "filemTime": null, "id": 3, "menuIds": null, "rdesc": null, "rname": "一般1", "rval": "nomal1"
          }, {
            "createTime": null, "filemTime": null, "id": 4, "menuIds": null, "rdesc": null, "rname": "一般2", "rval": "normal2"
          }, {
            "createTime": null, "filemTime": null, "id": 5, "menuIds": null, "rdesc": null, "rname": "一般3", "rval": "normal3"
          }, {
            "createTime": null, "filemTime": null, "id": 6, "menuIds": null, "rdesc": null, "rname": "一般4", "rval": "mormal4"
          }, {
            "createTime": null, "filemTime": null, "id": 7, "menuIds": null, "rdesc": "没有什么权限", "rname": "吵架管理员", "rval": "iamadmin"
          }, { 
            "createTime": null, "filemTime": null, "id": 10, "menuIds": null, "rdesc": "没有什么权限", "rname": "吵架管理员2", "rval": "asdaf" }]
        }
      }, "errorCode": "1000", "errorMsg": "操作成功", "successFlg": 1
    }, "status": 200, "statusText": "OK", 
    "headers": { "content-type": "application/json;charset=UTF-8" }, 
    "config": { "url": "http://192.168.2.48:8081/sysadmin/media/sysRole/roleList", 
    "method": "post", "data": "pageNum=1&pageSize=8", 
    "headers": { "Accept": "application/json, text/plain, */*", "Content-Type": "application/x-www-form-urlencoded", "x-a-t": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjAzMTM1MjQsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NjAzMDk5MjR9.QO6O7ilUlV1qZciF6QzA1Ojfl9LEcX9WOyYx26_K_Gc" }, "baseURL": "http://192.168.2.48:8081/", "transformRequest": [null], "transformResponse": [null], "timeout": 10000, "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1 }, 
    "request": {}
  },
  treeData: {
    data: [{
      label: '系统管理',
      id: 11,
      children: [{
        label: '用户管理',
        children: [{
          label: '删除用户'
        }],
        label: '角色管理',
        children: [{
          label: '删除用户'
        }],
        label: '菜单管理',
        children: [{
          label: '删除用户'
        }, {
          label: '切换用户'
        }, {
          label: '编辑用户'
        }, {
          label: '增加用户'
        },
        ]
      }]
    }, {
      label: '活动监控',
      children: [{
        label: '二级 2-1',
        children: [{
          label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
          label: '三级 2-2-1'
        }]
      }]
    }, {
      label: '库房管理',
      children: [{
        label: '二级 3-1',
        children: [{
          label: '三级 3-1-1'
        }]
      }, {
        label: '二级 3-2',
        children: [{
          label: '三级 3-2-1'
        }]
      }]
    }]
  },
  tableData: [{
    id: 1,
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    id: 2,
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    id: 3,
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    children: [{
      id: 31,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      children: [{
        id: 62,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',

      }]

    }, {
      id: 32,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }]
  }, {
    id: 4,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 5,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 6,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 7,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 8,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 96,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 95,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 94,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 93,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 92,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }, {
    id: 91,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }],
  tableData1: [{
    id: 1,
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    id: 2,
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    id: 3,
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    hasChildren: true
  }, {
    id: 4,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }],
  userList: {
    "data": {
      "current": 2,
      "pages": 4,
      "records": [
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 1,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 2,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 3,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 4,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 5,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 6,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 7,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "4"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 8,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "5"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 9,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "6"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 10,
          "nick": null,
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "7"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 11,
          "nick": "超级管理员",
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "admin"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 12,
          "nick": "超级管理员",
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "admin"
        },
        {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 13,
          "nick": "超级管理员",
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "admin"
        }
        , {
          "createTime": "2019-06-01 09:58:32",
          "delFlag": null,
          "filemTime": null,
          "id": 14,
          "nick": "超级管理员",
          "pwd": null,
          "roleIds": null,
          "salt": null,
          "status": 1,
          "uname": "admin"
        }
      ],
      "size": 5,
      "total": 20
    },
    "errorCode": "1000",
    "errorMsg": "操作成功",
    "successFlg": 1
  },
  roleList: {
    "data": "",
    "status": 200,
    "statusText": "OK",
    "headers": {
      "content-type": "application/json;charset=UTF-8"
    },
    "config": {
      "url": "http://192.168.2.48:8081/sysadmin/media/sysRole/roleList",
      "method": "post",
      "data": "{\"pageNum\":1,\"pageSize\":8,\"menuId\":15}",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
        "x-a-t": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjAxNDgxNTcsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NjAxNDQ1NTd9.GZJJtqsqF3YKTNSzXGmdTLW2hz8VviudbTzefILXfPY"
      },
      "baseURL": "http://192.168.2.48:8081/",
      "transformRequest": [null],
      "transformResponse": [null],
      "timeout": 10000,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1
    },
    "request": {}
  }
};
