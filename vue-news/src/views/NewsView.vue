<template>
    <div>
      <div v-bind:key="news.id" v-for="news in this.$store.state.newses">{{ news.title }}</div>
    </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>