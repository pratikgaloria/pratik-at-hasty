import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'app/store/app/actions';
import * as selectors from 'app/store/app/selectors';

const mapStateToProps = state => ({
  data: selectors.getTickerData(state),
  limit: selectors.getLimit(state),
});

const mapDispatchToProps = ({
  getTicker: actions.getTicker,
});

export class OverviewComponent extends React.Component {
  componentDidMount() {
    const { getTicker } = this.props;

    getTicker();
  }

  render() {
    const { data, limit } = this.props;

    return (
      <div>
        <span>{`Showing ${limit} coins`}</span>
        {data.map(coin => (
          <div key={coin.name}>{coin.name}</div>
        ))}
      </div>
    );
  }
}

OverviewComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  getTicker: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewComponent);
