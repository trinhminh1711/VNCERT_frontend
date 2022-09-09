<template>
  <v-card class="mt-5">
    <v-card-title>
      <p class="text-title">Danh sách người dùng</p>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Tìm kiếm" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>
          {{ item.status == 1 ? "Đang hoạt động" : "Tạm khóa" }}
        </v-chip>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-btn class="text-capitalize caption" depressed color="error"> Xóa tài khoản </v-btn>
      </template>
      <template v-slot:item.view="{ item }">
        <v-icon class="cusor-pointer"> mdi-eye </v-icon>
      </template>
      <template v-slot:item.active="{ item }">
        <v-icon @click="confirmUnLockAccount(item.user_id)" class="cusor-pointer" color="red" v-if="item.status == 0"> mdi-lock </v-icon>
        <v-icon @click="confirmLockAccount(item.user_id)" class="cusor-pointer" color="green" v-else> mdi-lock-open </v-icon>
      </template>
    </v-data-table>
    <div v-if="loading" id="loader-wrapper">
      <div id="loader"></div>
    </div>
    <v-dialog v-model="lockConfirm" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Mở khóa tài khoản ? </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="lockConfirm = false"> Hủy bỏ </v-btn>
          <v-btn color="primary" text @click="lockAccount"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="unlockConfirm" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Mở khóa tài khoản ? </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="unlockConfirm = false"> Hủy bỏ </v-btn>
          <v-btn color="primary" text @click="unlockAccount"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import * as accountAPI from "../../../../api/account";
export default {
  data() {
    return {
      search: "",
      loading: false,
      lockConfirm: false,
      unlockConfirm: false,
      userAccountUnLock: "",
      userAccountLock: "",
      headers: [
        {
          text: "Username",
          align: "start",
          value: "username",
        },
        { text: "Name", value: "name" },
        { text: "Quyền tài khoản", value: "role" },
        { text: "Trạng thái", value: "status" },
        { text: "Xem chi tiêt", value: "view" },
        { text: "Khóa tài khoản", value: "active" },
        { text: "Xóa tài khoản", value: "delete" },
      ],
      desserts: [],
    };
  },
  async mounted() {
    let listUser = await accountAPI.getAllUser();
    this.desserts = listUser.data.map((user) => ({
      user_id: user.user_id,
      username: user.username,
      name: user.name + " " + user.sub_name,
      role: user.role == 0 ? "User" : "Admin",
      status: user.status,
    }));
  },
  methods: {
    confirmLockAccount(user_id) {
      this.userAccountLock = user_id;
      this.lockConfirm = true;
    },
    confirmUnLockAccount(user_id) {
      this.userAccountUnLock = user_id;
      this.unlockConfirm = true;
    },
    getColor(status) {
      if (status == 0) return "red";
      else return "green";
    },
    async unlockAccount() {
      try {
        let lockResult = await accountAPI.unlockAccountUser(this.userAccountUnLock);
        this.loading = false;
        this.lockConfirm = false;
        this.$toast.success("Mở khóa tài khoản thành công");
        setTimeout(() => this.$router.go(0), 1500);
      } catch (error) {
        this.loading = false;
        this.$toast.error("Lỗi không xác định");
      }
    },
    async lockAccount() {
      try {
        let lockResult = await accountAPI.lockAccountUser(this.userAccountLock);
        this.loading = false;
        this.lockConfirm = false;
        this.$toast.success("Khóa tài khoản thành công");
        setTimeout(() => this.$router.go(0), 1500);
      } catch (error) {
        this.loading = false;
        this.$toast.error("Lỗi không xác định");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card.v-card.v-sheet {
  box-shadow: none;
}
</style>
