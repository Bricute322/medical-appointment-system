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
      :key="navigationItems.text"
    >
      <v-list-item-title>{{ navigationItems.text }}</v-list-item-title>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-message-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-outline</v-icon>
      </v-btn></v-toolbar-items
    >
  </v-toolbar>
  <!-- <v-card elevation="12" width="256">
    <v-navigation-drawer floating permanent>
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card> -->
</template>
<script>
export default {
  name: "Navigation",
  data: () => ({
    logO: require("@/assets/logo3.png"),
    navigationItems: [
      { text: "Home", url: "/Landingpage" },
      { text: "About US" },
      { text: "Services" },
      { text: "Location" },
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
}
/* .test {
  height: 100px !important;
} */
</style>
