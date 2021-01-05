import { FC } from 'react';
import cs from 'classnames';

import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as RepoSearchIcon } from '../../icons/repo-search-icon.svg';

interface IProps {
  searchTerm?: string;
}

export const RepoListItem: FC<IProps> = ({ searchTerm }) => {
  // const repoLinkClassNames = cs({
  //     'repo-link': true,
  //     bold: repoName or repoDescription includes searchTerm? make it bold
  // });

  return (
    <li className="repo-list-item">
      <div className="repo-icon">
        <RepoSearchIcon className="repo-search-icon" />
      </div>
      <div className="repo-info">
        <div className="repo-name">
          <a href="/" className="repo-link" target="_blank" rel="noreferrer">
            <span className="repo-organization">organization/</span>
            <span className="repo-repository">repository</span>
          </a>
        </div>
        <p className="repo-description">repository description...</p>
        <div className="repo-meta">
          <a href="/" className="repo-stargazers">
            <StarIcon />
            <span>162k</span>
          </a>
          <div className="repo-language muted">JavaScript</div>
          <div className="repo-license muted">MIT license</div>
          <div className="repo-last-updated-at muted">
            Updated on May 30, 2018
          </div>
        </div>
      </div>
    </li>
  );
};
