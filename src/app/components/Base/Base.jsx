import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import Topbar from 'app/containers/Topbar/Topbar';
import { routes } from 'app/config/Routes';
import Sidebar from './Sidebar';
import styles from './Base.scss';

class Base extends React.PureComponent {
  render() {
    const { children, location } = this.props;
    const route = routes.find(r => r.path === location.pathname);

    return (
      <div className={styles.main}>
        <Sidebar />
        <div className={classnames(styles.container)}>
          <Topbar title={route.title || route.id} />
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
  location: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Base);
