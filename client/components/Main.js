import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logout} from '../store';
import {Footer} from './index';

/*///
 COMPONENT
*////
const Main = (props) => {
  const { children, handleLogout, isLoggedIn } = props;

  return (
    <div>
      <div>
        <h3>Press Release Maker</h3>
      </div>
      <nav>
        { isLoggedIn ?
          <div>
            <Link to="/menu">Main Menu</Link>
            <a href="#" onClick={handleLogout}>Logout</a>
          </div>
          : <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
        }
      </nav>
      {children}
      <Footer />
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatch = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  }
});

export default withRouter(connect(mapState, mapDispatch)(Main));

/*///
 PROP TYPES
*////
Main.propTypes = {
  children: PropTypes.object,
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
