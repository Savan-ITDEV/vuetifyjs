<template>
  <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent>
    <template v-slot:prepend>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon> mdi-keyboard-backspace</v-icon>
          </v-btn>
        </v-list-item>

        <v-list-item link two-line>
          <v-list-item-content>
            <v-list-item-title class="title">Sandra Adams</v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-home-city" ,route:'/'},
        { title: "Managerment", icon: "mdi-account",route:'/managerment' },
        { title: "Service", icon: "mdi-account-group-outline",route:'/service' }
      ],
      mini: true
    };
  }
};
</script>
