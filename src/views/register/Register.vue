<template>
  <Authentication>
    <div class="register-main">
      <img class="logo" src="../../../public/img/logo.png" alt="" />
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <v-container>
            <v-row class="flex justify-center">
              <v-col class="pd-0" cols="6" sm="12" md="6">
                <v-row>
                  <v-col cols="6" sm="12" md="6">
                    <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
                      <v-text-field v-model="name" :counter="10" label="Họ" :error-messages="errors" outlined required></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col cols="6" sm="12" md="6">
                    <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
                      <v-text-field v-model="subName" :counter="10" label="Tên" :error-messages="errors" outlined required></v-text-field>
                    </validation-provider>
                  </v-col>
                </v-row>
                <validation-provider
                  v-slot="{ errors }"
                  name="Số điện thoại"
                  :rules="{
                    required: true,
                    min: 10,
                    max: 11,
                  }"
                >
                  <v-text-field v-model="phoneNumber" :counter="11" :error-messages="errors" outlined label="Số điện thoại" required></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                  <v-text-field v-model="email" :error-messages="errors" label="E-mail" outlined required></v-text-field>
                </validation-provider>
                <v-row>
                  <v-col cols="6" sm="12" md="8">
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field hide-details :value="formatDate" label="Ngày sinh" outlined prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="birthday"
                        :active-picker.sync="activePicker"
                        :max="new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)"
                        min="1950-01-01"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="6" sm="12" md="4">
                    <validation-provider v-slot="{ errors }" name="gender" rules="required">
                      <v-select hide-details class="input-select" v-model="gender" :items="items" outlined :error-messages="errors" label="Giới tính" data-vv-name="select" required></v-select>
                    </validation-provider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="12" md="4">
                    <validation-provider v-slot="{ errors }" rules="required" name="address">
                      <v-select v-model="citySelect" :items="cityRegister" :error-messages="errors" label="Tỉnh, Thành phố" outlined>
                        <template v-slot:item="{ item }">
                          {{ item.name }}
                        </template>
                        <template v-slot:selection="{ item }">
                          {{ item.name }}
                        </template>
                      </v-select>
                    </validation-provider>
                  </v-col>
                  <v-col cols="6" sm="12" md="4">
                    <validation-provider v-slot="{ errors }" rules="required" name="address">
                      <v-select v-model="districtSelect" :items="districtRegister" :error-messages="errors" label="Quận, huyện" outlined>
                        <template v-slot:item="{ item }">
                          {{ item.name }}
                        </template>
                        <template v-slot:selection="{ item }">
                          {{ item.name }}
                        </template>
                      </v-select>
                    </validation-provider>
                  </v-col>
                  <v-col cols="6" sm="12" md="4">
                    <validation-provider v-slot="{ errors }" rules="required" name="address">
                      <v-select v-model="wardSelect" :items="wardRegister" item-text="name" :error-messages="errors" label="Xã phường" outlined>
                        <template v-slot:item="{ item }">
                          {{ item.name }}
                        </template>
                        <template v-slot:selection="{ item }">
                          {{ item.name }}
                        </template>
                      </v-select>
                    </validation-provider>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6" sm="12" md="4">
                <validation-provider v-slot="{ errors }" name="Tên đăng nhập" rules="required|min:10">
                  <v-text-field v-model="username" label="Tên đăng nhập" :error-messages="errors" outlined required></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="password" rules="required|min:10">
                  <v-text-field
                    outlined
                    :error-messages="errors"
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    autocomplete="off"
                    label="Mật khẩu"
                    @click:append="show = !show"
                  ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="password" rules="required|min:10">
                  <v-text-field
                    outlined
                    :error-messages="errors"
                    v-model="passwordRetype"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    autocomplete="off"
                    label="Nhập lại mật khẩu"
                    @click:append="show = !show"
                  ></v-text-field>
                </validation-provider>
                <v-alert v-if="isPasswordDuplicate" dense outlined type="error"> Mật khẩu <strong>không trùng khớp</strong> </v-alert>
                <p class="mb-0 pl-1">Lĩnh vực quan tâm</p>
                <v-radio-group v-model="course" row>
                  <v-radio class="pr-5" label="Development" color="red" value="0" hide-details></v-radio>
                  <v-radio label="Security" color="green" value="1" hide-details></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <div class="d-flex justify-center">
              <validation-provider v-slot="{ errors }" rules="required" name="Xác nhận">
                <v-checkbox v-model="checkbox" :error-messages="errors" value="1" type="checkbox" required>
                  <template v-slot:label>
                    <span>Đồng ý với điều khoản và <span @click="activeDialog = true" class="color-dark">chính sách bảo mật</span></span>
                  </template>
                </v-checkbox>
              </validation-provider>
            </div>
            <div class="d-flex justify-center">
              <v-btn class="mr-4 mt-5" large color="success" type="submit" :disabled="invalid" @click="submitRegister"> Gửi thông tin đăng ký </v-btn>
            </div>
            <p class="text-gray text-center mt-2 caption">Đã có tài khoản ? <router-link to="/login" tag="span" class="color-dark cusor-pointer"> Đăng nhập ngay</router-link></p>
          </v-container>
        </form>
      </validation-observer>
    </div>
    <Dialog :active="activeDialog" :content="content" :title="title" @accept-popup="hiddenPopup" />
    <v-dialog v-model="signupConfirm" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Xác nhận đăng ký ? </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="sendSubmitSignUp"> Xác nhận </v-btn>
        </v-card-actions>
        <v-progress-linear v-if="isSendSubmit" indeterminate color="cyan"></v-progress-linear>
      </v-card>
    </v-dialog>
    <v-alert v-if="isAccountExits" class="alert-noti animate__fadeIn animate__animated" border="left" colored-border type="error" elevation="2"> Tài khoản đã tồn tài. </v-alert>
    <v-alert v-if="isAccountNotExits" class="alert-noti animate__fadeIn animate__animated" border="left" colored-border type="success" elevation="2">
      Đăng ký thành công. Đang chuyển đến trang đăng nhập
    </v-alert>
    <div v-if="loading" id="loader-wrapper">
      <div id="loader"></div>
    </div>
  </Authentication>
</template>
<script>
import * as registerAPI from "../../api/register.js";
import Dialog from "../../components/Dialog.vue";
import Authentication from "../../layout/Authentication.vue";
import { required, digits, email, max, regex, min } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} là bắt buộc",
});

extend("min", {
  ...min,
  message: "{_field_} phải chứa ít nhất {length} ký tự ",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    Authentication,
    Dialog,
  },
  data: () => ({
    name: "",
    subName: "",
    username: "",
    phoneNumber: "",
    email: "",
    isAccountExits: false,
    isSendSubmit: false,
    loading: false,
    isAccountNotExits: false,
    select: null,
    isPasswordDuplicate: false,
    gender: "",
    items: ["Nam", "Nữ", "Khác"],
    birthday: "",
    checkbox: null,
    activePicker: null,
    date: "",
    menu: false,
    password: "",
    passwordRetype: "",
    show: false,
    cityRegister: [],
    course: ["development"],
    citySelect: "",
    districtRegister: [],
    districtSelect: "",
    wardRegister: [],
    wardSelect: "",
    activeDialog: false,
    title: "Chính sách bảo mật",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    signupConfirm: false,
  }),
  async created() {
    console.log(window.performance.timing);
    const cityApi = await registerAPI.getAllCityVietNam();
    this.cityRegister = cityApi.data.map((city) => ({
      name: city.name,
      code: city.code,
    }));
  },
  computed: {
    formatDate: function () {
      if (!this.birthday) return null;
      const [year, month, day] = this.birthday.split("-");
      return `${day}/${month}/${year}`;
    },
  },
  watch: {
    citySelect: async function () {
      const district = await registerAPI.getAllDistrict(this.citySelect.code);
      this.districtRegister = district.data.districts;
    },
    districtSelect: async function () {
      for (let i = 0; i < this.districtRegister.length; i++) {
        if (this.districtSelect.code == this.districtRegister[i].code) {
          this.wardRegister = this.districtRegister[i].wards;
        }
      }
    },
    passwordRetype: function () {
      this.checkPassword();
    },
    password: function () {
      this.checkPassword();
    },
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    checkPassword() {
      if (this.password != this.passwordRetype) {
        this.isPasswordDuplicate = true;
      } else {
        this.isPasswordDuplicate = false;
      }
    },
    submitRegister() {
      this.signupConfirm = true;
    },
    async checkAccountExits() {
      let check = await registerAPI.checkAccountExits(this.username);
      console.log(check);
    },
    async sendSubmitSignUp() {
      let check = await registerAPI.checkAccountExits(this.username);
      if (check.data.exits) {
        this.signupConfirm = false;
        this.isAccountExits = true;
        this.isAccountNotExits = false;
      } else {
        this.isSendSubmit = true;
        this.isAccountExits = false;
        this.isAccountNotExits = true;
        this.signupConfirm = false;
        let dataUser = {};
        dataUser.name = this.name;
        dataUser.subName = this.subName;
        dataUser.phoneNumber = this.phoneNumber;
        dataUser.email = this.email;
        dataUser.birthday = this.birthday;
        dataUser.gender = this.gender;
        dataUser.city = this.citySelect.name;
        dataUser.district = this.districtSelect.name;
        dataUser.ward = this.wardSelect;
        dataUser.username = this.username;
        dataUser.password = this.password;
        dataUser.course = this.course[0];
        this.loading = true;
        await registerAPI.sendRegister(dataUser);
        this.isSendSubmit = false;
         setTimeout( () => {this.$router.push({ path: '/login'});this.loading = false}, 3000);
      }
    },
    hiddenPopup(e) {
      this.activeDialog = e;
    },
  },
};
</script>
<style scoped>
.logo {
  width: 200px;
  display: block;
  margin: 0 auto;
}
.alert-noti {
  width: 400px;
  position: absolute;
  right: 0;
  top: 10%;
}
.text-gray {
  color: rgb(158, 152, 152);
}
.v-input--selection-controls {
  margin-top: 0 !important;
}
.register-main {
  background-color: #f1f5f9;
  min-height: 100vh;
}
.pd-0
{
  padding: 0 !important;
}
</style>
