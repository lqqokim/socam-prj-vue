<template>
    <v-content>
        <section>
            <v-parallax :src="getImage('section.jpg')" height="300">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">소프트웨어 캠퍼스는 여러분을 응원합니다.</div>
                    <em>Kick-start your application today</em>
                    <v-btn
                        class="blue lighten-2 mt-5"
                        dark
                        large
                        href="/pre-made-themes"
                    >Get Started</v-btn>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-5">
                    <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text>제대로된 소프트웨어 강의를 할수 있는 사람들을 육성하고, 그것을 바탕으로 건전한 개발자 생태계를 만들어 개발자들이 즐겁게 개발할 수 있는 환경을 만드는데 기여하는 커뮤니티</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.</v-card-text>
                            <v-list class="transparent">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>777-867-5309</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Chicago, US</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </v-content>
</template>

<script>
export default {
    data: () => ({
        title: 'Software Campus'
    }),
    methods: {
        getImage(img) {
            return require(`../assets/images/${img}`);
        }
    },
    components: {
        GroupList: () => import('@/components/GroupList.vue')
    }
};
</script>

