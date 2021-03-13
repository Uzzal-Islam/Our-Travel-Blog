<template>
  <div>
    <v-card height="505" class="pb-1 ma-16">
      <v-card-title class="heading black white--text">
        Edit Blog
      </v-card-title>
      <div class="pa-5 pb-0">
        <v-form ref="form">
          <v-text-field color="black" label="Blog Title" v-model="title" :rules="titleRules" placeholder="Blog title"
                        outlined></v-text-field>
          <v-textarea height="250" color="black" label="Write Your Story" v-model="description" :rules="descriptionRules" placeholder="Write the story" outlined></v-textarea>
        </v-form>
      </div>
      <v-card-actions>
        <v-btn class="black white--text" dense block @click="submitForm()">save</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

import {EDIT_BLOG} from "../../graphql/mutations/editBlog";
import {GET_SINGLE_BLOG} from "../../graphql/queries/getSingleBlog";

export default {
  name: "PageEditBlog",
  data() {
    return {
      blogId: '',
      date: new Date().toISOString().substr(0, 10),
      time: '',
      dialog: true,
      menu1: false,
      menu2: false,
      snackbar: false,
      title: '',
      description: '',
      text: 'My timeout is set to 2000.',
      timeout: 2000,
      taskList: [{id: 0, checked: false, task: ''}],
      titleRules: [
        v => !!v || 'Blog title is required'
      ],
      descriptionRules: [
        v => !!v || 'Blog description is required',
        v => (v && v.length > 10) || 'Blog description must be more than 10 characters',
      ],
      Date: [
        v => !!v || 'Date is required',
      ]

    }

  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        try {
          const { data } = await this.$apollo.mutate({
            mutation: EDIT_BLOG,
            variables: {
              id: this.blogId,
              payload: {
                titel: this.title,
                Details: this.description
              }
            }
          })

          if (data !== null && data.EditBlog !== undefined ) {
            this.text = data.EditBlog.msg
            this.snackbar = true
            await this.$router.push('/')
          } else  {
            this.text = 'Failed to edit blog! Please try again.'
            this.snackbar = true
          }
        } catch (e) {
          console.error(e)
        }
      }

    }
  },
  async created() {
    this.blogId = this.$route.params.id
    const {data} = await this.$apollo.query({
      query: GET_SINGLE_BLOG,
      variables: {
        id: this.blogId
      }
    })

    if (data.GetSingleBlog.id === null) {
      alert(data.GetSingleBlog.msg)
      return
    }

    this.title = !!data.GetSingleBlog.titel ? data.GetSingleBlog.titel : ''
    this.description = !!data.GetSingleBlog.Details ? data.GetSingleBlog.Details : ''

  }
}
</script>
