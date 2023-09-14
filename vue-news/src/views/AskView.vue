<template>
  <div>
    <div v-bind:key="ask.id" v-for="ask in this.$store.state.asks">{{ ask.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>