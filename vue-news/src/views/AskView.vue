<template>
  <div>
    <div v-bind:key="ask.id" v-for="ask in fetchedAsk">{{ ask.title }}</div>
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