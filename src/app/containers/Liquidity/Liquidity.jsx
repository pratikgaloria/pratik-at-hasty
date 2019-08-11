import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topbar from 'app/containers/Topbar/Topbar';
import Chart from 'app/components/Chart/Chart';
import * as actions from 'app/store/app/actions';
import * as selectors from 'app/store/app/selectors';
import styles from './Liquidity.scss';

const mapStateToProps = state => ({
  data: selectors.getTickerData(state),
  limit: selectors.getLimit(state),
});

const mapDispatchToProps = ({
  getTicker: actions.getTicker,
});

export class LiquidityComponent extends React.Component {
  componentDidMount() {
    const { data, getTicker, limit } = this.props;

    if (!data.length) {
      getTicker(limit);
    }
  }

  createData = () => {
    const { data } = this.props;

    const series = data.map(coin => ({
      name: coin.name,
      symbol: coin.symbol,
      x: coin.quote.USD.market_cap,
      y: coin.quote.USD.volume_24h,
      z: Math.abs(coin.quote.USD.percent_change_24h),
      color: coin.quote.USD.percent_change_24h < 0 ? '#be2623' : '#098952',
    }));

    return series;
  };

  render() {
    return (
      <div className={styles.container}>
        <Topbar title="Liquidity" />
        <div className={styles.content}>
          <Chart data={this.createData()} />
        </div>
      </div>
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
