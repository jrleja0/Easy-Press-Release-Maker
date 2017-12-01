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
        <h1>Press Release Maker</h1>
      </div>
      <nav>
        { isLoggedIn ?
          <div>
            <div className="nav-div-menu-option">
              <Link to="/menu">Main Menu</Link>
            </div>
            <span>|</span>
            <div className="nav-div-menu-option nav-right">
              <a href="#" onClick={handleLogout}>Logout</a>
            </div>
          </div>
          : <div>
              <div className="nav-div-menu-option">
                <Link to="/login">Login</Link>
              </div>
              <span>|</span>
              <div className="nav-div-menu-option nav-right">
                <Link to="/signup">Sign Up</Link>
              </div>
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
