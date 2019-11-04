import { IconLink } from '../../app.model';

import aboutIcon from '../../assets/images/about.svg';
import skillsIcon from '../../assets/images/skills.svg';
import workIcon from '../../assets/images/work.svg';
import contactIcon from '../../assets/images/contact.svg';

import linkedinIcon from '../../assets/images/linkedin.svg';
import githubIcon from '../../assets/images/github.svg';
import stackoverflowIcon from '../../assets/images/stackoverflow.svg';

export const createCategories = (): IconLink[] => [
  {
    title: 'ABOUT',
    icon: aboutIcon,
    url: '',
  },
  {
    title: 'MY SKILLS',
    icon: skillsIcon,
    url: '',
  },
  {
    title: 'MY WORK',
    icon: workIcon,
    url: '',
  },
  {
    title: 'CONTACT',
    icon: contactIcon,
    url: '',
  },
];

export const createHighlightedSocialNetworks = (): IconLink[] => [
  {
    title: 'Linkedin',
    icon: linkedinIcon,
    url: 'https://es.linkedin.com/in/frangaliana',
  },
  {
    title: 'Github',
    icon: githubIcon,
    url: 'https://github.com/frangaliana',
  },
  {
    title: 'StackOverflow',
    icon: stackoverflowIcon,
    url: 'https://stackoverflow.com/users/8534267/fg93',
  },
];
