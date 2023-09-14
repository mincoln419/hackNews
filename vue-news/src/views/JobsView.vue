<template>
      <div>
        <div v-bind:key="job.id" v-for="job in fetchedJobs">{{ job.title }}</div>
      </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
  computed:{
    ...mapGetters([
      'fetchedJobs'
    ])
  }
}
</script>

<style>

</style>