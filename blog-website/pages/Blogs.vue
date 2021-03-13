<template>
  <div class="mt-16">
    <div class="pt-5"></div>
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
    <div v-if="!!GetAllBlog">

<!--      <div class="mx-5 d-flex rounded" v-for="(b, index) in GetAllBlog.Blog" :key="index">
        <b-form-select v-model="search" :options="b.titel" @click="selected(item)" size="sm" class="mt-3"></b-form-select>
      </div>-->
    </div>
    <div v-if="!GetAllBlog">
      <h4 class="text-center py-5">
        There is no blogs
      </h4>
    </div>
    <div class="row p-5" v-if="!!GetAllBlog">
      <div class="col-6 pb-5" v-for="(blog, index) in GetAllBlog.Blog" :key="index">
        <b-card v-model="search">
          <b-card-header>

              <b-img class='float-right' height='60px' width='60px' src='https://image.flaticon.com/icons/png/512/43/43078.png'></b-img>
            <b>{{ blog.titel }}</b>
            <p class="mb-0">Post No: {{ index + 1 }}</p>
            <p></p>
          </b-card-header>
          <b-card-body>
            <p>{{ blog.Details }}</p>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import {GET_ALL_BLOG} from "~/graphql/query/getAllBlogs";
export default {
  name: "Blogs",
  data() {
    return {
      search: '',
      Blogs: []
    }
  },
  apollo: {
    GetAllBlog: GET_ALL_BLOG
  },
    computed: {
      searching() {
      }
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      },
      selected(item) {

      }
    }
}

</script>

<style scoped>

</style>
