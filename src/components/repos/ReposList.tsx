import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/redux/configureStore';
import { commaNumberFormatter } from '../../core/utils/formatters';
import { Pagination } from '../pagination';
import { SkeletonRepo } from '../skeleton/SkeletonRepo';
import { Spinner } from '../spinner';
import { OrganizationListItem } from './OrganizationListItem';

import { RepoListItem } from './RepoListItem';
import './styles.scss';

const SkeletonList: FC = () => (
  <>
    <SkeletonRepo />
    <SkeletonRepo />
    <SkeletonRepo />
    <SkeletonRepo />
    <SkeletonRepo />
    <SkeletonRepo />
    <SkeletonRepo />
  </>
);

const ListComponentsMap = {
  repository: RepoListItem,
  organization: OrganizationListItem,
};

export const ReposList: FC = () => {
  const isPending = useSelector((state: RootState) => state.ui.pending);
  const data = useSelector((state: RootState) => state.data);
  const searchCriteria = useSelector(
    (state: RootState) => state.search.criteria
  );

  let items = null;
  let totalResultsCount = null;

  if (data && data.items) {
    items = data.items.map((item) =>
      React.createElement(ListComponentsMap[data.type] as FC, {
        key: item.id,
        ...item,
      })
    );

    totalResultsCount = `${commaNumberFormatter(data.total_count)} ${
      data.total_count === 1 ? 'result' : 'results'
    }`;
  }

  return (
    <main className="container">
      {isPending ? (
        <Spinner />
      ) : (
        data.meta.lastPage > 0 && (
          <h3 className="search-results-title">{totalResultsCount}</h3>
        )
      )}

      <ul className="repos-list">
        {isPending ? (
          <SkeletonList />
        ) : items && items.length > 0 ? (
          <>{items}</>
        ) : (
          data.meta.lastPage === 0 && (
            <div className="text-big text-center welcome-text">
              Let's search some GitHub {searchCriteria.toLowerCase()}
            </div>
          )
        )}
      </ul>

      {data.meta.lastPage > 0 && data.total_count > 0 && (
        <Pagination length={data.meta.lastPage} />
      )}
    </main>
  );
};
