import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
export const Preview = ({ docData }) => {
  return (
    <div className="preview-component">
      <div className="div-release-main-img">
        <div className={docData['crop'] ? 'release-main-img-crop' : ''}>
          { docData['imgSrc'] &&
            <img className="release-main-img img-fluid" src={docData['imgSrc']} alt="press-release-image" />
          }
        </div>
        <div className="div-img-cover" />
      </div>
      <div className="div-header-release">
        <h3 className="header-title">{docData['Title']}</h3>
        <span className="header-date">{docData['Date']}</span>
        <span className="header-location">{docData['Location']}</span>
      </div>
      <div>
        <p>
          <span className="main-text">{docData['Main Text']}</span>
          <span className="secondary-text">{docData['Secondary Text']}</span>
          <span className="end-text">{docData['Text About Company']}</span>
        </p>
      </div>
      <div>
        { docData['Image Credits'] &&
          <p className="image-credits">Credits: {docData['Image Credits']}</p>
        }
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = state => {
  return ({
  docData: state.docStore.doc
})
};

export default connect(mapState, null)(Preview);

/*///
 PROP TYPES
*////
Preview.propTypes = {

};
