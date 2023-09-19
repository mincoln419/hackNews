<template>
    <div>
        <UserProfile></UserProfile>
    </div>
</template>

<script>
import axios from 'axios';
import UserProfile from '@/components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    created(){
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userId);
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    }
}
</script>

<style>

</style>