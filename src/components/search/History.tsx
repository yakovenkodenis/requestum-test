import { FC } from 'react';
import { HistoryItem } from './HistoryItem';

import { ReactComponent as RepoSearchIcon } from '../../icons/repo-search-icon.svg';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/redux/configureStore';

interface IProps {
  searchTerm: string;
  onSelect: (value: string) => void;
}

export const History: FC<IProps> = ({ searchTerm, onSelect }) => {
  const historyItems = useSelector(
    (state: RootState) => state.search.historyItems
  );

  const hitsoryItemElements = historyItems.map((item, index) => (
    <HistoryItem
      key={index}
      value={item}
      icon={<RepoSearchIcon className="repo-search-icon" />}
      onSelectItem={onSelect}
    />
  ));

  return (
    <div className="autocomplete">
      <ul>
        {searchTerm.length > 0 && (
          <HistoryItem
            value={searchTerm}
            icon={<SearchIcon className="search-icon" />}
            onSelectItem={onSelect}
          />
        )}
        {hitsoryItemElements.length > 0 && hitsoryItemElements}
      </ul>
    </div>
  );
};
