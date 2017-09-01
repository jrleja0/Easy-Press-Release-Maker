import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const Previewer = (props) => {

  return (
    <div>
      <div className="div-release-main-img">
        <img className="release-main-img img-fluid" src="/assets/jrl_logo.png" alt="drag your image here" />
        <div className="div-img-cover" />
      </div>
      <span className="header-location" />
      <span className="header-date" />
      <pre className="main-text" />
      <pre className="end-text" />
    </div>
  );
};

export default Previewer;

/*///
 PROP TYPES
*////
Previewer.propTypes = {

};
