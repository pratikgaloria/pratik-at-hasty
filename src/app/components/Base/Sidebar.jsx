import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { routes } from 'app/config/Routes';
import styles from './Sidebar.scss';

class Sidebar extends React.PureComponent {
  render() {
    return (
      <nav className={classnames(styles.sidebar)}>
        <div className={styles.container}>
          <div className={styles.logo} />
          <div className={styles.menu}>
            {routes.map(route => (
              <NavLink
                key={route.id}
                exact
                to={route.path}
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                <i className={route.icon} />
                <div className={styles.linkLabel}>
                  <span className={styles.linkLabelTitle}>{route.id}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
