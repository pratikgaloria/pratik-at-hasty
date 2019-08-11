export const tooltipFormatter = (timestamp, point) => `
  <div>
    <div style="font-size: 16px"><b>${point.name}</b></div>
    <div>Market Cap: $${parseFloat(point.x).toFixed(2)}</div>
    <div>Volume: ${parseFloat(point.y).toFixed(2)}</div>
    <div>Price Change: ${parseFloat(point.z).toFixed(2)}%</div>
  </div>`;

export default {
  chart: {
    borderRadius: 5,
    plotBorderWidth: 1,
    spacing: [50, 50, 30, 30],
    type: 'bubble',
    zoomType: 'x',
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    bubble: {
      dataLabels: {
        style: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: 'normal',
          textOutline: '1px contrast',
        },
      },
    },
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.symbol}',
      },
    },
  },
  title: {
    text: '',
  },
  tooltip: {
    backgroundColor: '#313a87',
    borderRadius: 5,
    borderWidth: 0,
    followPointer: true,
    headerFormat: '<div style="font-size: 14px; font-weight: 700">{point.key}</div>',
    formatter() {
      return tooltipFormatter(this.x, this.points || this.point);
    },
    shadow: false,
    style: {
      color: '#fff',
    },
    useHTML: true,
  },
  xAxis: {
    gridLineColor: '#eee',
    gridLineWidth: 1,
    title: {
      text: 'Market Cap',
    },
  },
  yAxis: {
    gridLineColor: '#eee',
    maxPadding: 0.02,
    title: {
      text: 'Volume',
    },
  },
};
