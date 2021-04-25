import React, { useContext } from 'react';

import LangContext from '../helpers/LangContext';
import en from '../lang/en';
import es from '../lang/es';
import fr from '../lang/fr';

const IntlMessage = ({ id }) => {
  const { lang } = useContext(LangContext);

  switch(lang) {
    case 'en':
      return <>{en[id]}</>;
    case 'es':
      return <>{es[id]}</>;
    case 'fr':
      return <>{fr[id]}</>;
    default:
      return <>{en[id]}</>;
  }
};

export default IntlMessage;
