import axios from 'axios';

// ---------- ACTION TYPES ----------
const LOAD_USER_DOCS = 'LOAD_USER_DOCS';
const LOAD_DOC = 'LOAD_DOC';
const SAVE_DOC = 'SAVE_DOC';
const DELETE_DOC = 'DELETE_DOC';

// ---------- ACTION CREATORS ----------
const loadUserDocs = userDocs => ({ type: LOAD_USER_DOCS, userDocs });
const loadSingleDoc = doc => ({ type: LOAD_DOC, doc });
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

export const fetchDoc = () =>
  dispatch =>
    axios.get('api/docs')
      .then(res => dispatch(loadSingleDoc(res.data || {} )))
      .catch(console.error.bind(console));

export const saveDoc = () =>
  dispatch =>
    axios.post('api/docs')
      .then(res => dispatch(saveSingleDoc(res.data || {} )))
      .catch(console.error.bind(console));

export const deleteDoc = () =>
  dispatch =>
    axios.delete('api/docs')
      .then(res => dispatch(deleteSingleDoc(res.data || {})))
      .catch(console.error.bind(console));

// ---------- REDUCER ----------
export default function (state = initState, action) {
  const newState = Object.assign({}, state );
  switch (action.type) {
    case LOAD_USER_DOCS:
      newState.userDocs = action.userDocs;
      break;
    case LOAD_DOC:
      newState.doc = action.doc;
      break;
    case SAVE_DOC:
      newState.doc = action.doc;
      break;
    case DELETE_DOC:
      newState.doc = {};
      break;
    default:
      return newState;
  }
  return newState;
}
