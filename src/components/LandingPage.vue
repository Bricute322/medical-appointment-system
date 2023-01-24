<template>
  <div>
    <Navigation></Navigation>
    <v-container>
      <v-row no-gutters
        ><v-col cols="12" sm="6" md="8"
          ><v-card class="pa-5"
            ><v-text-field
              hide-details
              append-icon="mdi-magnify"
              outlined
              placeholder="Search..."
            ></v-text-field
            ><v-card
              class="mt-5 rounded-card grey lighten-5"
              height="280px"
            ></v-card>
            <!--  TABS  -->
            <v-card>
              <v-row no-gutters>
                <v-col cols="12" sm="6" md="8">
                  <v-tabs class="mt-5" color="grey accent-4" left>
                    <v-tab>Info</v-tab>
                    <v-tab-item>
                      <v-card
                        display="flex"
                        flex-wrap
                        align-content="space-between"
                        class="mt-5"
                      >
                        <v-card-text class="d-flex flex-wrap">
                          <v-card
                            class="mx-2 d-flex justify-center"
                            outlined
                            width="200"
                            color="#FFCCCC"
                          >
                            <h3 class="mt-4">
                              Height
                              <p>169cm</p>
                            </h3>
                          </v-card>
                          <v-card
                            class="mx-2 d-flex justify-center"
                            width="200"
                            color="#a3a6ff"
                          >
                            <h3 class="mt-4">
                              Weight
                              <p>169cm</p>
                            </h3>
                          </v-card>
                          <v-card
                            class="mx-2 mt-3 d-flex justify-center"
                            width="200"
                            color="#93D1A0"
                          >
                            <h3 class="mt-4">
                              Sleep
                              <p>8hrs</p>
                            </h3>
                          </v-card>
                          <v-card
                            class="mx-2 mt-3 d-flex justify-center"
                            width="200"
                            color="#B693D1"
                          >
                            <h3 class="mt-4">
                              Pulse
                              <p>101BPM</p>
                            </h3>
                          </v-card>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab>Diet</v-tab>
                    <v-tab-item>
                      <v-card><h1>s</h1></v-card>
                    </v-tab-item>
                  </v-tabs></v-col
                ><v-col cols="6" md="4" my="10" class="mt-4">
                  <v-card class="mx-5" height="250px">
                    <v-textarea v-model="bio" color="teal">
                      <template v-slot:label>
                        <div>Need To Crud (Soon)</div>
                      </template>
                    </v-textarea>
                  </v-card>
                </v-col></v-row
              ></v-card
            ></v-card
          ></v-col
        ><v-col cols="6" md="4" justify="center">
          <v-card class="pa-2" outlined tile
            ><v-col mr="5" cols="12"> <v-calendar /></v-col>
            <!-- <h3>To Do</h3> -->
            <v-card-title>To Do</v-card-title>
            <v-card class="mt-5 appoint ml-12">
              <v-col class="ml-5"> <h3>Dentist</h3></v-col></v-card
            >
            <v-card class="mt-5 meds ml-12">
              <v-col class="ml-5"> <h3>Dentist</h3></v-col></v-card
            ></v-card
          >
        </v-col>
      </v-row></v-container
    >
  </div>
</template>
<script>
import Navigation from "../components/Layout/Navigation.vue";
export default {
  name: "LandingPage",
  data: () => ({ bio: "" }),
  components: { Navigation },
};
</script>
<style scoped>
.rounded-card {
  border-radius: 20px !important;
  color: #fafafa;
}
.mx-2 {
  margin-left: 2px;
  margin-right: 2px;
}
.appoint {
  background-image: linear-gradient(to right, #b7abff, #ff93f4);
  width: 276px !important;
  height: 106px !important;
}
.meds {
  background-image: linear-gradient(to left, #b7abff, #ff93f4);
  width: 276px !important;
  height: 106px !important;
}
/* .d-flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
} */
</style>
