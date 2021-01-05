import { FC } from 'react';
import cs from 'classnames';

interface IProps {
  isCurrent?: boolean;
  value: string | number;
  isDisabled?: boolean;
}

export const PageButton: FC<IProps> = ({
  value,
  isDisabled = false,
  isCurrent = false,
}) => {
  const classNames = cs({
    current: isCurrent,
    disabled: isDisabled,
  });
  return <button className={classNames}>{value}</button>;
};
