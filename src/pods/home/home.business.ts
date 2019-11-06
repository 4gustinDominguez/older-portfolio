import { Introduction, IconLink } from '../../app.model';

import getInTouch from '../../assets/images/get-in-touch.svg';

export const createIntroduction = (): Introduction => ({
  title: 'Fran Galiana',
  subtitle: 'I build efficient and high quality websites',
  text: `I'm a Frontend Engineer based in Alicante, Spain🌴☀️`,
});

export const createContactLink = (): IconLink => ({
  icon: getInTouch,
  title: 'Get in touch',
  url: 'mailto:fjgalianacano@gmail.com?Subject=Hello%20Fran!',
});
