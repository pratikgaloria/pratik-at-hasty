import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from 'app/store/app/actions';
import * as selectors from 'app/store/app/selectors';

const mapStateToProps = state => ({
  limit: selectors.getLimit(state),
});

const mapDispatchToProps = ({
  setLimit: actions.setLimit,
});

export class TopbarComponent extends React.Component {
  handleLimitChange = (event) => {
    const { setLimit } = this.props;

    setLimit(event.target.value);
  }

  render() {
    const { title, limit } = this.props;

    return (
      <div>
        <span>{title}</span>
        <select onChange={this.handleLimitChange} value={limit}>
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    );
  }
}

TopbarComponent.propTypes = {
  title: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopbarComponent);
