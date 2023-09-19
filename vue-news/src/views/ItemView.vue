<template>
  <div>
    <section>

      <h2>{{this.fetchItem.title}}</h2>
    </section>

    <section>
      <div v-html="this.fetchItem.content">
      </div>
    </section>


    <!-- <p></p>
    <div>
      {{this.fetchItem.content}}
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created(){
        const itemId = this.$route.query.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
  },
  computed:{
    ...mapGetters(['fetchItem'])
  }
  
}
</script>

<style scoped>

</style>