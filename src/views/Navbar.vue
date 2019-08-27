<template>
  <nav>
    <v-app-bar app dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title class="headline">
        <span class="font-weight-light font-weight-bold display-1">POS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="/">
        <v-icon left>mdi-home</v-icon>
        <span class="md-2">Home</span>
      </v-btn>
      <v-btn text href="/">
        <v-icon left>mdi-account-circle</v-icon>
        <span class="md-2">Register</span>
      </v-btn>
    </v-app-bar>
    <Navigation />
  </nav>
</template>

<script>
import Navigation from "./Navigation";
export default {
  name: "Navbar",
  components: {
    Navigation
  }
};
</script>
