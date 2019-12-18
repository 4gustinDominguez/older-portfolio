import { TKeys } from '../../core/translation';

export const createFooter = (title: TKeys['footer']['title']): { title: string } => ({
  title,
});
