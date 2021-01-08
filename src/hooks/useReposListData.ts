import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../core/redux/configureStore';

type ComponentMap = {
  [key: string]: FC<any>;
};

export const useReposListData = (componentMap: ComponentMap) => {
  const isPending = useSelector((state: RootState) => state.ui.pending);
  const data = useSelector((state: RootState) => state.data);
  let items = null;

  if (data && data.items) {
    items = data.items.map((item) =>
      React.createElement(componentMap[data.type] as FC, {
        key: item.id,
        ...item,
      })
    );
  }

  return { isPending, items, data };
};
