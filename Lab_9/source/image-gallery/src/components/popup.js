import React from 'react';
import './images.css';

export class PopUp extends React.Component
{
  render(){
  return (
    <div className="popupParent">
    <button
            className="imageClosingButton"
            onClick={this.props.closePopup}
            >X</button>
        <div className="popupImage">
            
            <img src={this.props.popImageUrl} />
        </div>
    </div>
  );
}
}

export default PopUp;
