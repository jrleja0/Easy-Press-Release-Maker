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
      <div>
        <a role="button" className="btn btn-success" tabIndex="0" onClick={handleCreateNewDoc}>Create New Doc</a>
      </div>
      <div>
        <a role="button" className="btn btn-primary" tabIndex="0" onClick={handleFetchUserDocs}>Open Saved Doc</a>
      </div>
      <div>
      { userDocs && userDocs.length ?
          userDocs.map(doc => (
            <div key={doc.Title}>
              <a role="button" tabIndex="0" onClick={() => handleFetchDoc(doc.id)}>
                <h3>{doc.Title}</h3>
              </a>
              { doc.imgSrc &&
              <img className="img-fluid menu-img-thumbnail" src={doc.imgSrc} />
              }
              <p>{doc.Date}</p>
              <p>{doc.Location}</p>
              <p>{doc.mainTextSnippet}</p>
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
