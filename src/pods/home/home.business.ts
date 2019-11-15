import { Introduction, IconLink } from '../../app.model';
import { GetInTouchIcon } from '../../assets/icons';
import { TKeys } from '../../core/translation';

export const createIntroduction = (tdkIntroduction: TKeys['home']['introduction']): Introduction => ({
  title: tdkIntroduction.title,
  subtitle: tdkIntroduction.subtitle,
  text: tdkIntroduction.text,
});

export const createContactLink = (tdkIntroduction: TKeys['home']['introduction']): IconLink => ({
  title: tdkIntroduction.contactLinkTitle,
  url: 'mailto:fjgalianacano@gmail.com?Subject=Hello%20Fran!',
  Icon: GetInTouchIcon,
});
