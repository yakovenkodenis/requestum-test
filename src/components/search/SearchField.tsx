import { ChangeEvent, forwardRef, MouseEvent } from 'react';

import searchKeyIcon from '../../icons/search-key-slash.svg';
import { ReactComponent as DismissIcon } from '../../icons/dismiss.svg';

interface IProps {
  searchTerm: string;
  searchCriteria?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
}

export const SearchField = forwardRef<HTMLInputElement, IProps>(
  ({ searchTerm, onChange, clear }, ref) => {
    const placeholder = 'Search or jump to...';

    const clearSearchField = (
      e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>
    ) => {
      e.preventDefault();
      clear();
    };

    return (
      <div className="search-field">
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={onChange}
          data-testid="search-input"
        />
        <img
          src={searchKeyIcon}
          alt="Search key icon"
          className="search-key-slash"
        />
        <DismissIcon
          aria-label="clear search field"
          className="clear-search-icon"
          onMouseDown={clearSearchField}
        />
      </div>
    );
  }
);
