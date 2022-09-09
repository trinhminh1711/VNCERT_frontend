<template>
  <div class="account-avatar bg-white pt-5 bg-white">
    <div class="avatar-el">
      <div @click="uploadAvatarFile" class="overlay-avatar">
        <input @change="onFileChange($event)" v-show="false" type="file" ref="fileAvatar" name="" id="" />
        <v-icon large>mdi-upload-outline</v-icon>
      </div>
      <img class="rounded-circle mx-auto" :src="'' + urlPreviewAvatar" />
    </div>
    <div class="mt-2 d-flex justify-center">
      <v-btn @click="uploadConfirm = true" :disabled="fileUpdate == ''" tile class="btn-dark">
        <v-icon left> mdi-upload </v-icon>
        Cập nhật
      </v-btn>
    </div>
    <v-card class="mx-auto px-5">
      <v-list shaped>
        <v-subheader>Thông tin tài khoản</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Tài khoản</v-list-item-title>
              <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Quyền tài khoản : {{ user.role == 0 ? "User" : "Admin" }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-post-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Chuyên mục : {{ user.specialized }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div v-if="loading" id="loader-wrapper">
      <div id="loader"></div>
    </div>
    <div v-if="updateSucess" class="update-avatar--sucess">
      <v-alert dense border="left" type="success"> Cập nhật ảnh đại diện thành công </v-alert>
    </div>
    <v-dialog v-model="uploadConfirm" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Cập nhật ảnh đại diện ? </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="postAvatarUpdate"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as accountAPI from "../../../api/account";
export default {
  props: ["user"],
  data: () => ({
    urlPreviewAvatar: "",
    fileUpdate: "",
    loading: false,
    updateSucess: false,
    uploadConfirm: false,
  }),
  created() {
    this.urlPreviewAvatar = this.user.avatar;
  },
  methods: {
    postAvatarUpdate: async function () {
      this.loading = true;
      let data = new FormData();
      data.append("user_id", sessionStorage.getItem("user_id"));
      data.append("file", this.fileUpdate);
      try {
        let updateResult = await accountAPI.updateAvatarUser(data);
        this.loading = false;
        this.uploadConfirm = false;
        this.$toast.success("Thay ảnh đại diện thành công");
      } catch (error) {
        this.loading = false;
        this.$toast.error("Lỗi không xác định");
      }
    },
    uploadAvatarFile: function () {
      this.$refs.fileAvatar.click();
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.fileUpdate = files[0];
      this.urlPreviewAvatar = URL.createObjectURL(files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-el {
  position: relative;
  &:hover .overlay-avatar {
    display: flex;
    cursor: pointer;
  }
  .overlay-avatar {
    position: absolute;
    width: 200px;
    height: 200px;
    content: "";
    display: none;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: rgba($color: #000000, $alpha: 0.5);
    i.v-icon.v-icon {
      color: #fff;
    }
  }
}
.account-avatar {
  height: 100%;
  img {
    width: 200px;
    height: 200px;
    display: block;
  }
}
.v-card.v-card.v-sheet {
  box-shadow: none;
}
.update-avatar--sucess {
  position: absolute;
  right: 50px;
  top: 15%;
  z-index: 9999;
}
</style>
