<template>
  <v-app light>
    <!-- <v-progress-linear class="progress" :indeterminate="true" height="5"></v-progress-linear> -->

    <v-progress-linear :indeterminate="true" class="ma-0" height="6"></v-progress-linear>

    <!-- <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>-->
    <Toolbar/>

    <v-content>
      <section>
        <v-parallax :src="getImage('hero.jpeg')" height="300">
          <v-layout column align-center justify-center class="white--text">
            <!-- <img :src="getImage('vuetify.png')" alt="Vuetify.js" height="200"> -->
            <h1 class="white--text mb-2 display-2 text-xs-center">모집중인 모임</h1>
            <!-- <div class="subheading mb-3 text-xs-center">Powered by Socam</div> -->
            <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn> -->
          </v-layout>
        </v-parallax>`
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <!-- <div class="text-xs-center">
              <h1 class="font-weight-bold display-1">모집중인 모임</h1>
              <span class="subheading">Cras facilisis mi vitae nunc</span>
            </div> -->
          </v-flex>

          <group-list></group-list>

        </v-layout>
      </section>

      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./../components/Toolbar";
import Footer from "./../components/Footer";
import GroupList from "./../components/GroupList";

export default {
  data: () => ({
    title: "Software Campus"
  }),
  methods: {
    getImage(img) {
      return require(`../assets/images/${img}`);
    }
  },
  components: {
    Toolbar,
    Footer,
    GroupList
  }
};
</script>

<style scoped>
.toolbar {
  /* background-color: gray !important; */
  /* opacity: 0.5;
  z-index: 1; */
}

/* .parallex {
  position: absolute;
  z-index: 0;
  width: 100%;
}

.footer {
  position: absolute;
  bottom: 0;
}

.progress {
  margin: 0;
} */
</style>
