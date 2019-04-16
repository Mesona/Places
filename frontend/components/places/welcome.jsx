
import React from 'react';

class Welcome extends React.Component {
  render () {
    return (
      <div className="session-form">
        {/* <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br> */}
        <div className="modal-title">Welcome to Places!</div><br></br>
        <div className="welcome-text">
          <span>
            Places was my attempt to recreating Google sites, found at 
            <a href="https://sites.google.com/new"> https://sites.google.com.new</a>,
            as part of the AppAcademy curriculumn.
            <br />
            <br />
            However, this was also my first real attempt at using Rails, React, and Redux.
            That, combined with the fact that Google Sites has way more complexity to it
            than I was initially aware of forced me to adjust my plans.
            <br />
            <br />
            So, instead of having a clone of Google Sites, I pivoted this project to 
            be a stylistic forum, designed in the aesthetic of Google Sites.
            <br />
            <br />
            Public Places are designated by the 
            <img src={window.images.sharedImg} className="mini-shared-img"></img> image. 
            Anyone can view public Places, but only registered users can contribute.
          </span>
        </div>
      </div>
    )
  }
}

export default Welcome;