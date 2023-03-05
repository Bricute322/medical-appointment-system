<template>
  <v-container fill-height>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="4">
        <v-card
          class="pa-6"
          style="width: 100%; height: 100%"
          outlined
          tile
          flat
        >
          {{ $store.state.logForm }}
          <v-form ref="loginForm" @submit.prevent="submit">
            <v-row>
              <v-img
                class="mb-10 mt-7"
                contain
                height="120px"
                width="100px"
                v-bind:src="logO"
              ></v-img>
            </v-row>
            <v-text-field
              class="px-12 py-1"
              required
              dense
              outlined
              label="Email"
              :rules="[rules.required, rules.email]"
              v-model="emailForLogin"
            >
            </v-text-field>
            <v-text-field
              class="px-12 py-0"
              label="Password"
              outlined
              required
              dense
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              :rules="[rules.required]"
              @click:append="show1 = !show1"
              v-model="passwordForLogin"
            >
            </v-text-field>
            <v-card-actions class="px-12">
              <v-btn
                block
                depressed
                @click="submit"
                class="primary ml-auto px-4"
                >Login
              </v-btn>
            </v-card-actions>
            <v-card-subtitle class="d-flex justify-center mb-5 ma-0 pa-0">
              <router-link to="/register2" class="forgotPass mb-15"
                >Forgot Password</router-link
              >
            </v-card-subtitle>
            <v-col cols="12 d-flex justify-center">
              <v-btn to="/register" text class="px-12" md="12">
                Create a new Account
              </v-btn>
            </v-col>
            {{ $vuetify.breakpoint.name }}
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <v-img
          v-bind:src="backgroundImage"
          class="boom hidden-xs-only"
          style="height: 100%; width: 100%"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import register2 from "./register2.vue";
export default {
  name: "Login",
  data: () => ({
    logO: require("../assets/logo2.png"),
    backgroundImage: require("../assets/appointment.jpg"),
    password: "Password",
    show1: false,
    emailForLogin: "",
    passwordForLogin: "",
    rules: {
      required: (value) => !!value || "Required.",
    },
    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  methods: {
    submit() {
      if (this.$refs.loginForm.validate()) {
        console.log("submit");
      }
      this.$store.dispatch("loginForm", {
        email: this.emailForLogin,
        password: this.passwordForLogin,
      });
    },
  },
  components: { register2 },
};
</script>
<style scoped>
.tae {
  text-align: center;
  align-items: center;
}
.boom {
  background-size: cover;
  background-position: center center;
  /* height: 50vh !important; */
  /* background-size: 100% 100% !important; */
}
.forgotPass {
  text-decoration: none;
  font-size: smaller;
}
.test {
  background-color: black;
}
</style>
