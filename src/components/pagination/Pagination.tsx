import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrganizations,
  fetchRepos,
} from '../../core/redux/actions/data/data.thunks';
import { setCurrentPage } from '../../core/redux/actions/search/search.actions';
import { RootState } from '../../core/redux/configureStore';
import { PageButton } from './PageButton';
import './styles.scss';

interface IProps {
  length: number;
}

const createDataFetcher = (searchCriteria: string) => {
  if (searchCriteria === 'Repositories') {
    return fetchRepos;
  } else if (searchCriteria === 'Organizations') {
    return fetchOrganizations;
  } else return null;
};

export const Pagination: FC<IProps> = ({ length }) => {
  const dispatch = useDispatch();
  const { currentPage, searchTerm, criteria } = useSelector(
    (state: RootState) => state.search
  );
  const dataFetcher = createDataFetcher(criteria);

  const choosePage = useCallback(
    (page: number) => {
      if (page > 0 && page <= length && dataFetcher) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(setCurrentPage(page));
        dispatch(dataFetcher(searchTerm, page));
      }
    },
    [dispatch, length, searchTerm, dataFetcher]
  );

  return (
    <div className="pagination-container">
      <div className="pagination">
        <PageButton
          key="previous-button"
          value="❮ Previous"
          isDisabled={currentPage - 1 <= 0}
          onChoose={() => choosePage(currentPage - 1)}
        />
        <PageButton value={currentPage} isCurrent={true} />
        <span>out of {length} pages</span>
        <PageButton
          key="next-button"
          value="Next ❯"
          isDisabled={currentPage > length - 1}
          onChoose={() => choosePage(currentPage + 1)}
        />
      </div>
    </div>
  );
};
