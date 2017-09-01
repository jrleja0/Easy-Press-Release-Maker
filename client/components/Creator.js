import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/*///
 COMPONENT
*////
class Creator extends React.Component {

  constructor(props) {
    super();

    this.state = {
      imgSrc: '/assets/jrl_logo.png',
      crop: false
    };

    this.onDocumentDrag = this.onDocumentDrag.bind(this);
    this.onDocumentDrop = this.onDocumentDrop.bind(this);
  }

  componentDidMount() {
    document.addEventListener('drop', this.onDocumentDrop, false);
    document.addEventListener('dragover', this.onDocumentDrag, false);
    document.addEventListener('dragleave', this.onDocumentDrag, false);
  }

  componentWillUnmount() {
    document.removeEventListener('drop', this.onDocumentDrop, false);
    document.removeEventListener('dragover', this.onDocumentDrag, false);
    document.removeEventListener('dragleave', this.onDocumentDrag, false);
  }

  onDocumentDrag(event) {
    event.preventDefault();
  }

  onDocumentDrop(event) {
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
    return (
      <div>
        <div className="div-release-main-img">
          <div className={this.state.crop ? 'release-main-img-crop' : ''}>
            <img className="release-main-img img-fluid" src={this.state.imgSrc} alt="drag your image here" />
          </div>
          <div className="div-img-cover" />
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
