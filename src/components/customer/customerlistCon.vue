<template>
  <div class="content">
    <div class="con_top">
      <div class="con_top_1"></div>
      <div class="con_top_2">
        <span class="con_left_span">客户列表</span>
        <span class="con_right_span" @click="createCustomer">新增</span>
      </div>
    </div>
    <div class="con_bottom">
      <el-table :cell-style="rowClass" :data="tableData" style="width: 100%" border
                :header-cell-style="{background:'#f4f3f9',color:'#606266','text-align': 'center'}">
        <el-table-column prop="name" label="名字"></el-table-column>
        <el-table-column prop="groupsName" label="所属集团"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="city" label="所在城市"></el-table-column>
        <el-table-column prop="area" label="具体区域"></el-table-column>
        <el-table-column prop="departmentLevel1" label="一级部门"></el-table-column>
        <el-table-column prop="departmentLevel2" label="二级部门"></el-table-column>
        <el-table-column prop="position" label="职位"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="nativePlace" label="籍贯"></el-table-column>
        <el-table-column prop="address" label="家庭住址"></el-table-column>
        <el-table-column prop="childrenSituation" label="子女情况"></el-table-column>
        <el-table-column prop="maritalStatus" label="婚姻状况"></el-table-column>
        <el-table-column prop="workExperience" label="学历"></el-table-column>
        <el-table-column prop="relationship" label="客户关系"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="mail" label="邮箱"></el-table-column>
        <el-table-column prop="clientDockingPeople" label="对接人"></el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" class="elButton_more">更多</el-button>
            <el-button type="text" size="small" @click="updateFun(scope.row)" class="elButton_update">修改</el-button>
            <el-button type="text" size="small" class="elButton_delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="新建"
        :visible.sync="dialogVisible"
        width="50%">
        <div class="dialog_div">
          <el-form ref="form" :model="form" class="demo-form-inline" :inline="true">
            <el-form-item label="名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="所属集团">
              <el-input v-model="form.groupsName"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="form.type" placeholder="请选择类型">
                <el-option label="主机厂" :value="0"></el-option>
                <el-option label="零部件厂" :value="1"></el-option>
                <el-option label="集成商" :value="2"></el-option>
                <el-option label="设备商" :value="3"></el-option>
                <el-option label="平台组织" :value="0"></el-option>
                <el-option label="科研院所" :value="1"></el-option>
                <el-option label="高效" :value="2"></el-option>
                <el-option label="其他" :value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在城市">
              <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="具体区域">
              <el-input v-model="form.area"></el-input>
            </el-form-item>
            <el-form-item label="一级部门">
              <el-input v-model="form.departmentLevel1"></el-input>
            </el-form-item>
            <el-form-item label="二级部门">
              <el-input v-model="form.departmentLevel2"></el-input>
            </el-form-item>
            <el-form-item label="职位">
              <el-input v-model="form.position"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.gender" placeholder="请选择性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="籍贯">
              <el-input v-model="form.nativePlace"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="子女情况">
              <el-input v-model="form.childrenSituation"></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况">
              <el-input v-model="form.maritalStatus"></el-input>
            </el-form-item>
            <el-form-item label="学历">
              <el-input v-model="form.workExperience"></el-input>
            </el-form-item>
            <el-form-item label="客户关系圈">
              <el-input v-model="form.relationship"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.mail"></el-input>
            </el-form-item>
            <el-form-item label="对接人">
              <el-input v-model="form.clientDockingPeople"></el-input>
            </el-form-item>
          </el-form>
          <div class="button_div">
            <el-button type="primary" @click="onSubmit" v-if='projectID === ""'>新建</el-button>
            <el-button type="primary" @click="updateonSubmit(projectID)" v-if='projectID !== ""'>新建</el-button>
            <el-button @click="Cancel">取消</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import {creatClients, getClients} from '../constants/api'

export default {
  data () {
    return {
      dialogVisible: false,
      tableData: [],
      projectID: '',
      form: {
        name: '',
        groupsName: '',
        type: '',
        city: '',
        area: '',
        departmentLevel1: '',
        departmentLevel2: '',
        position: '',
        age: '',
        gender: '',
        nativePlace: '',
        address: '',
        childrenSituation: '',
        maritalStatus: '',
        workExperience: '',
        relationship: '',
        phone: '',
        mail: '',
        clientDockingPeople: ''
      }
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    getTableData () {
      this.$nextTick(() => {
        setTimeout(() => {
          getClients().then(res => {
            if (res.status === 200) {
              this.tableData = res.data
            } else {
              console.log(res.status)
            }
          })
        }, 10)
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },
    createCustomer () {
      this.dialogVisible = true
    },
    onSubmit () {
      this.$refs['form'].resetFields()
      const params = {}
      params.clientDockingPeople = []
      params.name = this.form.name
      params.groupsName = this.form.groupsName
      params.type = this.form.type
      params.city = this.form.city
      params.area = this.form.area
      params.departmentLevel1 = this.form.departmentLevel1
      params.departmentLevel2 = this.form.departmentLevel2
      params.position = this.form.position
      params.age = this.form.age
      params.gender = this.form.gender
      params.nativePlace = this.form.nativePlace
      params.address = this.form.address
      params.childrenSituation = this.form.childrenSituation
      params.maritalStatus = this.form.maritalStatus
      params.workExperience = this.form.workExperience
      params.relationship = this.form.relationship
      params.phone = this.form.phone
      params.mail = this.form.mail
      params.clientDockingPeople.push({
        'name': this.form.clientDockingPeople
      })
      console.log(this.form.progress, 'this.form.progress')
      creatClients(params).then(res => {
        console.log(res, 'res')
        if (res.status === 200) {
          this.dialogVisible = false
          this.getTableData()
        } else {
          console.log(res.status)
        }
      })
    },
    updateonSubmit (id) {
      const params = {}
      params.clientDockingPeople = []
      params.id = id
      params.name = this.form.name
      params.groupsName = this.form.groupsName
      params.type = this.form.type
      params.city = this.form.city
      params.area = this.form.area
      params.departmentLevel1 = this.form.departmentLevel1
      params.departmentLevel2 = this.form.departmentLevel2
      params.position = this.form.position
      params.age = this.form.age
      params.gender = this.form.gender
      params.nativePlace = this.form.nativePlace
      params.address = this.form.address
      params.childrenSituation = this.form.childrenSituation
      params.maritalStatus = this.form.maritalStatus
      params.workExperience = this.form.workExperience
      params.relationship = this.form.relationship
      params.phone = this.form.phone
      params.mail = this.form.mail
      params.clientDockingPeople.push({
        'name': this.form.clientDockingPeople
      })
      creatClients(params).then(res => {
        console.log(res, 'res')
        if (res.status === 200) {
          this.dialogVisible = false
          this.getTableData()
        } else {
          console.log(res.status)
        }
      })
    },
    Cancel () {
      this.dialogVisible = false
      this.$refs['form'].resetFields()
    },
    handleClick (row) {
    },
    updateFun (row) {
      console.log(row, 'row')
      this.projectID = row.id
      this.dialogVisible = true
      this.form.name = row.name
      this.form.type = row.type
      this.form.groupsName = row.groupsName
      this.form.type = row.type
      this.form.city = row.city
      this.form.area = row.area
      this.form.departmentLevel1 = row.departmentLevel1
      this.form.departmentLevel2 = row.departmentLevel2
      this.form.position = row.position
      this.form.age = row.age
      this.form.gender = row.gender
      this.form.nativePlace = row.nativePlace
      this.form.address = row.address
      this.form.childrenSituation = row.childrenSituation
      this.form.maritalStatus = row.maritalStatus
      this.form.workExperience = row.workExperience
      this.form.relationship = row.relationship
      this.form.phone = row.phone
      this.form.mail = row.mail
      this.form.clientDockingPeople = row.clientDockingPeople[0].name
      this.getTableData()
    },
    rowClass () {
      return 'text-align: center;'
    }
  }
}
</script>
<style scoped>
.content {
  height: 100%;
  width: 100%;
  background-color: #DCDCDC;
}

.con_top_1 {
  width: 100%;
  height: 50%;
}

.con_top_2 {
  width: 100%;
  height: 50%;
}

.con_left_span {
  width: 5%;
  height: 70%;
  line-height: 1.8rem;
  display: inline-block;
  float: left;
  font-weight: 700;
}

.con_right_span {
  width: 5%;
  height: 70%;
  display: inline-block;
  float: right;
  line-height: 1.8rem;
  background-color: blue;
  text-align: center;
  color: #fff;
  border-radius: 0.3rem;
  cursor: pointer;
}

.con_top {
  height: 10%;
  width: 94%;
  margin: 0 auto;
}

.con_bottom {
  height: 95%;
  width: 94%;
  margin: 0 auto;
}

.dialog_div {
  width: 90%;
  height: 50%;
  margin: 0 auto;
}

.button_div {
  text-align: center;
}

.elButton_more {
  border-radius: 2px;
  color: #fff;
  background-color: #67c23a;
}

.elButton_update {
  border-radius: 2px;
  color: #fff;
  background-color: #e6a23c;
}

.elButton_delete {
  border-radius: 2px;
  color: #fff;
  background-color: #f56c6c;
}

/deep/ .el-button--small {
  padding: 5px 12px;
}
</style>