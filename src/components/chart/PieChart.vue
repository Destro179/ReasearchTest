<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const chartData = {
    labels: ['Fee', 'Risk', 'Return'],
    datasets: [
        {
            data: [80, 0, 0],
            backgroundColor: ['#ff1744', '#ff9800', '#00c853'],
            hoverOffset: 3,
            pointRadius: 0,
            borderWidth: 1,
        },
    ],
    options: {
        plugins: {
            datalabels: {
                display: function (context: any) {
                    return context.dataset.data[context.dataIndex] !== 0 // or >= 1 or ...
                },
            },
        },
    },
}
const chartOptions = {
    responsive: true,
}

defineProps({
    chartId: {
        type: String,
        default: 'bar-chart',
    },
    datasetIdKey: {
        type: String,
        default: 'label',
    },
    width: {
        type: Number,
        default: 300,
    },
    height: {
        type: Number,
        default: 300,
    },
    cssClasses: {
        default: '',
        type: String,
    },
    styles: {
        type: Object,
        default: () => {},
    },
    plugins: {
        type: Object,
        default: () => {},
    },
})
</script>
<template>
    <Pie
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</template>
