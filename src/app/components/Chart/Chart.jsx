import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartMore from 'highcharts/highcharts-more';

import options from './options';

HighchartMore(Highcharts);

const Chart = ({ data }) => (
  <HighchartsReact
    highcharts={Highcharts}
    options={{
      ...options,
      series: [{
        data,
      }],
    }}
  />
);

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
