<template>
    <div>
        <user-profile :info="userInfo">
            <div slot="username">
                {{ userInfo.id }}
            </div>
            <span slot="time">
                {{ 'Joined ' +userInfo.created }}
            </span>
            <div slot="karma">
                {{ userInfo.karma }}
            </div>
        </user-profile>
    </div>
</template>

<script>
import axios from 'axios';
import UserProfile from '@/components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    computed:{
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userId);
    },
}
</script>

<style>

</style>