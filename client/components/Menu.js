import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchUserDocs} from '../store';

/*///
 COMPONENT
*////
const Menu = ({ userDocs, handleFetchUserDocs }) => {
  return (
    <div>
      <div>
        <Link to="/create" className="btn btn-success">Create New Doc</Link>
      </div>
      <div>
        <a role="button" className="btn btn-primary" tabIndex="0" onClick={handleFetchUserDocs}>Open Saved Doc</a>
      </div>
      <div>
      { userDocs && userDocs.length ?
          userDocs.map(doc => (
            <div key={doc.Title}>
              <img className="img-fluid" src={doc.imgSrc} alt="img-thumbnail" />
              <h5>{doc.Title}</h5>
              <p>{doc.Date}</p>
              <p>{doc.mainTextSnippet()}</p>
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
  handleFetchUserDocs: () => {
    dispatch(fetchUserDocs());
  }
});

export default connect(mapState, mapDispatch)(Menu);

/*///
 PROP TYPES
*////
Menu.propTypes = {

};
