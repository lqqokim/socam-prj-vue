<template>
    <v-app id="v-app" light>
        <!-- <v-progress-linear :indeterminate="true" class="ma-0" height="6"></v-progress-linear> -->
        <CoreNavigationDrawer></CoreNavigationDrawer>
        <core-toolbar/>

        <router-view/>

        <core-footer/>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        isLoading: true,
    }),
    components: {
        CoreToolbar: () => import('@/components/core/Toolbar'),
        CoreFooter: () => import('@/components/core/Footer'),
        CoreNavigationDrawer: () => import('@/components/core/NavigationDrawer')
    },
    mounted() {
        document.addEventListener('scroll', event => {
            const scrolled = document.scrollingElement.scrollTop;
            if (!scrolled) {
                this.$store.commit('setScroll', true);
                return;
            }

            this.$store.commit('setScroll', false);
        });
    }
};
</script>