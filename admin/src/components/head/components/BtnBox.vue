<template>
  <ul class="btnBox">
    <li class="liItem add-transition">
      <el-dropdown>
        <span class="el-dropdown-link touxiang">
          <img src="@a/imgs/touxiang.jpg" alt />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-switch-button" @click.native="signOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setToken']),
    signOut() {
      this.setToken()

      this.$router.push('/login')
      this.$message({
        message: '退出成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss">
.btnBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  margin-right: 20px;
  .liItem {
    width: 44px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    .iconfont {
      color: #fff;
    }
    &:hover {
      cursor: pointer;
    }
    .touxiang {
      padding-top: 9px;
      box-sizing: border-box;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }
  .el-dropdown-link {
    display: block;
    width: 44px;
    text-align: center;
    height: 50px;
  }
}
</style>