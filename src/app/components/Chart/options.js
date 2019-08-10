export default {
  chart: {
    type: 'bubble',
    zoomType: 'x',
  },
  title: {
    text: 'My chart',
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
    },
  },
};
