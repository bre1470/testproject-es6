import Highcharts from 'highcharts/es-modules/masters/highcharts.src.js';
import 'highcharts/es-modules/masters/highcharts-more.src.js';
import 'highcharts/es-modules/masters/modules/boost.src.js';
import 'highcharts/es-modules/masters/modules/no-data-to-display.src.js';

const chart = Highcharts.chart('container', {
    series: [{
        type: 'line',
        data: [2, 3, 5, 7, 11, 13, 17, 19]
    }]
});

console.log(chart);