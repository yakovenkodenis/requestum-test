import { FC } from 'react';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { Search } from '../search';

import './styles.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Logo />
      </div>
      <Search />
    </header>
  );
};
