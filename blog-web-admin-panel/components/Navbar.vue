<template>
  <div>
    <nav >
      <v-app-bar app class="black">
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase white--text">
          <span class="font-weight-bold">Our Travel</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>


      </v-app-bar>
        <v-navigation-drawer v-model="drawer" hide-overlay fixed app>
        <div class="black" style="height: 80px">
          <div class="ml-3 pt-3">
            <span class="white--text font-weight-bold text-uppercase">Our Travel</span>

          </div>


        </div>
        <v-list>
          <v-list-item v-for="(link,index) in links" :key="index" :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import Drawer from "./Drawer";
import AddPopup from "./AddPopup";
let moment = require('moment');
export default {

  name: "Navbar",
  components: {Drawer, AddPopup},
  data() {
    return {
      moment: moment,
      dialog: false,
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard', text: 'All Blog', route: '/'},
        {icon: 'mdi-view-list', text: 'Add Blog', route: '/addBlog'},
        {icon: 'mdi-account', text: 'Profile', route: '/Profile'},
        {icon: 'mdi-logout', text: 'Logout', route: '/login'}
      ],
      items: [
        {title: 'Logout', route: '/login'},
        {title: 'Profile', route: '/profile'}
      ],
    }
  }
}
</script>

<style scoped>

</style>
