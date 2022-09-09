<template>
  <div>
    <p class="text-title mt-5 ml-2">Danh sách khóa học</p>
    <v-row>
      <v-col md="3" v-for="(courseItem, index) in courses" :key="index">
        <v-card :loading="loading" class="mx-auto" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" :src="'' + courseItem.feature_image"></v-img>

          <p class="course-title">{{ courseItem.course_name }}</p>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ms-4">4.5</div>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Mô tả</v-card-title>
          <v-card-text>
            <p class="course-desc" v-html="courseItem.course_desc"></p>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between align-center">
            <router-link tag="p" :to="{ name: 'CourseDetail', params: { id: courseItem.course_id } }"> <v-btn color="deep-purple lighten-2" text> Xem chi tiết </v-btn></router-link>
             <router-link tag="p" :to="{ name: 'CourseDetail', params: { id: courseItem.course_id } }"> <v-btn color="deep-purple lighten-2" text> Đăng ký ngay </v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as courseAPI from "../../../api/course";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    courses: {},
  }),
  async created() {
    let coureList = await courseAPI.getListCourse();
    this.courses = coureList.data;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.course-desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.course-title {
  padding: 0 1rem;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
