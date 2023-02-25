<template>
  <div>
    <Navigation></Navigation>
    <v-container>
      <div class="d-flex justify-center">
        <v-card
          class="profileCard pa-5"
          width="1091px"
          height="646px"
          left="210px"
          top="310px"
          ><v-card-title class="d-flex justify-center"
            >Patient Info</v-card-title
          >
          <v-card height="180px" tile>
            <v-row no-gutters
              ><v-cols cols="12" sm="4"
                ><v-card height="178px" width="189px"
                  ><h3 class="grey--text d-flex justify-center">
                    Profile Picture
                  </h3></v-card
                ></v-cols
              ></v-row
            >
          </v-card>
        </v-card>
      </div></v-container
    >
  </div>
</template>
<script>
import Navigation from "../components/Layout/Navigation.vue";
export default {
  name: "ProfilePage",
  components: { Navigation },
  data: () => ({}),
};
</script>
<style scoped>
.profileCard {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.53);
  border-radius: 25px;
}
</style>
