import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './react-table.css';

import NumberFormatter from 'app/components/NumberFormatter/NumberFormatter';
import * as actions from 'app/store/app/actions';
import * as selectors from 'app/store/app/selectors';

const mapStateToProps = state => ({
  data: selectors.getTickerData(state),
  limit: selectors.getLimit(state),
});

const mapDispatchToProps = {
  getTicker: actions.getTicker,
};

export class OverviewComponent extends React.Component {
  componentDidMount() {
    const { getTicker, limit } = this.props;

    getTicker(limit);
  }

  getColumns = () => [
    {
      Header: 'Rank',
      accessor: 'cmc_rank',
      maxWidth: 100,
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      id: 'price',
      Header: 'Price',
      accessor: coin => coin.quote.USD.price,
      Cell: props => <NumberFormatter value={props.value} prefix="$" />,
      maxWidth: 200,
    },
    {
      id: 'priceChange',
      Header: 'Price Change (24h)',
      accessor: coin => coin.quote.USD.percent_change_24h,
      Cell: props => <span>{`${parseFloat(props.value).toFixed(2)}%`}</span>,
      maxWidth: 200,
    },
    {
      id: 'marketCap',
      Header: 'Market Cap',
      accessor: coin => coin.quote.USD.market_cap,
      Cell: props => <NumberFormatter value={props.value} prefix="$" />,
    },
    {
      id: 'volume',
      Header: 'Volume',
      accessor: coin => coin.quote.USD.volume_24h,
      Cell: props => <NumberFormatter value={props.value} decimal={0} />,
    },
  ];

  render() {
    const { data, limit } = this.props;

    return (
      <ReactTable
        className="-striped"
        data={data}
        columns={this.getColumns()}
        minRows={0}
        pageSize={limit}
        showPagination={false}
      />
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
