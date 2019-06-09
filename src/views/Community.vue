<template>
    <v-content>
        <v-parallax :src="getImage('hero.jpeg')" height="200">
            <v-layout column align-center justify-center class="white--text">
                <!-- <img :src="getImage('vuetify.png')" alt="Vuetify.js" height="200"> -->
                <h1 class="white--text mb-2 display-1 text-xs-center">모집중인 모임</h1>
                <!-- <div class="subheading mb-3 text-xs-center">Powered by Socam</div> -->
                <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">Get Started</v-btn> -->
            </v-layout>
        </v-parallax>

        <group-list></group-list>
    </v-content>
</template>

<script>
export default {
    data: () => ({
        title: 'Software Campus'
    }),
    methods: {
        getImage(img) {
            return require(`../assets/images/${img}`)
        }
    },
    components: {
        GroupList: () => import('@/components/GroupList')
    }
}
</script>

<style scoped>
</style>
