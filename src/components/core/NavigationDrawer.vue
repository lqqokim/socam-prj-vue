<template>
    <v-layout wrap style="height: 200px;">
        <!-- <v-container>
            <v-layout justify-center>
                <v-btn color="pink" dark @click.stop="isDrawerOpen = !isDrawerOpen">Toggle</v-btn>
            </v-layout>
        </v-container>-->

        <v-navigation-drawer v-model="$store.state.isDrawerOpen" absolute temporary>
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="item in items" :key="item.title" @click>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: '마이페이지', icon: 'dashboard' },
                { title: '대시보드', icon: 'question_answer' },
                { title: '쪽지함', icon: 'question_answer' },
                { title: 'QnA', icon: 'question_answer' }
            ],
            drawer: this.$store.state.isDrawerOpen
        };
    },
    watch: {
        drawer: {
            immediate: false,
            handler: function(newVal) {
                this.$store.commit('setDrawerOpen', newVal);
            }
        }
    },
    computed: {
        adrawer(a) {
            return a;
        }
    }
};
</script>

<style>
</style>
