<template>
  <div>
    <section>
      <user-profile :info="fetchItem">
        <router-link slot="username" :to="`/user/${fetchItem.user}`">
          {{ this.fetchItem.user }}
        </router-link>
        <template slot="time">
          {{ 'Posted ' + this.fetchItem.time_ago }}
        </template>
      </user-profile>
      
    </section>
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
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
        UserProfile,
  },
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