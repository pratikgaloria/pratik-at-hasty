import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setLimit } from 'app/store/app/actions';
import { getLimit } from 'app/store/app/selectors';

const mapStateToProps = state => ({
  limit: getLimit(state),
});

const mapDispatchToProps = ({
  setCoinsLimit: setLimit,
});

const Overview = ({ limit, setCoinsLimit }) => (
  <div>
    <div>{limit}</div>
    <button type="button" onClick={() => setCoinsLimit(3)}>Set limit</button>
  </div>
);

Overview.propTypes = {
  limit: PropTypes.number.isRequired,
  setCoinsLimit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
