import { FC } from 'react';

import { Shimmer } from './Shimmer';
import { SkeletonElement } from './SkeletonElement';

export const SkeletonRepo: FC = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};
