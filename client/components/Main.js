import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const Main = (props) => {
  return (
    <div>
      <div>
        <span>Press Release Maker</span>
      </div>
      {props.children}
      <div>
        <pre className="footer-text">
          <span className="glyphicon glyphicon-wrench" aria-hidden="true" />  J R Leja Design NYC    |    Jasiu Leja    |    2017
        </pre>
      </div>
    </div>
  );
};

export default Main;

/*///
 PROP TYPES
*////
Main.propTypes = {
  children: PropTypes.object,
};
