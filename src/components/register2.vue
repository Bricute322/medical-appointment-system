<template>
  <v-container fill-height>
    <!-- {{ $vuetify.breakpoint.name }} -->
    <!-- <div class="text-center"> -->
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="6">
        <v-card
          class="pa-5"
          style="width: 100%; height: 650px"
          tile
          flat
          outlined
        >
          <!-- <v-alert dense outlined type="error"> </v-alert> -->
          {{ $store.state.errors.username }}
          {{ $store.state.errors.password }}
          {{ $store.state.errors.phone_number }}

          <v-card class="d-flex justify center" flat width="500px">
            <v-form ref="registerForm" @submit.prevent="submit">
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify center">
                  <v-img
                    contain
                    height="110px"
                    width="110px"
                    :src="logoS"
                  ></v-img
                ></v-col>
                <v-col cols="12" class="justify center">
                  <v-card-title
                    primary-title
                    class="justify-center pa-0 mb-5 headline blue--text text--darken-4"
                  >
                    Welcome to Your Health
                  </v-card-title>
                  <v-card-title
                    class="justify-center pa-0 mb-5 headline blue--text text--darken-4"
                    >Sign up
                  </v-card-title></v-col
                >
                <v-row justify="center" no-gutters>
                  <v-col cols="12" md="8" sm="8">
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          :rules="[rules.required]"
                          v-model="firstName"
                          label="First Name"
                          outlined
                          dense
                          class="Input_1"
                        ></v-text-field
                      ></v-col>
                      <v-col cols="6" pa="0">
                        <v-text-field
                          :rules="[rules.required]"
                          v-model="lastName"
                          label="Last Name"
                          outlined
                          dense
                          class="Input_1 mb-3"
                        ></v-text-field
                      ></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-text-field
                          :rules="[rules.required]"
                          v-model="Email"
                          label="Email"
                          outlined
                          dense
                          class="Input_1"
                        ></v-text-field></v-col
                    ></v-row>
                    <v-text-field
                      v-model="Password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      :rules="[rules.required]"
                      outlined
                      dense
                      class="Input_1 mb-3"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-text-field
                      v-model="confirmPassword"
                      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show2 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Confirm Password"
                      :rules="[rules.required]"
                      outlined
                      dense
                      class="Input_1 mb-3"
                      @click:append="show2 = !show2"
                    ></v-text-field>
                    <v-text-field
                      :rules="[rules.required, rules.min]"
                      v-model="phoneNumber"
                      label="Phone number"
                      outlined
                      dense
                      class="Input_1 mb-3"
                      type="number"
                    ></v-text-field>
                    <v-card-actions cols="12" md="7" sm="9">
                      <v-btn block depressed class="primary" @click="submit()"
                        >Sign Up
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-row></v-form
            >
          </v-card>
        </v-card> </v-col
      ><v-col cols="12" xs="12" sm="12" md="6">
        <v-card class="testing" style="width: 550px; height: 650px">
          <v-card-text class="white--text">
            <h2 class="text-center display-4 mt-5">Your Health</h2>
            <h3 class="text-center display-2">
              is your friendly online consultant
            </h3></v-card-text
          >
          <v-carousel cycle hide-delimiters :show-arrows="false">
            <v-carousel-item v-for="(item, i) in items" :key="i"
              ><v-img :src="item.src" contain max-height="300"></v-img
            ></v-carousel-item> </v-carousel
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Register",
  components: {},
  data: () => ({
    logoS: require("../assets/logo3.png"),
    users: ["Doctor", "Patient"],
    dialog: false,
    date: null,
    menu: false,
    message: "",
    items: [
      {
        src: require("@/assets/doctors.jpg"),
      },
      {
        src: require("@/assets/mmm.jpg"),
      },
      {
        src: require("@/assets/d.jpg"),
      },
    ],
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
    confirmPassword: "",
    phoneNumber: "",
    show1: false,
    show2: false,
    password: "Password",
    confirmPassword: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      min: (v) => v.length >= 8 || "Min 11 characters",
    },
  }),
  methods: {
    submit() {
      // this.$refs.registerForm.validate();
      // if (this.$refs.registerForm.validate()) {
      //   this.$axios
      //     .post(`http://reaper25.pythonanywhere.com/register/`, {
      //       first_name: this.firstName,
      //       last_name: this.lastName,
      //       email: this.Email,
      //       password: this.Password,
      //       confirm_password: this.confirmPassword,
      //       phone_num: this.phoneNumber,
      //     })
      //     .then((data) => {
      //       console.log("test", data);
      //     })
      //     .catch((error) => {
      //       console.log("error", error);
      //     });
      // }
      if (this.$refs.registerForm.validate()) {
        console.log("submit");
      }
      this.$store.dispatch("registerForm", {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.Email,
        password: this.Password,
        confirm_password: this.confirmPassword,
        phone_num: this.phoneNumber,
      });
    },
  },
};
</script>
<style scoped>
.testing {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#025797 10%, #ff87a1);
}
.Input_1 {
  border-radius: 10px !important;
  margin-bottom: 0px !important;
}
.v-card {
  overflow: hidden;
}
</style>
