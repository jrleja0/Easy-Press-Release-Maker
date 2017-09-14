import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BasicInput, BasicInputWithCheckbox, BasicTextArea} from './index';

/*///
 COMPONENT
*////
class Creator extends React.Component {

  constructor(props) {
    super();

    this.state = {
      imgSrc: '/assets/jrl_logo.png',
      crop: false,
      docData: {},
      showAjaxSpinner: false,
      showPreview: false
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
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = readEvent => {
      this.setState({
        imgSrc: readEvent.target.result
      });
    };
    reader.readAsDataURL(file);
  }

  handleChange(event) {
    const dataName = event.target.id;
    this.setState({
      docData: Object.assign({}, this.state.docData, { [dataName]: event.target.value })
    });
  }

  handleSubmit(event) {
    // event.preventDefault();
    // this.fetchGoogleSearchTitles(this.state.query);
    // this.setState({
    //   query: '',
    //   showAjaxSpinner: true
    // });
  }

  render() {
    const { imgSrc, crop, docData, showAjaxSpinner, showPreview } = this.state;

    return (
      // TODO: Create two components (dumb?): Preview and Creator.
      // <div>
      //   { showPreview ?
      //     <Preview {...this.state} />
      //     : <Creator {...this.state} />
      //   }
      // </div>
      <div>
        <div className="div-release-main-img">
          <div className={crop ? 'release-main-img-crop' : ''}>
            <img className="release-main-img img-fluid" src={imgSrc} alt="drag your image here" />
          </div>
          <div className="div-img-cover" />
        </div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>
                <BasicInputWithCheckbox name="Image Credits" handleChange={this.handleChange} inputData={docData[name]} type="text" checkboxLabel="Crop Image" />
                <BasicInput name="Title" handleChange={this.handleChange} inputData={docData[name]} type="text" />
                <BasicInputWithCheckbox name="Date" handleChange={this.handleChange} inputData={docData[name]} type="date" placeholder="" checkboxLabel="Today's Date" />
                <BasicInput name="Location" handleChange={this.handleChange} inputData={docData[name]} type="text" />
                <BasicTextArea name="Main Text" handleChange={this.handleChange} inputData={docData[name]} type="text" />
                <BasicTextArea name="Secondary Text" handleChange={this.handleChange} inputData={docData[name]} type="text" />
                <BasicTextArea name="Text About Company" handleChange={this.handleChange} inputData={docData[name]} type="text" />
              </tbody>
            </table>
          </form>
        </div>
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

// Photo Credits
// Title
// Date
// Location
// Main Text
// Standard Text about Company
// Additional information / Sections unique to the company
