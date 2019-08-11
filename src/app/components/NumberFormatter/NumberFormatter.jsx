import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const NumberFormatter = ({ value, prefix, decimal }) => (
  <NumberFormat
    decimalScale={decimal}
    displayType="text"
    prefix={prefix}
    thousandSeparator
    value={value}
  />
);

NumberFormatter.propTypes = {
  decimal: PropTypes.number,
  prefix: PropTypes.string,
  value: PropTypes.number,
};

NumberFormatter.defaultProps = {
  decimal: 2,
  prefix: '',
  value: 0,
};

export default NumberFormatter;
