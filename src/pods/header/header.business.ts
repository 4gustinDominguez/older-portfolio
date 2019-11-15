import { IconLink } from '../../app.model';
import {
  AboutIcon,
  SkillsIcon,
  WorkIcon,
  ContactIcon,
  LinkedInIcon,
  GithubIcon,
  StackoverflowIcon,
} from '../../assets/icons';

export const createHighlightedSocialNetworks = (): IconLink[] => [
  {
    title: 'Linkedin',
    Icon: LinkedInIcon,
    url: 'https://es.linkedin.com/in/frangaliana',
  },
  {
    title: 'Github',
    Icon: GithubIcon,
    url: 'https://github.com/frangaliana',
  },
  {
    title: 'StackOverflow',
    Icon: StackoverflowIcon,
    url: 'https://stackoverflow.com/users/8534267/fg93',
  },
];

export const createCategories = (): IconLink[] => [
  {
    title: 'About',
    Icon: AboutIcon,
    url: '',
  },
  {
    title: 'Skills',
    Icon: SkillsIcon,
    url: '',
  },
  {
    title: 'Work',
    Icon: WorkIcon,
    url: '',
  },
  {
    title: 'Contact',
    Icon: ContactIcon,
    url: '',
  },
];
