import React from 'react';

class PlacesHamburger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
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

  render () {
    return (
      <div className="places-hamburger-dropdown">
        <div className="places-hamburger-button" onClick={this.showDropdownMenu}>Test Dropdown</div>

        { this.state.displayMenu ? (
          <ul>
            <li>Rename</li>
            <li>Remove</li>
            <li>Make Private</li>
          </ul>
        ) : (
          null
        )}
      </div>
    )
  }
}

export default PlacesHamburger;