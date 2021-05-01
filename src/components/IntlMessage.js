import { useContext } from 'react';

import LangContext from '../helpers/LangContext';
import { languages } from '../lang';

const IntlMessage = ({ id }) => {
  const { lang } = useContext(LangContext);

  return languages[lang][id];
};

export default IntlMessage;
