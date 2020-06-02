<template>
  <div class="page-box">
    <!-- 表格 -->
    <div class="table">
      <!-- 操作按钮 -->
      <div class="table-btn">
        <el-button type="text" @click="del">
          <i class="el-icon-close"></i>
          <span>删除</span>
        </el-button>
        <el-button type="text" @click="add">
          <i class="el-icon-plus"></i>
          <span>添加</span>
        </el-button>
      </div>
      <el-table
        :data="info.list"
        style="width: 100%"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column width="70">
          <template slot-scope="scope">
            <img :src="scope.row.http+scope.row.avatar" alt class="avatar" v-if="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>

        <el-table-column label="发布时间" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.createTime|allTimeFilter}}</template>
        </el-table-column>

        <el-table-column label="类型" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.type}}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="50" class="test">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="change(scope.row)" type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <MyPagination
        :total="info.count"
        :currentPage.sync="currentPage"
        @current-change="handleCurrentChange"
      />
    </div>

    <DelDialog
      :visible.sync="showDialog"
      :req="postRemoveReq"
      :ids="multipleSelection"
      v-if="showDialog&&!currentCom"
      @before-close="handleClose"
    />
  </div>
</template>

<script>
import { postPageReq, postRemoveReq } from '@api'
import pageMixin from '@/mixin/pageMixin'
export default {
  mixins: [pageMixin],

  data() {
    return {
      searchData: {},
      postRemoveReq
    }
  },
  methods: {
    //添加
    add() {
      this.$router.push({ name: 'post-add' })
    },

    // 查看
    check(row) {
      this.$router.push({ name: 'post-view', params: { id: row._id } })
    },

    // 修改
    change(row) {
      this.activeId = row._id
      this.$router.push({ name: 'post-edit', params: { id: row._id } })
    },

    //请求表格数据
    async renderTable() {
      let { pageNum, pageSize } = this
      let dataObj = {
        pageSize,
        pageNum,
        data: {}
      }
      const res = await postPageReq(dataObj)
      if (res.data.code == 200) {
        this.info = res.data.data
      }
    }
  },
  created() {
    this.renderTable()
  }
}
</script>
