import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import NavBar from '../components/NavBar';
import AlertDismissable from '../components/AlertDismissable';

class Layout extends React.Component {
  render() {
    return (
      <div id="page-container">
        <NavBar />

        <div className="content">
          <AlertDismissable close={this.props.logout} {...this.props} />

          {this.props.children}
        </div>

        <footer>&copy; Village Book Builders | All Rights Reserved</footer>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Layout));
