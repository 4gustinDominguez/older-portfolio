import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Theme } from '../../app.theme';
import { Mode } from '../../app.model';

type TagsHeaderProps = {
  mode: Mode;
  theme: Theme;
};

export const TagsHeader: React.FC<TagsHeaderProps> = ({ theme: { palette } }) => (
  <>
    <Helmet>
      <meta name="theme-color" content={palette['dark'].background} />
    </Helmet>
  </>
);
