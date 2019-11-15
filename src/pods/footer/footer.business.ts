import { TKeys } from '../../core/translation';

export const createFooter = (tdkFooter: TKeys['footer']): { title: string } => ({
  title: tdkFooter.title,
});
