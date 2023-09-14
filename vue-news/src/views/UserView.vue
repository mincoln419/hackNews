<template>
    <div>
        <p>name: {{ userInfo.id }}</p>
        <p>karma: {{ userInfo.karma }}</p>
        <p>created: {{ userInfo.created }}</p>


    </div>
</template>

<script>
import axios from 'axios';

export default {
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