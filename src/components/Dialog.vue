<template>
  <v-dialog v-model="active" width="1000">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> {{ title }} </v-card-title>
      <v-card-text class="mt-5">
        {{ content }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="hiddenPopup()"> Ok </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["title", "content", "active"],
  data() {
    return {
        disableDialog : false
    };
  },
  methods: {
    hiddenPopup: function () {
      this.$emit("accept-popup", this.disableDialog);
    },
  },
};
</script>

<style></style>
