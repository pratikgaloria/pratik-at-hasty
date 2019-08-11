import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import styles from './Base.scss';
import Sidebar from './Sidebar';

class Base extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.main}>
        <Sidebar />
        <div className={classnames(styles.container)}>
          <section className={styles.content}>
            {children}
          </section>
        </div>
      </div>
    );
  }
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Base);
