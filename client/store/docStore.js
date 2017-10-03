import axios from 'axios';
import history from '../history';

// ---------- Helper Function ----------
const updateSavedDocInList = (docList, doc) => {
  for (let i = 0; i < docList.length; i++) {
    if (docList[i].id === doc.id) {
      docList[i] = doc;
      break;
    }
  }
};

// ---------- ACTION TYPES ----------
const LOAD_USER_DOCS = 'LOAD_USER_DOCS';
const LOAD_DOC = 'LOAD_DOC';
const CREATE_NEW_DOC = 'CREATE_NEW_DOC';
const SAVE_DOC = 'SAVE_DOC';
const DELETE_DOC = 'DELETE_DOC';

// ---------- ACTION CREATORS ----------
const loadUserDocs = userDocs => ({ type: LOAD_USER_DOCS, userDocs });
const loadSingleDoc = doc => ({ type: LOAD_DOC, doc });
const createNewDoc = () => ({ type: CREATE_NEW_DOC });
const saveSingleDoc = doc => ({ type: SAVE_DOC, doc });
const deleteSingleDoc = doc => ({ type: DELETE_DOC, doc });

// ---------- INIT STATE ----------
const initState = {
  userDocs: [],
  doc: {}
};

// ---------- DISPATCHERS ----------
export const fetchUserDocs = () =>
  dispatch =>
    axios.get('/api/docs')
      .then(res => dispatch(loadUserDocs(res.data || [] )))
      .catch(console.error.bind(console));

export const fetchDoc = docId =>
  dispatch =>
    axios.get(`api/docs/${docId}`)
      .then(res => {
        dispatch(loadSingleDoc(res.data || {} ));
        history.push('/create');
      })
      .catch(console.error.bind(console));

export const fetchNewDoc = () =>
  dispatch => {
    dispatch(createNewDoc());
    history.push('/create');
  };

export const saveDoc = doc =>
  dispatch =>
    axios.post('api/docs', doc)
      .then(res => {
        dispatch(saveSingleDoc(res.data || {} ));
        history.push('/submit');
      })
      .catch(console.error.bind(console));

export const deleteDoc = docId =>
  dispatch =>
    axios.delete(`api/docs/${docId}`)
      .then(res => dispatch(deleteSingleDoc(res.data || {})))
      .catch(console.error.bind(console));

// ---------- REDUCER ----------
export default (state = initState, action) => {
  const newState = Object.assign({}, state );
  switch (action.type) {
    case LOAD_USER_DOCS:
      newState.userDocs = action.userDocs;
      break;
    case LOAD_DOC:
      newState.doc = action.doc;

      // TODO: take this blob reader out of the reducer:
      // TODO: put it in Creator and pass to Preview as props.
      // if (newState.doc.imgBlob) {
      //   const reader = new FileReader();
      //   reader.onload = readEvent => {
      //     newState.doc.imgSrc = readEvent.target.result;
      //     console.log('imgSrc ON STATE!!!!!!', newState.doc.imgSrc);
      //     return newState;
      //   };
      //   console.log('type of imgBlob!!!!!!', newState.doc.imgBlob, typeof newState.doc.imgBlob);
      //   const blob = new Blob([newState.doc.imgBlob], {type: 'image/jpeg'});
      //   return reader.readAsDataURL(blob);
      // }

      break;
    case CREATE_NEW_DOC:
      newState.doc = {};
      break;
    case SAVE_DOC:
      if (newState.userDocs) {
        updateSavedDocInList(newState.userDocs, action.doc);
      }
      newState.doc = action.doc;
      break;
    case DELETE_DOC:
      newState.doc = {};
      break;
    default:
      return newState;
  }
  return newState;
};
