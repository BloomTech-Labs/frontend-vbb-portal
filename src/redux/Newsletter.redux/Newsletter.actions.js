import axios from 'axios';

import { formatPhoneNumber } from '../../util/formatPhoneNumber';
import { PYTHON_API, setLoading, setLoadingFalse } from '../actions';
import { NEWSLETTER_SUBSCRIBER_TYPES } from './Newsletter.types';

export const registerForNewsletter = () => async (dispatch, getState) => {
  dispatch(setLoading);
  const regForm = getState().registrationForm;
  const headers = {
    'Content-Type': 'application/json',
  };

  if (regForm.subToNewsLetter) {
    try {
      const body = {
        first_name: regForm.firstName,
        last_name: regForm.lastName,
        phone: formatPhoneNumber(regForm.phone),
        email: regForm.email,
        subscriber_type: NEWSLETTER_SUBSCRIBER_TYPES.VBB_NEWSLETTER,
      };
      await axios.post(PYTHON_API + 'v1/newsletter/', body, headers);
    } catch (err) {
      //choice at present is to not fail the process if registering the user does not work
      console.error('Registering user for newsletter failed', err);
    }
  }

  dispatch(setLoadingFalse);
};
