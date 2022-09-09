<template>
  <div>
    <v-row class="mr-0">
      <v-col sm="12" md="4">
        <Avatar v-if="isGetData" :user="user" />
      </v-col>
      <v-col sm="12" md="8">
        <v-card class="bg-white card-info">
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-account-box</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Họ tên</v-list-item-title>
                <v-list-item-subtitle>{{ user.name }} {{ user.sub_name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.phone_number }}</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.email }}</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.address_ward }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.address_district }} , {{ user.address_city }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-cake </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Ngày sinh</v-list-item-title>
                <v-list-item-subtitle>{{ user.birthday }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> {{ user.gender == "Nữ" ? "mdi-gender-female" : "mdi-gender-male" }} </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Giới tính</v-list-item-title>
                <v-list-item-subtitle>{{ user.gender }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as accountAPI from "../../../api/account";
import Avatar from "../account/Avatar.vue";
export default {
  components: {
    Avatar,
  },
  data() {
    return {
      user: {},
      isGetData: false
    };
  },
  async mounted() {
    let userInfo = await accountAPI.getAllInfoUser(sessionStorage.getItem("user_id"));
    this.$store.commit("setUserName", userInfo.data.username);
    this.$store.commit("setRole", userInfo.data.role);
    this.user = userInfo.data;
    this.isGetData =true
  },
};
</script>

<style lang="scss" scoped>
.v-card.v-card.v-sheet {
  box-shadow: none;
}
.card-info {
  height: 100%;
}
</style>
