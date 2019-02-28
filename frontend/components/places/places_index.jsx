import React from 'react';
import Dropdown from 'react-dropdown';
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

    const options = [
      'Owned by anyone', 'Owned by me', 'Not owned by me'
    ];


    return (
      <main className="places-index">
        <section className="places-index-header">
          <div className="places-filter-dropdown">
            <Dropdown
              className="places-dropdown"
              options={options} value={''}
              placeholder="Owned by anyone" 
              arrowClosed={<span className="arrow-closed" />}
              arrowOpen={<span className="arrow-open" />}
            />
          </div>
        </section>
        <section className="places">
          {/* { display } */}
          {/* <div className="col1">
          </div>
          <div className="col2">
          </div>
          <div className="col3">
          </div>
          <div className="col4">
          </div>
          <div className="col5">
          </div> */}
        </section>
      </main>
    );
  }
};

export default PlacesIndex;