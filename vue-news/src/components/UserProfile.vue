<template>
        <div class="user-container">
        <div>
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div class="user-description">
          <!-- <router-link :to="`/user/${fetchItem.user}`">
            {{this.fetchItem.user}}
          </router-link>
          <div class="time">
            {{this.fetchItem.time_ago}}
          </div> -->
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
 
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>