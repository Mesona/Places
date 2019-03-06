import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaceIndexItemContainer from './place_index_item_container';

class PlacesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      currentDisplay: 'Owned by anyone',
      placeSelection: '',
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.updateIndex = this.updateIndex.bind(this);

  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  componentDidUpdate(prevProps) {
    // if (this.props.currentUser != prevProps.currentUser) {
    //   this.setState(this.state);
    // }
  }

  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  updateIndex(target) {
    switch (target) {
      case 'allPlaces':
        this.state.currentDisplay = 'Owned by anyone';
        this.state.placeSelection = this.state.allPlaces;
        break;
      case 'myPlaces':
        this.state.currentDisplay = 'Owned by me';
        this.state.placeSelection = this.props.myPlaces;
        break;
      case 'otherPlaces':
        this.state.currentDisplay = 'Not owned by me';
        this.state.placeSelection = this.props.otherPlaces;
        break;
    }
  }
  
  
  render () {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const options = [
      'Owned by anyone', 'Owned by me', 'Not owned by me'
    ];

    // console.log('PLACE LOG')
    // console.log(this.state.allPlaces)

    const { places, deletePlace, myPlaces, otherPlaces, privatePlaces } = this.props;
    this.state.allPlaces = myPlaces.concat(otherPlaces);

    return (
      <main className="places-index">
        <section className="places-index-header">
          <div className={this.props.currentUser === null ? "cannot-view" : "places-sort-dropdown"} onClick={this.showDropdownMenu}>
            <div className="places-sort-button">{this.state.currentDisplay}
              { this.state.displayMenu ? (
                <ul>
                  <li onClick={(e) => this.updateIndex('allPlaces')}>Owned by anyone</li>
                  <li onClick={(e) => this.updateIndex('myPlaces')}>Owned by me</li>
                  <li onClick={(e) => this.updateIndex('otherPlaces')}>Not owned by me</li>
                </ul>
              ) : (
                null
              )}
            </div>
          </div>
        </section>
        <section className="places">
          {(this.state.placeSelection === '' ? this.state.allPlaces : this.state.placeSelection).map(place => <PlaceIndexItemContainer key={place.id} place={place} 
            monthNames={monthNames} />)}
        </section>
      </main>
    );
  }
};

export default withRouter(PlacesIndex);