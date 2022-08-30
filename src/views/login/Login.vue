<template>
  <Authentication>
    <div class="login-main">
      <div class="login-wrapper">
        <img class="logo" src="../../../public/img/logo.png" alt="" />
        <v-text-field v-model="username" outlined label="Username" append-icon="mdi-account"></v-text-field>
        <v-text-field v-model="password" outlined type="password" label="Password" append-icon="mdi-lock"></v-text-field>
        <div class="btn-submit">
          <v-btn @click="submitLogin" :disabled="!isValidate" depressed large color="primary"> Đăng nhập </v-btn>
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </Authentication>
</template>
<script>
import Authentication from "../../layout/Authentication.vue";
import * as loginApi from "../../api/login";
export default {
  name: "LoginPage",
  components: {
    Authentication,
  },
  data() {
    return {
      isValidate: false,
      username: "",
      password: "",
      snackbar: false,
      text: "error",
    };
  },
  mounted() {
    const that = this;
    window.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        that.submitLogin();
      }
    });
  },
  methods: {
    checkValidate() {
      if (this.username && this.password) {
        this.isValidate = true;
      } else {
        this.isValidate = false;
      }
    },
    async submitLogin() {
      if (this.username == "") {
        this.snackbar = true;
        this.text = "Vui lòng nhập thông tin";
        return 0;
      } else {
        var checkLogin = await loginApi.login(this.username, this.password);
        if (!checkLogin) {
          this.snackbar = true;
          this.text = "Tên đăng nhập hoặc mật khẩu không đúng";
        } else {
          this.$router.push({ path: "/" });
        }
        this.username = "";
        this.password = "";
      }
    },
  },
  watch: {
    username: function () {
      this.checkValidate();
    },
    password: function () {
      this.checkValidate();
    },
  },
};
</script>
<style lang="scss" scoped>
.login-main {
  background-color: #f1f5f9;
  min-height: 92vh;
  position: relative;
}
.login-wrapper {
  width: 30%;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  .logo {
    width: 200px;
    display: block;
    margin: 0 auto;
  }
  .btn-submit {
    display: flex;
    justify-content: center;
    button {
      padding: 0 3rem;
      height: 50px;
    }
  }
}
</style>
