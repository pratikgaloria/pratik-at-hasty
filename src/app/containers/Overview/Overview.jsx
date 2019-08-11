import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Topbar from 'app/containers/Topbar/Topbar';
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
    const { getTicker, limit } = this.props;

    getTicker(limit);
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <Topbar title="Market Overview" />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OverviewComponent);
