<template>
      <div>
      <ul class="item-list">
        <li class="post" v-bind:key="item.id" v-for="item in fetchedItems">
          <div class="points">
            {{ item.points || 0}}
          </div>
          <div>
            <p class="item-title">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </p>
            <small class="link-text">
              {{item.time_ago}} by 
            <template v-if="item.domain">
                <a :href="item.url">{{ item.domain }}</a>
            </template>
            <template v-else>
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            </template>
            </small>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  computed:{
    fetchedItems(){
        return this.$store.state.list;
    }
  }
}
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.item-title {
  margin: 0;
}
.link-text {
  color: #84878b
}
</style>