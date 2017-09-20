import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const SubmitSubmenu = ({ docData }) => {
  return (
    <div>
      <div>
        <h5>Your document saved successfully.<br />Would you like to view the final doc or return to the main menu?</h5>
      </div>
      <div>
        <Link to="/Preview" className="btn btn-success">View Final Doc</Link>
      </div>
      <div>
        <Link to="/Menu" className="btn btn-primary">Back To Main Menu</Link>
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
