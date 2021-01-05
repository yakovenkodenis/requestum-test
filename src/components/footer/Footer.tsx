import { FC } from 'react';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import './styles.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Logo className="footer-logo" />
    </footer>
  );
};
