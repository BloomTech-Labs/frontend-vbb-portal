//Todo: This component should ultimately be replaced by Ant D built-in form validation. Once we confirm, it is no longer in use, we should delete it.

import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AlertDismissible = ({ errorMessage }) => {
  if (errorMessage) {
    return (
      <div className="alert-div-container">
        <div className="alert-div">
          <Alert variant="danger" dismissible>
            <Alert.Heading>Error</Alert.Heading>

            {errorMessage.includes(
              'Sorry, you need to use a villagementors.org Gsuite account to log in to this website.'
            ) ? (
              <p className="alert-msg">
                Sorry, you need to use a villagementors.org Gsuite account to
                log in to this website. If you do not have a village mentors
                account, please&nbsp;
                <Link to="/signup">sign up</Link>
                &nbsp;for one using the register link above.
                <br />
                <br />
                If you already signed up, please make sure you are logged in to
                your villagementors.org Gsuite account by&nbsp;
                <a
                  href="https://accounts.google.com/AddSession"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clicking here
                </a>
                , then try again.
              </p>
            ) : (
              <p className="alert-msg">{errorMessage}</p>
            )}
          </Alert>
        </div>
      </div>
    );
  }
  return <div />;
};
const mapStateToProps = (state) => {
  return {
    errorMessage: state.isError.message,
  };
};
export default connect(mapStateToProps, null)(AlertDismissible);
