<template>
    <div>
      <div class="mt-5 pt-4">
        <h3 class="display-3 text-center">Contact Us</h3>
        <div class="row">
          <p class="col-3"></p>
          <p class="text-center col-6" style="font-size: 20px">
            Hey there!

            While we are always happy to get questions from readers, due to the volume of email I receive,
            we simply try to respond to everyone right away. You should hear from me eventually though.
            Reply to my welcome email with your questions/comments for a faster reply.
            all photographs are copyrighted to the photographer - contact the blogger in question to requestion permission,
            please include the web address of the photo.
          </p>
          <p class="col-3"></p>
        </div>
        <div class="row pb-5">
          <div class="col-3"></div>
          <div class="col-6">
            <div class="p-5">
              <div class="row">
                <div class="col-6">
                  <label>Name:</label>
                  <b-form-input v-model="form.name" type="text" placeholder="Enter your name"></b-form-input>
                </div>
                <div class="col-6">
                  <label>Email:</label>
                  <b-form-input v-model="form.email" type="email" placeholder="Enter your Email"></b-form-input>
                </div>
              </div>
              <label class="mt-3">Message:</label>
              <b-form-textarea v-model="form.message" type="text" rows="6" placeholder="Write your message"></b-form-textarea>
              <div class="mt-5 text-center">
                <b-button @click="sentToEmail(true)" class="btn" :href="href">Submit</b-button>
              </div>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import ContactUsComponents from "../components/ContactUsComponents";
    export default {
      name: "ContactUs",
      components: {ContactUsComponents},
      data() {
        return {
          form : {
            name: '',
            email: '',
            message: ''
          },
          toastCount: 0,
          href: ''
        }
      },
      methods: {
        sentToEmail(append = false) {
          if (this.form.name === '' && this.form.email === '' && this.form.message === '') {
            this.toastCount++
            this.href = ''
            this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
              title: 'BootstrapVue Toast',
              autoHideDelay: 5000,
              appendToast: append
            })
          }
          else {
            this.href = 'mailto:amiodas156@gmail.com'
           }
        }
      }
    }
</script>

<style scoped>

</style>
