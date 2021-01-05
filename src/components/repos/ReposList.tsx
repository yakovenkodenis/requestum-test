import { FC } from 'react';
import { Pagination } from '../pagination';
import { SkeletonRepo } from '../skeleton/SkeletonRepo';

import { RepoListItem } from './RepoListItem';
import './styles.scss';

export const ReposList: FC = () => {
  return (
    <main className="container">
      <h3 className="search-results-title">4,976,514 repository results</h3>

      <ul className="repos-list">
        <SkeletonRepo />
        <SkeletonRepo />
        <SkeletonRepo />
        <SkeletonRepo />

        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
        <RepoListItem />
      </ul>

      <Pagination />
    </main>
  );
};
