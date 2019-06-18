<template>
    <!-- <v-toolbar :flat="$store.state.isScrollTop" app extended> -->
    <v-toolbar :flat="$store.state.isScrollTop" app>
        <!-- <v-toolbar-side-icon class="hidden-md-and-up">

        </v-toolbar-side-icon>-->
        <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
            <v-list>
                <v-list-tile v-for="item in menu" :key="item.icon">
                    <v-list-tile-content>
                        <v-list-tile-title to>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-avatar color="grey lighten-4">
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>

        <v-toolbar-title class="font-weight-medium display-1">Software Campus</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/about">About</v-btn>
            <v-btn flat to="/community">Community</v-btn>
            <v-btn flat to="/">모임</v-btn>
            <v-avatar class="user-img" @click.stop="drawer = !drawer">
                <img src="https://randomuser.me/api/portraits/men/24.jpg" alt="John">
            </v-avatar>
        </v-toolbar-items>

        <!-- 
        <div class="text-xs-center">
            <v-badge left>
                <template v-slot:badge>
                    <span>6</span>
                </template>
                <v-icon large color="grey lighten-1">shopping_cart</v-icon>
            </v-badge>

            <v-badge color="red">
                <template v-slot:badge>
                    <span>!</span>
                </template>
                <v-icon large color="grey">mail</v-icon>
            </v-badge>
        </div>-->

        <!-- <template v-slot:extension>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/about">About</v-btn>
                <v-btn flat to="/community">Community</v-btn>
                <v-btn flat to="/">모임</v-btn>
                <v-btn flat to="/">로그인</v-btn>
                <v-btn flat to="/">회원 가입</v-btn>
                <v-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>

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
            </v-toolbar-items>
        </template>-->
    </v-toolbar>
</template>

<script>
export default {
    data: () => ({
        menu: [{ title: '' }],
        drawer: false
    }),
    components: {
        NavagationDrawer: () => import('./NavigationDrawer')
    },
    watch: {
        drawer: function(val) {
            this.$store.commit('setDrawerOpen', val);
            console.log('toolbar', val);
        }
    },
    created() {},
    methods: {}
};
</script>

<style>
.user-img {
    cursor: pointer;
}
</style>

