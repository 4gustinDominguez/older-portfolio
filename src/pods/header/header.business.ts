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
import { TKeys } from '../../core/translation';

export const createSocialNetworks = (tdkSocialNetworks: TKeys['header']['socialNetworks']): IconLink[] => [
  {
    title: tdkSocialNetworks.linkedinTitle,
    Icon: LinkedInIcon,
    url: 'https://es.linkedin.com/in/frangaliana',
  },
  {
    title: tdkSocialNetworks.githubTitle,
    Icon: GithubIcon,
    url: 'https://github.com/frangaliana',
  },
  {
    title: tdkSocialNetworks.stackoverflowTitle,
    Icon: StackoverflowIcon,
    url: 'https://stackoverflow.com/users/8534267/fg93',
  },
];

/*
export const createLanguages = (tdkLanguages: TKeys["header"]["supportedLanguages"]): DropdownItem[] => [
  {
    code: ,
    description: tdkLanguages.en,
  },
  {
    code: ,
    description: tdkLanguages.es
  }
]
*/

export const createCategories = (tdkCategories: TKeys['header']['categories']): IconLink[] => [
  {
    title: tdkCategories.aboutTitle,
    Icon: AboutIcon,
    url: '',
  },
  {
    title: tdkCategories.skillsTitle,
    Icon: SkillsIcon,
    url: '',
  },
  {
    title: tdkCategories.workTitle,
    Icon: WorkIcon,
    url: '',
  },
  {
    title: tdkCategories.contactTitle,
    Icon: ContactIcon,
    url: 'mailto:fjgalianacano@gmail.com?Subject=Hello%20Fran!',
  },
];
