<template>
  <v-row>
    <v-col md="9">
      <div class="mt-5 create-wrapper">
        <h2 class="text-title">Thêm mới khóa học</h2>
        <v-text-field v-model="courseTitle" class="mt-10" label="Tên khóa học" placeholder="Nhập tên khóa học" outlined></v-text-field>
        <v-text-field v-model="courseLinkYt" label="Đường dẫn youtube" placeholder="Dán đường dẫn video khóa học" outlined></v-text-field>
        <vue-editor v-model="courseContent"></vue-editor>
        <v-btn @click="createCourse" class="mt-5" color="primary"> Đăng khóa học </v-btn>
      </div>
    </v-col>
    <v-col md="3">
      <h2 class="text-title mt-5">Thông tin khóa học</h2>
      <div class="category">
        <p>Chọn danh mục</p>
        <v-checkbox v-model="courseCat" label="Development" color="red" value="red" hide-details></v-checkbox>
        <v-checkbox v-model="courseCat" label="Security" color="blue" value="red darken-3" hide-details></v-checkbox>
      </div>
      <div class="feature-img">
        <p>Thêm ảnh khóa học</p>
        <div :style="{ backgroundImage: 'url(' + urlPreviewAvatar + ')' }" @click="uploadImg" class="cusor-pointer">
          <p v-if="fileUpdate == ''">Tải ảnh lên</p>
          <input @change="onFileChange($event)" v-show="false" ref="featureImageCourse" type="file" name="" id="" />
        </div>
        <v-btn @click="uploadImg" v-if="!fileUpdate == ''" class="mt-2" outlined color="indigo"> Thay đổi ảnh </v-btn>
      </div>
    </v-col>
    <div v-if="loading" id="loader-wrapper">
      <div id="loader"></div>
    </div>
  </v-row>
</template>

<script>
import { VueEditor } from "vue2-editor";
import * as courseAPI from "../../../api/course";
export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      courseTitle: "",
      courseContent: "<p>Nội dung khóa học</p>",
      courseLinkYt: "",
      courseCat: " ",
      loading: false,
      urlPreviewAvatar: "",
      fileUpdate: "",
    };
  },
  methods: {
    uploadImg: function () {
      this.$refs.featureImageCourse.click();
    },
    async createCourse() {
      this.loading = true;
      let data = new FormData();
      data.append("course_name", this.courseTitle);
      data.append("file", this.fileUpdate);
      data.append("course_desc", this.courseContent);
      data.append('linkVideo' , this.courseLinkYt)
      try {
        let updateResult = await courseAPI.createCourse(data);
        this.loading = false;
        this.$toast.success("Thêm khóa học thành công");
        setTimeout(() => this.$router.push({name : 'CourseList'}), 1500);
      } catch (error) {
        this.loading = false;
        this.$toast.error("Lỗi không xác định");
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.fileUpdate = files[0];
      this.urlPreviewAvatar = URL.createObjectURL(files[0]);
    },
    updateCourse() {
      console.log(this.courseTitle, 1);
      console.log(this.courseContent, 2);
      console.log(this.courseCat, 3);
      console.log(this.fileUpdate, 4);
    },
  },
};
</script>
<style lang="scss">
#quill-container .ql-editor {
  min-height: 500px !important;
}
</style>
<style lang="scss" scoped>
.create-wrapper {
  border-right: solid 1px rgba($color: #000000, $alpha: 0.3);
  padding: 0 1.5rem;
}
.category {
  border-bottom: solid 1px rgba($color: #002960, $alpha: 0.3);
  padding: 1rem 0;
}
.feature-img {
  padding-top: 1rem;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    border-radius: 5px;
    background-color: #b3a7a7;
    background-position: 100% 100%;
    background-size: 100% 100%;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
