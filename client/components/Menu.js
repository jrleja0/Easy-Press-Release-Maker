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
        <a role="button" className={'btn-success' + (userDocs && userDocs.length ? ' btn-small-main' : ' btn-main')} tabIndex="0" onClick={handleCreateNewDoc}>Create New Doc</a>
      </div>
      <div className="div-main-menu-buttons" style={{display: userDocs && userDocs.length ? 'none' : 'initial'}}>
        <a role="button" className="btn-main btn-primary" tabIndex="0" onClick={handleFetchUserDocs}>Open Saved Doc</a>
      </div>
      <div className="container-fluid">
      { userDocs && userDocs.length ?
          userDocs.map((doc, i) => (
            <div key={doc.Title}>
              { i === 0 && <div className="top-border" /> }
              <a role="button" tabIndex="0" onClick={() => handleFetchDoc(doc.id)}>
                <div className="col-sm-12 col-md-6 col-lg-4 div-menu-document" >
                  <h3>{doc.Title}</h3>
                  { doc.imgSrc ?
                    <img className="img-fluid menu-img-thumbnail" src={doc.imgSrc} />
                    : <div className="img-fluid menu-img-thumbnail no-thumbnail-fill">
                        <p className="p-no-image">[ No Image ]</p>
                      </div>
                  }
                  <p>{doc.Date}</p>
                  <p>{doc.Location}</p>
                  <p>{doc.mainTextSnippet}</p>
                </div>
              </a>
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
