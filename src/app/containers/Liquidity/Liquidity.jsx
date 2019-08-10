import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'app/store/app/actions';
import * as selectors from 'app/store/app/selectors';
import Chart from 'app/components/Chart/Chart';

const mapStateToProps = state => ({
  data: selectors.getTickerData(state),
  limit: selectors.getLimit(state),
});

const mapDispatchToProps = ({
  getTicker: actions.getTicker,
});

export class LiquidityComponent extends React.Component {
  componentDidMount() {
    const { getTicker, limit } = this.props;

    getTicker(limit);
  }

  createData = () => {
    const { data } = this.props;

    const series = data.map(coin => ({
      name: coin.symbol,
      x: coin.quote.USD.market_cap,
      y: coin.quote.USD.volume_24h,
      z: Math.abs(coin.quote.USD.percent_change_24h),
    }));

    return series;
  };

  render() {
    return (
      <Chart data={this.createData()} />
    );
  }
}

LiquidityComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  getTicker: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiquidityComponent);
