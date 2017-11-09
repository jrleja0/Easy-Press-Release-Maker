import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const SubmitSubmenu = ({ docData }) => {
  return (
    <div>
      <div className="text-submit-submenu">
        <p>Your document saved successfully.<br /><span className="sm-text">Would you like to view the final doc or return to the main menu?</span></p>
      </div>
      <div className="div-submit-button container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2" />
          <div className="div-panel-submit-button col-lg-8 col-md-8 col-sm-12">
            <Link to="/Preview" className="btn-success btn-small">View Final Doc</Link>
            <Link to="/Menu" className="btn-primary btn-small move-right">Back To Main Menu</Link>
          </div>
          <div className="col-lg-2 col-md-2" />
        </div>
      </div>
    </div>
  );
};

export default SubmitSubmenu;

/*///
 PROP TYPES
*////
SubmitSubmenu.propTypes = {

};
