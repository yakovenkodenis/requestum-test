import React, { FC } from 'react';

interface IProps {
  icon?: React.ReactNode;
  value: string;
}

export const HistoryItem: FC<IProps> = ({ icon, value }) => {
  return (
    <li>
      <a href="/">
        {icon}
        <div className="autocomplete__repo-name">{value}</div>
      </a>
    </li>
  );
};
