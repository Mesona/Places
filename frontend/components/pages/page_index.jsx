import React from 'react';
import { withRouter } from 'react-router-dom';


class PageIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   parentPlace: 
    // }

    this.getData = this.getData.bind(this);
  }

  getData () {
    console.log(this.state);
    console.log("STATE ^ PROPS BELOW");
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchPages(this.props.match.params.placeId);
    // console.log("BEGIN INDEX LOGS");
    // console.log(this.state);
    // console.log("STATE ^ PROPS BELOW");
    // console.log(this.props);
  }

  render () {

    return (
      <main className="page">
        <header className="page-index-header" onClick={this.getData}>
          HEAD INDEX
        </header>
        <section className="page-index-body">
          BODY
        </section>
      </main>
    )
  }

}

export default withRouter(PageIndex);