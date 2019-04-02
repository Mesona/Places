import React from 'react';
import { withRouter } from 'react-router-dom';
import PlaceIndexItemContainer from './place_index_item_container';
import PlaceIndexListContainer from './place_index_list_container';

class PlacesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      displaySortMenu: false,
      displayAZ: false,
      displayStyle: "places",
      currentDisplay: 'Owned by anyone',
      placeSelection: '',
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.showAZDropdown = this.showAZDropdown.bind(this);
    this.hideAZDropdown = this.hideAZDropdown.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.sortIndex = this.sortIndex.bind(this);
    this.swapView = this.swapView.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaces();
    this.props.resetPages();
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

  showAZDropdown(e) {
    e.preventDefault();
    this.setState({ displayAZ: true }, () => {
      document.addEventListener('click', this.hideAZDropdown);
    });
  }

  hideAZDropdown() {
    this.setState({ displayAZ: false }, () => {
      document.removeEventListener('click', this.hideAZDropdown);
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

  sortIndex(target) {
    switch (target) {
      case 'alphabetical':
        console.log('alpha');
        break;
      case 'historical':
        console.log('hist');
        break;
    }
  }

  swapView() {
    if (this.state.displayStyle === "places") {
      this.setState({displayStyle: "list"});
    } else {
      this.setState({displayStyle: "places"});
    }
  }
  
  
  render () {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const { myPlaces, otherPlaces } = this.props;
    this.state.allPlaces = myPlaces.concat(otherPlaces);

    return (
      <main className="places-index">
        <section className={this.props.currentUser === null ? "cannot-view" : "places-index-header"}>
          <div className="recent-sites">
            Recent sites
          </div>

          <div className="places-sort-dropdown" onClick={this.showDropdownMenu}>
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

          <div className="places-list-and-view-buttons">

            <div className="list-view-icon" onClick={this.swapView}>
              <img src={window.images.listViewIcon}></img>
              <i className="up-arrow"></i>
              <span className="tooltiptext">
                {this.state.displayStyle === "places" ? "List view" : "Grid view"}
              </span>
            </div>

            <div className="places-sort-icon" onClick={this.showAZDropdown}><img src={window.images.placesSortIcon}></img>
              { this.state.displayAZ ? (
                <ul>
                  <li onClick={(e) => this.sortIndex('alphabetical')}>Alphabetical</li>
                  <li onClick={(e) => this.sortIndex('historical')}>Historical</li>
                </ul>
              ) : (
                <div>
                  <i className="up-arrow"></i>
                  <span className="tooltiptext">Sort options</span>
                </div>
              )}
            </div>

            <div className="places-sort-icon-dropdown" onClick={this.showDropdownMenu}>
              { this.state.displaySortMenu ? (
                <ul>
                  <li onClick={(e) => this.updateIndex('allPlaces')}>Owned by me</li>
                  <li onClick={(e) => this.updateIndex('myPlaces')}>Not owned by me</li>
                </ul>
              ) : (
                null
              )}
            </div>

          </div>
        </section>
        <section className={this.state.displayStyle}>
          { this.state.displayStyle === "places" ? (
            (this.state.placeSelection === '' &&
              this.state.allPlaces !== undefined ? this.state.allPlaces : this.state.placeSelection
              ).map(place => <PlaceIndexItemContainer key={place.id} place={place} 
              monthNames={monthNames} />)
          ) : (
            (this.state.placeSelection === '' && 
            this.state.allPlaces !== undefined ? this.state.allPlaces : this.state.placeSelection
            ).map(place => <PlaceIndexListContainer key={place.id} place={place} 
              monthNames={monthNames} />)
          )}
        </section>
      </main>
    );
  }
};

export default withRouter(PlacesIndex);