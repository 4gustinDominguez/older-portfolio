import * as React from 'react';
import { tkeys } from '../../core/translation';
import { useTranslatedKeys } from '../../providers';

import { createFooter } from './footer.business';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = props => {
  const [tdkFooter] = useTranslatedKeys(tkeys.footer);
  const footer = createFooter(tdkFooter);

  return <>{footer.title}</>;
};
