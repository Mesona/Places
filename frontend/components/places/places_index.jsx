import React from 'react';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';

class PlacesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listOpen: false,
    // };

    this.handleDropdown = this.handleDropdown.bind(this);
  }
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

  // Come back to this when Pages are actually working -- dropdown menu
  handleDropdown(e) {
    e.preventDefault();
    // document.getElementById("places-filter-dropdown").classList.toggle("show");
  }
  
  // handleClickOutside() {
  //   this.setState({
  //     listOpen: false,
  //   });
  // }

  // toggleList() {
  //   this.setState(oldState => ({
  //     listOpen: !oldState.listOpen
  //   }));
  // }
  

  render () {

    const options = [
      'one', 'two', 'three'
    ];

    return (
      <main className="places-index">
        <section className="places-index-header">
          <div className="places-filter-dropdown">
            <Dropdown options={options} value={''} placeholder="Owned by anyone" />
            {/* <button onClick={this.handleDropdown} className="places-filter-dropdown-button">Owned by anyone</button>
            <div id="places-filter-dropdown" className="places-filter-dropdown-content" hidden={true}>
              <a href="#">Owned by anyone</a>
              <a href="#">Owned by me</a>
              <a href="#">Not owned by me</a>
            </div> */}
          </div>
        </section>
        <section className="places">
          {/* { display } */}
          <div className="col1">
          </div>
          <div className="col2">
          </div>
          <div className="col3">
          </div>
          <div className="col4">
          </div>
          <div className="col5">
          </div>
        </section>
      </main>
    );
  }
};

export default PlacesIndex;