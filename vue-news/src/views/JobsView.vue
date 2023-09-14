<template>
      <div>
        <p v-bind:key="job.id" v-for="job in fetchedJobs">
          <a :href="job.url">{{ job.title }}</a>
          <small> {{job.time_ago}} by {{ job.domain }}</small>
        </p>
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