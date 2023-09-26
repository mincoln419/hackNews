<template>
    <div>
        <canvas ref="lineChart" id="myChart2" width="400" height="400"></canvas>
    </div>
</template>

<script>

const labels = [5, 10 , 15, 20, 25, 30, 35];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

export default {

    mounted() {
        const ctx = this.$refs.lineChart;

        new this.$_Chart(ctx, {
            type: 'line',
            data: data,
        });
    }
}
</script>

<style></style>