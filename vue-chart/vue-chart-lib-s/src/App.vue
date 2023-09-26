<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></bar-chart>
    <line-chart></line-chart>
  </div>      
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

export default {
  components:{
    BarChart,
    LineChart,
  },
  methods:{
    refreshChart(){
      this.chartDataSet= [10,20];
    }
  },
  data() {
    return {
      chartDataSet: [12, 19, 3, 5, 2, 3]
    }
  },
  // created() {
  //   axios.get('charts/line/1')
  //   .then(response => this.chartDataSet = response.data)
  //   .catch(error => console.log(error));
  // }
}
</script>

<style>

</style>