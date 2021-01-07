import { FC } from 'react';
import parseISO from 'date-fns/parseISO';
import formatDistance from 'date-fns/formatDistance';

import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as RepoSearchIcon } from '../../icons/repo-search-icon.svg';
import { Repository } from '../../core/entities/dataEntities';
import { truncate } from '../../core/utils/truncate';
import { kNumberFormatter } from '../../core/utils/formatters';

interface IProps {
  full_name: Repository['full_name'];
  description: Repository['description'];
  html_url: Repository['html_url'];
  language: Repository['language'];
  stargazers_count: Repository['stargazers_count'];
  updated_at: Repository['updated_at'];
  license: Repository['license'];
}

export const RepoListItem: FC<IProps> = ({
  full_name,
  description,
  html_url,
  language,
  stargazers_count,
  updated_at,
  license,
}) => {
  const [organization, name] = full_name.split('/');
  const truncatedDescription = truncate(description ?? '', 350);
  let licenseName = '';

  if (license?.name) {
    licenseName = truncate(license?.name ?? '', 24);
  }

  const lastUpdatedAt = formatDistance(parseISO(updated_at), new Date(), {
    addSuffix: true,
  });
  const stars = kNumberFormatter(stargazers_count);

  return (
    <li className="repo-list-item">
      <div className="repo-icon">
        <RepoSearchIcon className="repo-search-icon" />
      </div>
      <div className="repo-info">
        <div className="repo-name">
          <a
            href={html_url}
            className="repo-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="repo-organization">{organization}/</span>
            <span className="repo-repository bold">{name}</span>
          </a>
        </div>
        <p className="repo-description">{truncatedDescription}</p>
        <div className="repo-meta">
          <a href="/" className="repo-stargazers">
            <StarIcon />
            <span>{stars}</span>
          </a>
          {language && <div className="repo-language muted">{language}</div>}
          {licenseName && (
            <div className="repo-license muted">{licenseName}</div>
          )}
          <div className="repo-last-updated-at muted">
            Last updated {lastUpdatedAt}
          </div>
        </div>
      </div>
    </li>
  );
};
