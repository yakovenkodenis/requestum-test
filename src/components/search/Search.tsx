import { ChangeEvent, FC, useState } from 'react';

import { Dropdown } from '../dropdown';
import { History } from './History';
import { SearchField } from './SearchField';
import './styles.scss';

const searchCriteria = ['Repositories', 'Organizations'];

export const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <form className="search-form">
        <Dropdown defaultOption={searchCriteria[0]} options={searchCriteria} />
        <SearchField
          searchTerm={searchTerm}
          onChange={handleSearchTermChange}
        />
        <History searchTerm={searchTerm} />
      </form>
    </div>
  );
};
