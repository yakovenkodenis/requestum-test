import { FC } from 'react';

import './styles.scss';

interface IProps {
  type: string;
}

export const SkeletonElement: FC<IProps> = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};
