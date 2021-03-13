<template>
  <div class="pt-5">
    <h3 class="mt-5 display-3 text-center">
      About Us
    </h3>
    <div class="row">
      <p class="col-3"></p>
      <p class="text-center col-6" style="font-size: 20px">
        This is our Travel Blog. Travel Blog is a unique free online travel diary for travelers across the world.
        This blog is a web based journal. Lots of travelers write down a daily journal or at least intend to,
        so the idea here is that we can write down our journal online.
        We encourage our members to link to useful sites about areas, to help out future travelers.
      </p>
      <p class="col-3"></p>
    </div>
    <div class="container-fluid p-5">
      <div class="row">
        <div class="col-6">
          <img height="450px"
               src="https://image.freepik.com/free-photo/aerial-view-computer-laptop-wooden-table-photography-hobby-concept_53876-24773.jpg"
               alt="Notebook" style="width:100%;">
          <div class="content">
            <h1>Future Travel</h1>
            <p>Photos can be added to your blog if you have a digital camera.
              We encourage our members to link to useful sites about areas, to help out future travellers.
              Write reviews, guides, journals, add photos.</p>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">
          <div class="text-center">
            <h1>To Know More About Us</h1>
            <p>Click Here</p>
            <div>
              <a target='_blank' href="https://www.facebook.com/">Facebook</a> /
              <a href="tel:01770311981">Whatsapp</a> /
              <a target='_blank' href="https://www.instagram.com/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
  export default {
    name: "AboutUsComponent"
  }
</script>

<style scoped>
  .container-fluid {
    position: relative;
    max-height: 500px;
    margin: 0 auto;
  }

  .container-fluid img {
    vertical-align: middle;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: brightness(50%);
  }

  .container-fluid .content {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    color: #f1f1f1;
    width: calc(100% - 30px);
    padding: 20px;
  }
</style>
