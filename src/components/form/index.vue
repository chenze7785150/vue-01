<template>
  <div>
    <h3>Element表单</h3>
    <hr>
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" autocomplete="off" placeholder="输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password" style="margin-top:20px;">
        <k-input type="password" v-model="model.password" autocomplete="off" placeholder="请输入密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button class="btn" @click="submitForm('loginForm')" style="margin-top:20px;">提交</button>
      </k-form-item>
    </k-form>
    <div style="margin-top:20px;">{{model}}</div>
  </div>
</template>

<script>
  import KForm from "./Form";
  import KFormItem from "./FormItem";
  import KInput from "./Input";
  import Notice from '../notice/index.vue'

  export default {
    components: {
      KForm,
      KFormItem,
      KInput
    },
    data() {
      return {
        model: { username: "", password: "" },
        rules: {
          username: [{ required: true, message: "请输入用户名" }],
          password: [{ required: true, message: "请输入密码" }]
        }
      };
    },
    methods: {
      submitForm(form){
        this.$refs[form].validate( valid => {
          const notice = this.$create(Notice, {
            title: "社会你杨哥喊你来搬砖",
            message: valid ? "请求登录!" : "校验失败!",
            duration: 1000        
          })  
          notice.show();
        })
        
      }
    }
  }
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  font-size: 16px;
}
</style>