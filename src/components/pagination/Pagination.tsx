import { FC } from 'react';
import { Gap } from './Gap';
import { PageButton } from './PageButton';
import './styles.scss';

export const Pagination: FC = () => {
  return (
    <div className="pagination-container">
      <div className="pagination">
        <PageButton value="❮ Previous" isDisabled />
        <PageButton value="1" isCurrent />
        <PageButton value="2" />
        <PageButton value="3" />
        <PageButton value="4" />
        <Gap />
        <PageButton value="10" />
        <PageButton value="11" />
        <PageButton value="Next ❯" />
      </div>
    </div>
  );
};
