import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrganizations,
  fetchRepos,
} from '../../core/redux/actions/data/data.thunks';
import {
  setCurrentSearchTerm,
  setSearchHistory,
} from '../../core/redux/actions/search/search.actions';
import { RootState } from '../../core/redux/configureStore';

import { useDebounce } from '../../hooks/useDebounce';
import { Dropdown } from '../dropdown';
import { History } from './History';
import { SearchField } from './SearchField';
import './styles.scss';

const searchCriteria = ['Repositories', 'Organizations'];

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const currentSearchCriteria = useSelector(
    (state: RootState) => state.search.criteria
  );
  const searchFieldRef = useRef<HTMLInputElement>(null);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearchField = () => {
    setSearchTerm('');
  };

  const onSelectHistoryItem = (historyItem: string) => {
    setSearchTerm(historyItem);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      if (currentSearchCriteria === 'Organizations') {
        dispatch(fetchOrganizations(debouncedSearchTerm));
      }

      if (currentSearchCriteria === 'Repositories') {
        dispatch(fetchRepos(debouncedSearchTerm));
      }

      dispatch(setCurrentSearchTerm(debouncedSearchTerm));
      dispatch(setSearchHistory(debouncedSearchTerm));

      if (searchFieldRef?.current) {
        searchFieldRef.current.blur();
      }
    }
  }, [debouncedSearchTerm, currentSearchCriteria, dispatch]);

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
