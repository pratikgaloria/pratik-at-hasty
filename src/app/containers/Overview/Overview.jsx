import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from 'app/store/app/actions';
import * as selectors from 'app/store/app/selectors';

const mapStateToProps = state => ({
  data: selectors.getTickerData(state),
  limit: selectors.getLimit(state),
});

const mapDispatchToProps = ({
  getTicker: actions.getTicker,
  setLimit: actions.setLimit,
});

export class OverviewComponent extends React.Component {
  componentDidMount() {
    const { getTicker, limit } = this.props;

    getTicker(limit);
  }

  handleLimitChange = (event) => {
    const { setLimit } = this.props;

    setLimit(event.target.value);
  }

  render() {
    const { data, limit } = this.props;

    return (
      <div>
        <span>{`Showing ${limit} coins`}</span>
        <select onChange={this.handleLimitChange} value={limit}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        {data.map(coin => (
          <div>
            <NavLink to={`/liquidity/${coin.id}`} key={coin.name}>{coin.name}</NavLink>
          </div>
        ))}
      </div>
    );
  }
}

OverviewComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number.isRequired,
  getTicker: PropTypes.func.isRequired,
  setLimit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewComponent);
