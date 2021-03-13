<template>
  <div class="pa-5 pt-16">
    <v-card style="border-radius: 30px" align="center" max-width="500px" class="mx-auto" justify="center">
      <div class="black white--text text-center">
        <v-card-title color="black">
          Login
        </v-card-title>
      </div>
      <v-divider></v-divider>
      <div class="pa-5">
      <v-form ref="form">
        <v-text-field
            label="Email"
            color="black"
            type="email"
            v-model="form.email"
            :rules="emailRules"
            prepend-inner-icon="mdi-email"
            required
            rounded
            filled
            dense
        ></v-text-field>
        <v-text-field
            label="password"
            color="black"
            v-model="form.password"
            type="password"
            prepend-inner-icon="mdi-lock"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            dense
            rounded
            filled
        >
        </v-text-field>
      </v-form>
        <v-card-actions>
          <v-btn class="black white--text mx-auto px-10" rounded  @click="login()">Login</v-btn>
        </v-card-actions>
        <p class="text-center mt-3">Create account?
          <nuxt-link class="black--text" to="/register">Register</nuxt-link>
        </p>
      </div>

    </v-card>
  </div>
</template>

<script>
import {LOGIN} from "~/graphql/mutations/login";
import {EDIT_BLOG} from "../graphql/mutations/editBlog";

export default {
  name: "login.vue",
  layout: 'authLayout',
  data() {
    return {
      text: '',
      showPassword: false,
      form: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 8 || "Password length is too short. Minimum length is 8.",
      ],

    }
  },
  methods: {
    async login() {
      if(this.$refs.form.validate() && this.form.email==='test@g.co' && this.form.password==='012345678') {
        this.$router.push('/')
      }
      else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

</style>
