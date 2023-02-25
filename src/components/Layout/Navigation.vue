<template>
  <v-toolbar prominent class="flex-grow-0 test">
    <v-toolbar-title>
      <v-row no-gutters>
        <v-img contain height="100" width="100px" :src="logO"></v-img>
      </v-row>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items
      v-for="navigationItems in navigationItems"
      :key="navigationItems.id"
    >
      <v-list-item-title
        v-for="navigationItems in navigationItems"
        :key="navigationItems.id"
      ></v-list-item-title>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <!-- <v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn></v-toolbar-items
    > -->
  </v-toolbar>
</template>
<script>
export default {
  name: "Navigation",
  data: () => ({
    logO: require("@/assets/logo3.png"),
    navigationItems: [
      { id: 1, test: "Home", path: "login" },
      { id: 2, text: "About US" },
      { id: 3, text: "Services" },
      { id: 4, text: "Location" },
    ],
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
  //   components: {
  //     Mainpage,
  //   },
};
</script>
<style scoped>
.flex-grow-0 {
  background-image: linear-gradient(to right, #8aa4ff 10%, #fa94ff, #f04bea);
  z-index: 99;
}
</style>
