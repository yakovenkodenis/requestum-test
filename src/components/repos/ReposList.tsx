import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/redux/configureStore';
import { commaNumberFormatter } from '../../core/utils/formatters';
import { useReposListData } from '../../hooks/useReposListData';
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

const listComponentsMap = {
  repository: RepoListItem,
  organization: OrganizationListItem,
};

export const ReposList: FC = () => {
  const searchCriteria = useSelector(
    (state: RootState) => state.search.criteria
  );

  const { isPending, items, data } = useReposListData(listComponentsMap);
  let totalResultsCount = null;

  if (items) {
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
