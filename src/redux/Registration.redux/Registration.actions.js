import axios from 'axios';
import { NEWSLETTER_SUBSCRIBER_TYPES } from '../../util/newsletterSubscriberTypes';
import { sleep } from '../../util/sleep';
import {
  clearIsError,
  PYTHON_API,
  setIsError,
  setLoading,
  setLoadingFalse,
  setUser,
} from '../actions';
import { USER_TYPES } from '../User.redux/User.types';

export const SET_REGISTRATION_FORM = 'SET_REGISTRATION_FORM';

/**
 * sets the registration form store to the payload
 * @param {obj: registrationForm} regForm
 * @returns setRegistrationFromAction
 */
export const setRegistrationForm = (regForm) => {
  return { type: SET_REGISTRATION_FORM, payload: regForm };
};

/**
 * Registers User for the newsletter if newsletter is true.
 * Submits the first part of the form for the user
 * @param {firstName: string, lastName: string, phone: string, email:string, newsletter:boolean} registrationFormStepOne
 * @returns null
 */
export const subInitialUserRegistration = () => async (dispatch, getState) => {
  dispatch(setLoading);
  const regForm = getState().registrationForm;
  try {
    //if they signup for the newsletter
    if (regForm.subToNewsLetter) {
      try {
        const body = {
          first_name: regForm.firstName,
          last_name: regForm.lastName,
          phone_number: regForm.phone,
          email: regForm.email,
          subscriber_type: NEWSLETTER_SUBSCRIBER_TYPES.VBB_NEWSLETTER,
        };
        const { status } = await axios.post(
          PYTHON_API + 'v1/newsletter/',
          body
        );
      } catch (err) {
        //choice at present is to not fail the process if registering the user does not work
        console.error('Registering user for newsletter failed', err);
      }
    }

    //registers the user with VBB
    const { data, status } = await axios.post(
      PYTHON_API + 'v1/mentor/',
      transformRegistrationFormForSubmission()
    );
    //
    if (status === 201) {
      dispatch(setUser(transformRegistrationFormResponse(data)));
    } else {
      console.error('Failed Registration');
      dispatch(
        setIsError(
          'Registration failed please email Village Book Builders directly to become a member or try again'
        )
      );

      await sleep(2000);
      dispatch(clearIsError());
    }
    dispatch(setLoadingFalse);
  } catch (err) {
    console.error('initial user registration error', err);
  }
};

const transformRegistrationFormForSubmission = (regForm) => {
  return {
    user: {
      first_name: regForm.firstName,
      last_name: regForm.lastName,
      personal_email: regForm.email,
      phone: regForm.phone,
    },
  };
};

const transformRegistrationFormResponse = (regFormResponse) => {
  const { user, id } = regFormResponse;
  return {
    id: id,
    userType: USER_TYPES.MENTOR,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    externalId: '', //not returned in this request
  };
};
