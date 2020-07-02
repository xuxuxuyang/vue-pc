<template>
  <div class='login'>
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="login_logo">
        <img src="../assets/logo.jpg"
             alt="">
      </div>
      <!-- 表单区域 -->
      <el-form :model="loginForm"
               :rules="rules"
               label-width="40px"
               ref="form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input class="inputtop"
                    placeholder="请输入账号"
                    clearable
                    prefix-icon="el-icon-user-solid"
                    v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock"
                    v-model="loginForm.password"
                    placeholder="请输入密码"
                    clearable
                    show-password></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="button">
          <el-button type="primary"
                     size="min"
                     @click="login">登录</el-button>

          <el-button type="info"
                     class="butleft"
                     @click="resetForm">重置</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      //这是登录表单的数据对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单预验证的规则
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 5, max: 12, message: '账号长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {},
  methods: {
    //点击重置按钮表单
    resetForm () {
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate(async valid => {
        if (valid) {
          //发送登录请求
          const { data: res } = await this.$http.post('login', this.loginForm)
          //登陆失败
          if (res.meta.status !== 200) {
            this.$message.error(res.meta.msg);
          } else {
            // 登陆成功
            this.$message({
              message: res.meta.msg,
              type: 'success'
            });
            console.log(res);
            //保存token到sessionStorage中 
            sessionStorage.setItem('token', res.data.token)
            this.$router.push('/home')
          }

        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_logo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 5px solid #abc;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.el-form-itemt {
  width: 100%;
  box-sizing: border-box;
  margin: 0 20px;
}
.el-input {
  width: 90%;
  box-sizing: border-box;
}
.inputtop {
  margin-top: 100px;
}
.button {
  display: flex;
  justify-content: flex-end;
}
.butleft {
  margin-right: 40px;
}
</style>