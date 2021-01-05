import { ChangeEvent, FC } from 'react';

import searchKeyIcon from '../../icons/search-key-slash.svg';

interface IProps {
  searchTerm: string;
  searchCriteria?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<IProps> = ({
  searchTerm,
  searchCriteria,
  onChange,
}) => {
  const placeholder = searchCriteria
    ? `Search ${searchCriteria.toLowerCase()}...`
    : 'Search or jump to...';

  return (
    <div className="search-field">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={onChange}
      />
      <img
        src={searchKeyIcon}
        alt="Search key icon"
        className="search-key-slash"
      />
    </div>
  );
};
