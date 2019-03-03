import React from 'react';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';
import PlaceIndexItem from './place_index_item';
import PlaceIndexItemContainer from './place_index_item_container';

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

  componentDidMount() {
    this.props.fetchPlaces();
  }

  
  
  render () {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const options = [
      'Owned by anyone', 'Owned by me', 'Not owned by me'
    ];

    const { places, deletePlace } = this.props;

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
        {/* {places.map(place =>  <Link to={`/places/${place.id}`}><PlaceIndexItem key={place.id} place={place}
            monthNames={monthNames} /></Link>)} */}
          {places.map(place => <PlaceIndexItem key={place.id} place={place} 
            monthNames={monthNames} />)}
        </section>
      </main>
    );
  }
};

export default PlacesIndex;