import React from 'react';

class PlaceShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlace(this.props.match.params.placeId);
  }

  render() {
    return (
      <div>
        Temporary Text, should be SidebarContainer
        Temporary Text, should be PageContainer soon
      </div>
    )
  }
}

export default PlaceShow;