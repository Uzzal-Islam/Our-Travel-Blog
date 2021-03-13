<template>
    <div class="mt-5 pt-5">
      <h3 class="display-3 pt-5 text-center">
        Blogs
      </h3>
      <div class="row">
        <p class="col-3"></p>
        <p class="text-center col-6" style="font-size: 20px">
          Write reviews, guides, journals, add photos. Here you can see your own Artical. So hurry up write something
          about travelling. Share with us and send a mail with all details!
        </p>
        <p class="col-3"></p>
      </div>
      <div class="row p-5" v-if="!!GetAllBlog">

       <div class="col-6" v-for="(blog, index) in GetAllBlog.Blog" :key="index">
         <b-card v-if="index<2">
           <b-card-header>
             <b>{{blog.titel}}</b>
             <p>Post No: {{index+1}}</p>
           </b-card-header>
           <b-card-body>
             <p>{{blog.Details}}</p>
           </b-card-body>
         </b-card>
       </div>
      </div>
      <div class="text-center mb-5 pb-5">
        <b-button variant="secondary" to="/Blogs">
          View All Blogs
        </b-button>
      </div>
    </div>
</template>

<script>
  import {GET_ALL_BLOG} from "~/graphql/query/getAllBlogs";

  export default {
    name: "Blogs",
    data() {
      return {
        Blogs: []
      }
    },
    apollo: {
      GetAllBlog: GET_ALL_BLOG
    }
  }
</script>

<style scoped>

</style>
