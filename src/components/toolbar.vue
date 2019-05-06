<template>
  <v-toolbar class="toolbar" color="gray" dark extended>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-avatar color="grey lighten-4">
      <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
    </v-avatar>
    <v-toolbar-title class="white--text font-weight-medium display-2">Software Campus</v-toolbar-title>

    <template v-slot:extension>
      <!-- <v-toolbar-title class="white--text">Software Campus</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>About</v-btn>
        <v-btn flat>Community</v-btn>
        <v-btn flat>Event</v-btn>
        <v-btn flat>Source Store</v-btn>
        <v-btn flat>Notice</v-btn>
        <v-btn flat>My Page</v-btn>
      </v-toolbar-items>
    </template>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
    name: 'toolbar'
}

</script>

<style>

</style>

