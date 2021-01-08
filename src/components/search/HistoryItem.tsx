import React, { FC } from 'react';

interface IProps {
  icon?: React.ReactNode;
  value: string;
  onSelectItem: (value: string) => void;
}

export const HistoryItem: FC<IProps> = ({ icon, value, onSelectItem }) => {
  return (
    <li
      onMouseDown={() => {
        onSelectItem(value);
      }}
      data-testid="history-item"
    >
      <div>
        {icon}
        <div className="autocomplete__repo-name">{value}</div>
      </div>
    </li>
  );
};
