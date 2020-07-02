<template>

  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.jpg"
             alt="">
        <span>瑞联盟后台管理系统</span>
      </div>
      <el-button type="info"
                 sizi="mini"
                 @click="loginout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    //退出登录操作
    loginout () {
      sessionStorage.clear()
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #b3c0d1;
  align-items: center;
  img {
    position: relative;
    bottom: -5px;
    left: -20px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  span {
    margin-left: -10px;
    font-size: 25px;
    font-weight: 600px;
  }
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
}
</style>