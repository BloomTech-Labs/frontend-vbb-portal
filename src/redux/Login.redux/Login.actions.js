import axios from 'axios'

import { setLoading, setLoadingFalse, setIsError } from '../actions'

/**
 * This handles all actions associated with logging in and dispatching async actions
 *
 * */

export const logIn = async () => (dispatch) => {
  //dispatch loading
  dispatch(setLoading());
  try {
    //log into google
  } catch (err) {
    dispatch(setLoadingFalse());
    //replaces authFail
    dispatch(setIsError(err.message));
  }
};

// existing code
// export const authSuccess = (token) => {
//   return {
//     type: actionTypes.AUTH_SUCCESS,
//     token: token,
//   };
// };

//************* Looks like an auto logout after 1 hour ( 3600 * 1000 )*****************//
export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
}

// export const gAuth = (googleToken) => {
//   return (dispatch) => {
//     dispatch(authStart());
//     axios
//************* Why do this look like it points to local host? *****************//
//       .post("http://127.0.0.1:8000/api/googlelogin/", {
//         access_token: googleToken,
//       })
//       .then((res) => {
//         const token = res.data.key;
//         checkSignIn(token, dispatch);
//       })
//       .catch((err) => {
//         dispatch(authFail(err));
//       });
//   };
// };

export const gAuthV2 = async (googleToken) => (dispatch) => {
  //dispatch loading
  dispatch(setLoading());
  try {
   //log into google
    const googleResponse = await axios.post('http://127.0.0.1:8000/api/googlelogin/', { access_token: googleToken,});
    const googleResponseToken = googleResponse.data.key
    await checkSignIn(googleResponseToken, dispatch);

  } catch (err) {
    dispatch(setLoadingFalse());
    //replaces authFail
    const errorMessage = err.message?? 'Error logging in'
    dispatch(setIsError(errorMessage));
  }
}

/**
  * Helper function to check Google sign in
  * */
const checkSignIn = async (token, dispatch) => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  }
  //try to confirm token
  try{
     const checkSignInResponse = await axios.get("http://127.0.0.1:8000/api/checksignin/")

     if(checkSignInResponse.data.success === "true"){
       //adds one hour to the current time as an expirationDate
       const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
       localStorage.setItem("token", token)
       localStorage.setItem("expirationDate", expirationDate)
        // dispatch(authSuccess(token));
       dispatch(checkAuthTimeout(3600))
     }else {
       dispatch(setIsError(res.data));
     }
  } catch(err){
    console.error(err)
    dispatch(setIsError(err))
  }
};

// export const authSignup = (first_name, last_name,
//   personal_email, vbb_email, phone, adult, occupation,
//   vbb_chapter, affiliation, referral_source, languages,
//   time_zone, charged, initials, desired_involvement, city) => {
//   return (dispatch) => {
//     dispatch(authStart());
//     axios
//       .post("http://127.0.0.1:8000/api/signup/", {
//         first_name: first_name,
//         last_name: last_name,
//         personal_email: personal_email,
//         vbb_email: vbb_email,
//         phone: phone,
//         adult: adult,
//         occupation: occupation,
//         vbb_chapter: vbb_chapter,
//         affiliation: affiliation,
//         referral_source: referral_source,
//         languages: languages,
//         time_zone: time_zone,
//         charged: charged,
//         initials: initials,
//         desired_involvement: desired_involvement,
//         city: city,
//       })
//       .then((res) => {
//         if(res.success) dispatch(checkAuthTimeout(3600));
//         else dispatch(authFail(res.data))
//       })
//       .catch((err) => {
//         console.log(err);
//         alert(err)
//         dispatch(authFail(err));
//       });
//   };
// };

// export const authCheckState = () => {
//   return (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (token === undefined) {
//       dispatch(logout());
//     } else {
//       const expirationDate = new Date(localStorage.getItem("expirationDate"));
//       if (expirationDate <= new Date()) {
//         dispatch(logout());
//       } else {
//         dispatch(authSuccess(token));
//         dispatch(
//           checkAuthTimeout(
//             (expirationDate.getTime() - new Date().getTime()) / 1000
//           )
//         );
//       }
//     }
//   };
// }
