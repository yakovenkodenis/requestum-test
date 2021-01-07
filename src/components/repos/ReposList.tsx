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

  // if (data && data.type === 'repository') {
  //   items = data.items.map((item) => (
  //     <RepoListItem key={item.id} repository={item} />
  //   ));
  // }

  // if (data && data.type === 'organization') {
  //   items = data.items.forEach((item) => {
  //     console.log(item);
  //   });
  // }

  return (
    <main className="container">
      {isPending ? (
        <Spinner />
      ) : (
        data && <h3 className="search-results-title">{totalResultsCount}</h3>
      )}

      <ul className="repos-list">
        {isPending ? (
          <SkeletonList />
        ) : items && items.length > 0 ? (
          <>{items}</>
        ) : (
          <div>Let's search...</div>
        )}
      </ul>

      <Pagination length={data.meta.lastPage} />
    </main>
  );
};
