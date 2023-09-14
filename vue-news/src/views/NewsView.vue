<template>
    <div>
      <p v-bind:key="news.id" v-for="news in fetchedNews">
        <a v-bind:href="news.url">{{ news.title }}</a>
        <small> 
          {{news.time_ago}} by 
          <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
        </small>
      </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
  computed:{
    ...mapGetters([
      'fetchedNews'
    ])
  }
}
</script>

<style>

</style>