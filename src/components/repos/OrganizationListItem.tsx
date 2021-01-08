import { FC } from 'react';

import { Organization } from '../../core/entities/dataEntities';
import { truncate } from '../../core/utils/truncate';

interface IProps {
  login: Organization['login'];
  name: Organization['name'];
  description: Organization['description'];
  html_url: Organization['html_url'];
  avatar_url: Organization['avatar_url'];
}

export const OrganizationListItem: FC<IProps> = ({
  name,
  login,
  description,
  html_url,
  avatar_url,
}) => {
  const truncatedDescription = truncate(description ?? '', 350);
  const displayName = name || login;

  return (
    <li className="organization-list-item">
      <div className="repo-icon">
        <img
          src={avatar_url}
          className="organization-avatar"
          alt="Organization avatar"
        />
      </div>
      <div className="organization-info">
        <div className="repo-name">
          <a
            href={html_url}
            className="repo-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="organization-name">{displayName}</span>
          </a>
        </div>
        <p className="organization-description">{truncatedDescription}</p>
      </div>
    </li>
  );
};
