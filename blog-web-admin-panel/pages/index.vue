<template>
  <div class="dashboard">
    <h4 class="subheading grey--text pa-5">All Blogs</h4>
    <v-container>
     <v-card class="grey lighten-4">
       <v-card-title class="black white--text">
         Blogs
         <v-spacer></v-spacer>
         <v-text-field
             v-model="search"
             append-icon="mdi-magnify"
             label="Search"
             single-line
             hide-details
             solo
             dense
             full-width
         ></v-text-field>
       </v-card-title>
       <v-data-table
           :headers="headers"
           :options.sync="options"
           :items="blogs"
           :server-items-length="blogs.length"
           :search="search"
           class="grey lighten-4 pa-5"
       >
         <template v-slot:item.slNo="{ index }">
           {{ index + 1 }}
         </template>

         <template v-slot:item.createdAt="{item}">
           <span>{{ item.createdAt | milliToDate }}</span>
         </template>

         <template v-slot:item.updatedAt="{item}">
           <span>{{ item.updatedAt | milliToDate }}</span>
         </template>

         <template v-slot:item.actions="{index, item}">
           <v-btn class="mr-1" small color="info" rounded text outlined :to="`/${item.id}/edit`">
             Edit
           </v-btn>
           <v-btn small color="error" rounded text outlined @click="deleteBlog(index, item)">
             Delete
           </v-btn>
         </template>
       </v-data-table>
     </v-card>
    </v-container>
  </div>
</template>

<script>

import EditList from "../components/EditListPopup";
import {GET_ALL_BLOG} from "../graphql/queries/getAllBlog";
import moment from "moment";
import {EDIT_BLOG} from "../graphql/mutations/editBlog";
import {DELETE_BLOG} from "../graphql/mutations/deleteBlog";

export default {
  components: {
    EditList,
  },
  data() {
    return {
      time: '',
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,
      taskList: [{id: 0, checked: false, task: ''}],
      deleteDialog: false,
      delete: false,
      blogs: [],
      search: '',
      headers: [
        {
          text: 'SL No.',
          value: 'id'
        },
        {text: 'Title', value: 'titel'},
        {text: 'Blog', value: 'Details'},
        {text: 'Created At', value: 'createdAt'},
        {text: 'Updated At', value: 'updatedAt'},
        {text: 'Actions  ', value: 'actions'}
      ],
      options: {
        page: 1,
        itemsPerPage: 5,
        pageCount: 0,
        itemsLength: 0
      },
    }
  },
  filters: {
    milliToDate(milli) {
      return moment(parseInt(milli)).format('ddd, MMMM Do YYYY, h:mm:ss A')
    }
  },
  methods: {
    async getAllBlog() {
      const {data} = await this.$apollo.query({
        query: GET_ALL_BLOG
      })

      if (data.GetAllBlog !== null && data.GetAllBlog.Blog !== undefined) {
        this.blogs = data.GetAllBlog.Blog
      }
    },
    async deleteBlog (index, item) {
      const value = await this.$confirm('Are you sure, do you really want to delete the blog?<br><br>Blog Title: ' + item.titel)

      if (value) {
        const {data} = await this.$apollo.mutate({
          mutation: DELETE_BLOG,
          variables: {
            id: this.blogId
          }
        })
        if (data !== null && data.EditBlog !== undefined ) {
          this.text = 'Deleted'
          this.snackbar = true
          this.blogs.splice(index, 1)
        } else  {
          this.text = 'Failed to delete blog! Please try again.'
          this.snackbar = true
        }
      }
    },

  },
  async created() {
    await this.getAllBlog()
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}
</style>
