import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Redirect, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Creator, Login, Main, Menu, PreviewRoute, Signup, SubmitSubmenu} from './components';
import {me} from './store';

/*///
 COMPONENT
*////
class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData();
  }

  render () {
    const { isLoggedIn } = this.props;

    return (
      <Router history={history}>
        <Switch>
        { isLoggedIn &&
          <Route path="/preview" component={PreviewRoute} />
        }
          <Main>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              { isLoggedIn ?
                <Switch>
                  <Route path="/menu" component={Menu} />
                  <Route path="/create" component={Creator} />
                  {/* <Route path="/preview" component={PreviewRoute} /> */}
                  <Route path="/submit" component={SubmitSubmenu} />
                  <Route component={Menu} />
                </Switch>
                : null
              }
              <Route component={Login} />
            </Switch>
          </Main>
        </Switch>
      </Router>
    );
  }
}

/*///
 CONTAINER
*////
const mapState = state => ({
  isLoggedIn: !!state.user.id
});

const mapDispatch = dispatch => ({
  loadInitialData: () => {
    dispatch(me());
  }
});

export default connect(mapState, mapDispatch)(Routes);

/*///
 PROP TYPES
*////
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
