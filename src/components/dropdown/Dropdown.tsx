import { FC, useState, useCallback, useRef } from 'react';
import cs from 'classnames';

import { DropdownItem } from './DropdownItem';
import './styles.scss';
import { useClickedOutside } from '../../hooks/useClickOutside';

interface IProps {
  options: string[];
  defaultOption: string;
}

export const Dropdown: FC<IProps> = ({ options, defaultOption }) => {
  const [currentOption, setCurrentOption] = useState(defaultOption);
  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef(null);

  useClickedOutside(dropdownRef, () => {
    setIsActive(false);
  });

  const setItem = useCallback((option) => {
    setCurrentOption(option);
    setIsActive(false);
  }, []);

  const dropDownClassName = cs({
    dropdown: true,
    active: isActive,
  });

  return (
    <div className={dropDownClassName} ref={dropdownRef}>
      <div className="default-option" onClick={(active) => setIsActive(true)}>
        {currentOption}
      </div>
      <ul>
        {options.map((option) => (
          <DropdownItem key={option} option={option} setItem={setItem} />
        ))}
      </ul>
    </div>
  );
};