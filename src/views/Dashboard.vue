<template>
  <v-container>
    <div class="Dashboard">
      <h2>Hello</h2>
      <v-btn>Button</v-btn>
      <br />
      <br />
      <v-btn rounded color="primary" dark>Rounded Button</v-btn>
      <br />
      <v-icon rounded class="ma-2" color="success">
        <v-icon left>mdi-pencil</v-icon>Edit
      </v-icon>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Dashboard"
};
</script>