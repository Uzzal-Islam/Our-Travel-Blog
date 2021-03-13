<template>
  <div>
    <div>
      <Carousel/>
      <AboutUsComponent/>
      <Blogs/>
      <image-component/>
      <Members/>
      <ContactUsComponents/>

    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import Blogs from "../components/Blogs";
import AboutUsComponent from "../components/AboutUsComponent";
import ImageComponent from "../components/imageComponent";
import ContactUsComponents from "../components/ContactUsComponents";
import Members from "../components/Members";
export default {
  components: { Blogs, ContactUsComponents, ImageComponent,AboutUsComponent, Carousel, Members }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
