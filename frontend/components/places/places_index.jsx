import React from 'react';
import { Link } from 'react-router-dom';

class PlacesIndex extends React.Component {
  // const { places } = this.props;
  // const display = currentUser ? (
  //   <div>
  //     <p>INPUT LOGGEDIN ACTIONS AND STUFF HERE</p>
  //   </div>
  // ) : (
  //   <div className="logged-out-options">
  //     <p>INPUT LOGGEDOUT ACTIONS AND STUFF HERE</p>
  //   </div>
  // );

  render () {
    return (
      <main className="places-index">
        <h1 className="logo">PLACES INDEX</h1>
        <div>
          {/* { display } */}
        </div>
      </main>
    );
  }
};

export default PlacesIndex;