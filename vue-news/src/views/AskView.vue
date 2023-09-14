<template>
  <div>
    <p v-bind:key="ask.id" v-for="ask in fetchedAsk">
          <a :href="ask.url">{{ ask.title }}</a>
          <small> {{ask.time_ago}} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  }
}
</script>

<style>

</style>