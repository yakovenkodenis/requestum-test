import { ChangeEvent, FC, useRef, useState } from 'react';
import { useDataFetchOnSearch } from '../../hooks/useDataFetchOnSearch';

import { useDebounce } from '../../hooks/useDebounce';
import { Dropdown } from '../dropdown';
import { History } from './History';
import { SearchField } from './SearchField';
import './styles.scss';

const searchCriteria = ['Repositories', 'Organizations'];

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 700);
  const searchFieldRef = useRef<HTMLInputElement>(null);

  useDataFetchOnSearch(debouncedSearchTerm, searchFieldRef);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearchField = () => {
    setSearchTerm('');
  };

  const onSelectHistoryItem = (historyItem: string) => {
    setSearchTerm(historyItem);
  };

  return (
    <div className="search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Dropdown defaultOption={searchCriteria[0]} options={searchCriteria} />
        <SearchField
          ref={searchFieldRef}
          searchTerm={searchTerm}
          onChange={handleSearchTermChange}
          clear={clearSearchField}
        />
        <History searchTerm={searchTerm} onSelect={onSelectHistoryItem} />
      </form>
    </div>
  );
};
