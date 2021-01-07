import { FC } from 'react';
import cs from 'classnames';

interface IProps {
  isCurrent?: boolean;
  value: string | number;
  isDisabled?: boolean;
  onChoose?: () => void;
}

export const PageButton: FC<IProps> = ({
  value,
  isDisabled = false,
  isCurrent = false,
  onChoose,
}) => {
  const classNames = cs({
    current: isCurrent,
    disabled: isDisabled,
  });
  return (
    <button
      className={classNames}
      onClick={() => {
        onChoose && onChoose();
      }}
    >
      {value}
    </button>
  );
};
