import { FC } from 'react';
import { HistoryItem } from './HistoryItem';

import { ReactComponent as RepoSearchIcon } from '../../icons/repo-search-icon.svg';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

interface IProps {
  searchTerm: string;
  maxLength?: number;
}

export const History: FC<IProps> = ({ searchTerm, maxLength = 5 }) => {
  const historyItems = [{ value: 'text' }];

  const hitsoryItemElements = historyItems.map((item) => (
    <HistoryItem
      value={item.value}
      icon={<RepoSearchIcon className="repo-search-icon" />}
    />
  ));

  return (
    <div className="autocomplete">
      <ul>
        {searchTerm.length > 0 && (
          <HistoryItem
            value={searchTerm}
            icon={<SearchIcon className="search-icon" />}
          />
        )}
        {hitsoryItemElements}
      </ul>
    </div>
  );
};
