<template>
  <v-row>
    <v-col md="7">
      <div class="post-detail">
        <h2 class="mt-5 text-title">{{ courseDetail.course_name }}</h2>
        <div class="feature-img">
          <img class="d-block mx-auto" width="100%" height="380" :src="'' + courseDetail.feature_image" alt="" />
        </div>
        <div class="course-desc" v-html="courseDetail.course_desc"></div>
        <div class="mt-5">
          <h2 class="my-2">Video khóa học</h2>
          <iframe
            width="100%"
            height="315"
            :src="''+ courseDetail.linkVideo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </v-col>
    <v-col md="5">
      <h2 class="mt-5 text-title">Các khóa học khác</h2>
      <div style="margin-top: 1rem" v-for="(courseRelated, index) in courseRelated" :key="index">
        <a v-if="index < 4" v-bind:href="'http://localhost:1024/course-detail/' + courseRelated.course_id">
          <div class="course-related d-flex align-center">
            <img :src="'' + courseRelated.feature_image" alt="" />
            <p class="mb-0 cusor-pointer">{{ courseRelated.course_name }}</p>
          </div>
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import * as courseAPI from "../../../api/course";
import Comment from "./Comment.vue";
export default {
  components: {
    Comment,
  },
  data: () => ({
    loading: false,
    selection: 1,
    courseDetail: {},
    courseRelated: [],
  }),
  async created() {
    let id = this.$route.params.id;
    let course = await courseAPI.getDetail(id);
    this.courseDetail = course.data;
    this.getCourseRelated();
  },
  methods: {
    async getCourseRelated() {
      let listCourseRelated = await courseAPI.getListCourse();
      this.courseRelated = listCourseRelated.data;
      console.log(this.courseRelated);
    },
  },
};
</script>
<style lang="scss">
img {
  max-width: 100% !important;
}
</style>
<style lang="scss" scoped>
.course-related {
  gap: 20px;
  background: rgba($color: #a7a1a1, $alpha: 0.3);
  border-radius: 5px;
  padding: 1rem;
  p {
    position: relative;
    color: royalblue;
    &::after {
      content: " ";
      position: absolute;
      width: 10%;
      height: 3px;
      bottom: -10px;
      left: 0;
      background: #000000;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 100px;
    height: auto;
    border-radius: 5px;
  }
}
.post-detail {
  padding: 0 2rem;
  border-right: solid 1px rgba($color: #000000, $alpha: 0.3);
  .feature-img {
    margin-top: 1rem;
  }
  .course-desc {
    margin-top: 1rem;
    text-align-last: left !important;
    line-height: 2;
  }
}

a {
  text-decoration: none;
}
</style>
