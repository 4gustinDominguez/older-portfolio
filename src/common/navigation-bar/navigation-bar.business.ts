import { IconLink } from '../../app.model';
import { AboutIcon, SkillsIcon, WorkIcon, ContactIcon } from '../../assets/icons';

export const createCategories = (): IconLink[] => [
  {
    title: 'ABOUT',
    Icon: AboutIcon,
    url: '',
  },
  {
    title: 'MY SKILLS',
    Icon: SkillsIcon,
    url: '',
  },
  {
    title: 'MY WORK',
    Icon: WorkIcon,
    url: '',
  },
  {
    title: 'CONTACT',
    Icon: ContactIcon,
    url: '',
  },
];
