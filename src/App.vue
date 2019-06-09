<template>
    <intro-view v-if="$route.path === '/'"/>
    <main-view v-else/>
</template>

<script>
export default {
    name: 'App',
    components: {
        IntroView: () => import('@/views/Intro'),
        MainView: () => import('@/views/Main')
    }
}
</script>


<style>
html {
    overflow-y: auto;
}
</style>
