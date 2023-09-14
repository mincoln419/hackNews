<template>
    <div>
      <div v-bind:key="news.id" v-for="news in fetchedNews">{{ news.title }}</div>
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