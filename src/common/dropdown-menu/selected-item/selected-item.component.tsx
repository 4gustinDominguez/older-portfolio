import * as React from 'react';

import { ArrowStyled } from './selected-item.styled';

type SelectedItemProps = {
  selectedItem: any;
  expanded: boolean;
};

export const SelectedItem: React.FC<SelectedItemProps> = ({ selectedItem, expanded }) => {
  return (
    <>
      <p>{selectedItem.code}</p>
      <ArrowStyled expanded={expanded} />
    </>
  );
};
