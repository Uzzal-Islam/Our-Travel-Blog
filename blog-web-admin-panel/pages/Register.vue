<template>
  <div class="pa-5 pt-16">
    <v-card max-width="550px" class="mx-auto" style="border-radius: 30px">
      <div class="black white--text text-center">
        <v-card-title color="primary">
          Register
        </v-card-title>
      </div>
      <v-divider></v-divider>
      <div class="pa-10 pb-0">
        <v-form ref="form">
          <v-text-field
              label="Name"
              type="text"
              v-model="form.name"
              :rules="NameRules"
              prepend-inner-icon="mdi-account"
              filled
              rounded
              dense
              color="black"
          ></v-text-field>
          <v-text-field
              label="Email"
              type="email"
              :rules="emailRules"
              v-model="form.email"
              prepend-inner-icon="mdi-email"
              filled
              rounded
              dense
              color="black"
          ></v-text-field>
          <v-text-field
              label="password"
              type="password"
              :rules="passwordRules"
              v-model="form.password"
              prepend-inner-icon="mdi-lock"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              filled
              rounded
              dense
              color="black"
          ></v-text-field>
        </v-form>
        <v-card-actions class="">
          <v-btn class=" white--text mx-auto px-4 black" rounded @click="register()">Register</v-btn>
        </v-card-actions>
      </div>
      <div class="text-center pb-5 mt-3">
        <p>Have you any Account?
          <nuxt-link class="black--text" to="/login">sign in</nuxt-link>
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "register.vue",
  layout: 'authLayout',
  data() {
    return {
      text: '',
      showPassword: false,
      form: {
        name: '',
        email: '',
        password: ''
      },
      NameRules: [
        v => !!v || 'First Name is required',
        v => v.length >= 3 || 'First Name must be at least 3 characters or more.'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 8 || "Password length is too short. Minimum length is 8.",
      ]
    }
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        this.$router.push('/')
      } else {
        this.$router.push('/register')
      }
    }
  }
}
</script>

<style scoped>

</style>
