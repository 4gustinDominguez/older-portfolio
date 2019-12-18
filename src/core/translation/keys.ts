import { calculateObjectPath } from '../../providers/translation';

const keyStructure = {
  header: {
    categories: {
      aboutTitle: null,
      skillsTitle: null,
      workTitle: null,
      contactTitle: null,
    },
    socialNetworks: {
      linkedinTitle: null,
      githubTitle: null,
      stackoverflowTitle: null,
    },
  },
  home: {
    introduction: {
      title: null,
      subtitle: null,
      text: null,
      contactLinkTitle: null,
    },
  },
  footer: {
    title: null,
  },
  supportedLanguages: {
    en: {
      code: null,
      description: null,
    },
    es: {
      code: null,
      description: null,
    },
  },
};

export const tkeys = calculateObjectPath(keyStructure);

export type TKeys = typeof tkeys;
