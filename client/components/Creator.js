import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BasicInput, BasicInputWithCheckbox, BasicTextArea, Preview} from './index';
import store, { saveDoc } from '../store';

/*///
 COMPONENT
*////
class Creator extends React.Component {

  constructor(props) {
    super();

    this.state = {
      docData: store.getState().docStore.doc || {}
    };

    this.onDocumentDrag = this.onDocumentDrag.bind(this);
    this.onPhotoDrop = this.onPhotoDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.addEventListener('drop', this.onPhotoDrop, false);
    document.addEventListener('dragover', this.onDocumentDrag, false);
    document.addEventListener('dragleave', this.onDocumentDrag, false);
  }

  componentWillUnmount() {
    document.removeEventListener('drop', this.onPhotoDrop, false);
    document.removeEventListener('dragover', this.onDocumentDrag, false);
    document.removeEventListener('dragleave', this.onDocumentDrag, false);
  }

  onDocumentDrag(event) {
    event.preventDefault();
  }

  onPhotoDrop(event) {
    event.preventDefault();
    if (event.target === document.getElementById('drag-img-here')) {
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = readEvent => {
        this.setState({
          docData: Object.assign({}, this.state.docData,
            { imgSrc: readEvent.target.result,
              showPreview: true
            }),
        });
      };
      reader.readAsDataURL(file);
    }
  }

  handleChange(event) {
    const dataName = event.target.id;
    this.setState({
      docData: Object.assign({}, this.state.docData,
        { [dataName]: event.target.value,
          showPreview: true
        }),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(saveDoc(this.state.docData));
  }

  render() {
    const { docData } = this.state;

    return (
      <div>
        <div className="div-release-main-img">
          <div className={docData.crop ? 'release-main-img-crop' : ''}>
            <img className="release-main-img img-fluid"
              src={
                docData.imgSrc || '/assets/jrl_logo_draganddrop.png'
              } alt="drag your image here" />
          </div>
          <div className="div-img-cover" id="drag-img-here" />
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <BasicInputWithCheckbox name="Image Credits" handleChange={this.handleChange} inputData={docData['Image Credits']} type="text" checkboxLabel="Crop Image" />
                <BasicInput name="Title" handleChange={this.handleChange} inputData={docData.Title} type="text" />
                <BasicInputWithCheckbox name="Date" handleChange={this.handleChange} inputData={docData.Date} type="date" placeholder="" checkboxLabel="Today's Date" />
                <BasicInput name="Location" handleChange={this.handleChange} inputData={docData.Location} type="text" />
                <BasicTextArea name="Main Text" handleChange={this.handleChange} inputData={docData['Main Text']} type="text" />
                <BasicTextArea name="Secondary Text" handleChange={this.handleChange} inputData={docData['Secondary Text']} type="text" />
                <BasicTextArea name="Text About Company" handleChange={this.handleChange} inputData={docData['Text About Company']} type="text" />
              </tbody>
            </table>
            <div className="div-submit-button">
              <button type="submit" className="btn btn-success" disabled={!docData.showPreview}>Save and View</button>
              <Link to="/menu" className="btn btn-danger">Exit Without Saving</Link>
            </div>
          </form>
        </div>
        <div>
          <h3>Live Preview:</h3>
        </div>
        { docData.showPreview ?
          <Preview docData={docData} />
          : <h5>Nothing To Preview Yet...</h5>
        }
      </div>
    );
  }
}

export default Creator;

/*///
 PROP TYPES
*////
Creator.propTypes = {

};
