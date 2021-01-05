import { FC } from 'react';

interface IProps {
  option: string;
  setItem: (option: string) => void;
}

export const DropdownItem: FC<IProps> = ({ option, setItem }) => {
  return <li onClick={() => setItem(option)}>{option}</li>;
};
