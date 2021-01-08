import { RefObject, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrganizations,
  fetchRepos,
} from '../core/redux/actions/data/data.thunks';
import {
  setCurrentSearchTerm,
  setSearchHistory,
} from '../core/redux/actions/search/search.actions';
import { RootState } from '../core/redux/configureStore';

export const useDataFetchOnSearch = (
  searchTerm: string,
  searchInputRef: RefObject<HTMLInputElement>
) => {
  const dispatch = useDispatch();
  const currentSearchCriteria = useSelector(
    (state: RootState) => state.search.criteria
  );

  useEffect(() => {
    if (searchTerm.trim()) {
      if (currentSearchCriteria === 'Organizations') {
        dispatch(fetchOrganizations(searchTerm));
      }

      if (currentSearchCriteria === 'Repositories') {
        dispatch(fetchRepos(searchTerm));
      }

      dispatch(setCurrentSearchTerm(searchTerm));
      dispatch(setSearchHistory(searchTerm));

      if (searchInputRef?.current) {
        searchInputRef.current.blur();
      }
    }
  }, [searchTerm, currentSearchCriteria, dispatch, searchInputRef]);
};
