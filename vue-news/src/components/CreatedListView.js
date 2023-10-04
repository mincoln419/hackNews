import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용할 인스턴트(컴포넌트) - HOC
        name: name,
        created() {
            bus.$emit('start:spinner');
              setTimeout(() => {
                console.log("fetched");
                this.$store.dispatch('FETCH_LIST', this.$route.name)
              .then(() => {                
                bus.$emit('end:spinner');
              })
              .catch((error) => {
                console.log(error);
              });
            },100);
          },
        render(createElement) {
            return createElement(ListView);
        }
    }
}