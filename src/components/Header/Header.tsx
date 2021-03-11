import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.scss';

const Header: React.FC = () => (
  <header className={styles['header']}>
    <div className={styles['container']}>
      <nav className={styles['main-navigation']}>
        <li className={styles['main-navigation__link']}>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className={styles['main-navigation__link']}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </nav>
    </div>
  </header>
);

export default Header;
