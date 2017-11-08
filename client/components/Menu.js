import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchNewDoc, fetchUserDocs, fetchDoc} from '../store';

/*///
 COMPONENT
*////
const Menu = ({ userDocs, handleCreateNewDoc, handleFetchUserDocs, handleFetchDoc }) => {
  return (
    <div>
      <div className="div-main-menu-buttons">
        <a role="button" className={'btn btn-success' + (userDocs && userDocs.length ? ' btn-small' : '')} tabIndex="0" onClick={handleCreateNewDoc}>Create New Doc</a>
      </div>
      <div className="div-main-menu-buttons" style={{display: userDocs && userDocs.length ? 'none' : 'initial'}}>
        <a role="button" className="btn btn-primary" tabIndex="0" onClick={handleFetchUserDocs}>Open Saved Doc</a>
      </div>
      <div className="container-fluid">
      { userDocs && userDocs.length ?
          userDocs.map((doc, i) => (
            <div key={doc.Title}>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <a role="button" tabIndex="0" onClick={() => handleFetchDoc(doc.id)}>
                  <h3>{doc.Title}</h3>
                </a>
                { doc.imgSrc ?
                  <img className="img-fluid menu-img-thumbnail" src={doc.imgSrc} />
                  : <div className="img-fluid menu-img-thumbnail no-thumbnail-fill" />
                }
                <p>{doc.Date}</p>
                <p>{doc.Location}</p>
                <p>{doc.mainTextSnippet}</p>
              </div>
              { (i + 1) % 3 === 0 ?
                <div className="lg-clearfix" />
                : null
              }
            </div>
          ))
        : null
      }
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = state => ({
  userDocs: state.docStore.userDocs
});

const mapDispatch = dispatch => ({
  handleCreateNewDoc: () => {
    dispatch(fetchNewDoc());
  },
  handleFetchUserDocs: () => {
    dispatch(fetchUserDocs());
  },
  handleFetchDoc: docId => {
    dispatch(fetchDoc(docId));
  }
});

export default connect(mapState, mapDispatch)(Menu);

/*///
 PROP TYPES
*////
Menu.propTypes = {

};
