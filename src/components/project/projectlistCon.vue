<template>
    <div class="content">
        <div class="con_top">
            <div class="con_top_1"></div>
            <div class="con_top_2">
                <span class="con_left_span">项目列表</span>
               <span class="con_right_span" @click="createProject">新增</span>
            </div>
        </div>
        <div class="con_bottom">
            <el-table  :cell-style="rowClass" :data="tableData"  style="width: 100%" border :header-cell-style="{background:'#f4f3f9',color:'#606266','text-align': 'center'}">
                <el-table-column  prop="name"  label="名字"></el-table-column>
                <el-table-column  prop="target"  label="目标"></el-table-column>
                <el-table-column  prop="type" label="项目类型"></el-table-column>
                <el-table-column  prop="iconUrl" label="图标地址"></el-table-column>
                <el-table-column  prop="client" label="客户"></el-table-column>
                <el-table-column  prop="ourDockingPeople" label="我方对接人"></el-table-column>
                <el-table-column  prop="ourGroupOfDockingPeople" label="我方对接人所属公司"  width="150"></el-table-column>
                <el-table-column  prop="progress" label="当前进度"></el-table-column>
                <el-table-column fixed="right"  label="操作"  width="250">
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
                    <el-form-item label="目标">
                        <el-input v-model="form.target"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="form.type" placeholder="请选择类型">
                        <el-option label="项目合作" :value="0"></el-option>
                        <el-option label="战略合作" :value="1"></el-option>
                        <el-option label="会议活动" :value="2"></el-option>
                        <el-option label="资质荣誉" :value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="图标地址">
                        <el-input v-model="form.iconUrl"></el-input>
                    </el-form-item>
                    <el-form-item label="客户">
                        <el-select v-model="form.client" placeholder="请选择客户">
                        <el-option label="客户1" :value="1"></el-option>
                        <el-option label="客户2" :value="2"></el-option>
                        <el-option label="客户3" :value="3"></el-option>
                        <el-option label="客户4" :value="4"></el-option>
                        <el-option label="客户5" :value="5"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="我方对接人">
                        <el-input v-model="form.ourDockingPeople"></el-input>
                    </el-form-item>
                    <el-form-item label="我方对接人所属公司">
                        <el-input v-model="form.ourGroupOfDockingPeople"></el-input>
                    </el-form-item>
                    <el-form-item label="当前进度">
                        <el-select v-model="form.progress" placeholder="请选择类型">
                        <el-option label="待接触" :value="0"></el-option>
                        <el-option label="洽谈" :value="1"></el-option>
                        <el-option label="报价" :value="2"></el-option>
                        <el-option label="投标" :value="3"></el-option>
                        <el-option label="签单" :value="1"></el-option>
                        <el-option label="暂停" :value="2"></el-option>
                        <el-option label="终止" :value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-form>
                    <div class="button_div">
                        <el-button type="primary" @click="onSubmit" v-if = 'projectID === ""'>新建</el-button>
                        <el-button type="primary" @click="updateonSubmit(projectID)" v-if = 'projectID !== ""'>新建</el-button>
                        <el-button @click="Cancel">取消</el-button>
                    </div>
            </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import {creatProject, getProject, updateProject} from '../constants/api'
export default {
  data () {
    return {
      dialogVisible: false,
      tableData: [],
      projectID: '',
      form: {
        name: '',
        target: '',
        type: '',
        iconUrl: '',
        client: '',
        ourDockingPeople: '',
        ourGroupOfDockingPeople: '',
        progress: ''
      }
    }
  },
  mounted () {
   this.getTableData()
  },
  methods: {
    getTableData() {
    this.$nextTick(() => {
      setTimeout(() => {
        getProject().then(res => {
        if (res.status === 200) {
            this.tableData = res.data
        } else {
          console.log(res.status)
        }
      })           
      }, 10)
    });
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    createProject() {
        this.dialogVisible = true
        this.projectID = ''
    },
    onSubmit () {
      this.$refs['form'].resetFields()
      const params = {}
      params.client = {}
      params.name = this.form.name
      params.target = this.form.target
      params.type = this.form.type
      params.iconUrl = this.form.iconUrl
      params.client.id = parseInt(this.form.client)
      params.ourDockingPeople = this.form.ourDockingPeople
      params.ourGroupOfDockingPeople = this.form.ourGroupOfDockingPeople
      params.progress = this.form.progress
      console.log(this.form.progress, 'this.form.progress')
      creatProject(params).then(res => {
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
      params.client = {}
      params.id = id
      params.name = this.form.name
      params.target = this.form.target
      params.type = this.form.type
      params.iconUrl = this.form.iconUrl
      params.client.id = parseInt(this.form.client)
      params.ourDockingPeople = this.form.ourDockingPeople
      params.ourGroupOfDockingPeople = this.form.ourGroupOfDockingPeople
      params.progress = this.form.progress
      console.log(this.form.progress, 'this.form.progress')
      updateProject(params).then(res => {
        console.log(res, 'res')
        if (res.status === 200) {
            this.dialogVisible = false
            this.getTableData()
        } else {
          console.log(res.status)
        }
      })
    },
    Cancel() {
        this.dialogVisible = false
        this.$refs['form'].resetFields()
    },
    handleClick (row) {},
    updateFun (row) {
        console.log(row, 'row')
        this.projectID = row.id
        this.dialogVisible = true
        this.form.name = row.name
        this.form.target = row.target
        this.form.type = row.type
        this.form.iconUrl = row.iconUrl
        this.form.ourDockingPeople = row.ourDockingPeople
        this.form.ourGroupOfDockingPeople = row.ourGroupOfDockingPeople
        this.form.progress = row.progress
        this.form.client = row.client.id
        this.getTableData()
    },
    rowClass () {
        return 'text-align: center;'
    }
  }
}
</script>
<style scoped>
.content{
    height:100%;
    width: 100%;
    background-color: #DCDCDC;
}
.con_top_1{
    width: 100%;
    height:50%;
}
.con_top_2{
    width: 100%;
    height:50%;
}
.con_left_span{
    width: 5%;
    height:70%;
    line-height: 1.8rem;
    display: inline-block;
    float: left;
    font-weight: 700;
}
.con_right_span{
    width: 5%;
    height:70%;
    display: inline-block;
    float: right;
    line-height: 1.8rem;
    background-color: blue;
    text-align: center;
    color: #fff;
    border-radius: 0.3rem;
    cursor: pointer;
}
.con_top{
    height: 10%;
    width:94%;
    margin: 0 auto;
}
.con_bottom{
    height: 95%;
    width:94%;
    margin: 0 auto;
}
.dialog_div{
    width: 90%;
    height:50%;
    margin: 0 auto;
}
.button_div{
    text-align: center;
}
.elButton_more{
    border-radius: 2px;
    color: #fff;
    background-color: #67c23a;
}
.elButton_update{
    border-radius: 2px;
    color: #fff;
    background-color:#e6a23c;
}
.elButton_delete{
    border-radius: 2px;
    color: #fff;
    background-color:#f56c6c;
}
/deep/ .el-button--small {
    padding: 5px 12px;
}
</style>