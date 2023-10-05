<template>
    <div>
        <canvas ref="barChart" id="myChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
export default {
    props : ['propsdata'],
    mounted() {
        const ctx = this.$refs.barChart;

        new this.$_Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: this.propsdata,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                onClick: ()=> this.$emit('refresh:chart')
            }
        });
    }
}
</script>

<style></style>