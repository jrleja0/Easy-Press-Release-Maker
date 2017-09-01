import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Redirect, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Main} from './components';
//import { fetchImages } from './store';

/*///
 COMPONENT
*////
class Routes extends Component {

  componentDidMount () {
    // this.props.loadInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <Main />
      </Router>
    );
  }
}

/*///
 CONTAINER
*////
const mapState = null;

const mapDispatch = (dispatch) => ({
  // loadInitialData: () => {
  //   dispatch(/*fetchData()*/);
  // }
});

export default connect(mapState, mapDispatch)(Routes);

/*///
 PROP TYPES
*////
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
// };
