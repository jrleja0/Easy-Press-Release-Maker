import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BasicInput, BasicInputWithCheckbox} from './index';

/*///
 COMPONENT
*////
class Creator extends React.Component {

  constructor(props) {
    super();

    this.state = {
      imgSrc: '/assets/jrl_logo.png',
      crop: false,
      query: '',
      showAjaxSpinner: false
    };

    this.onDocumentDrag = this.onDocumentDrag.bind(this);
    this.onPhotoDrop = this.onPhotoDrop.bind(this);
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

  render() {
    const { query, showAjaxSpinner } = this.state;

    return (
      <div>
        <div className="div-release-main-img">
          <div className={this.state.crop ? 'release-main-img-crop' : ''}>
            <img className="release-main-img img-fluid" src={this.state.imgSrc} alt="drag your image here" />
          </div>
          <div className="div-img-cover" />
        </div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <BasicInputWithCheckbox name="Image Credits" handleChange={this.handleChange} query={query} type="text" checkboxLabel="Crop Image" />
            <BasicInput name="Title" handleChange={this.handleChange} query={query} type="text" />
            <BasicInputWithCheckbox name="Date" handleChange={this.handleChange} query={query} type="date" placeholder="" checkboxLabel="Today's Date" />
            <BasicInput name="Location" handleChange={this.handleChange} query={query} type="text" />
            <BasicInput name="Main Text" handleChange={this.handleChange} query={query} type="text" />
            <BasicInput name="Secondary Text" handleChange={this.handleChange} query={query} type="text" />
            <BasicInput name="Text About Company" handleChange={this.handleChange} query={query} type="text" />
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
