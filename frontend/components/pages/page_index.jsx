import React from 'react';
import { withRouter } from 'react-router-dom';
import PageShowContainer from './page_show_container';


class PageIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   parentPlace: this.props.entities.places[this.props.match.placeId],

    // };

    this.getData = this.getData.bind(this);
  }

  getData () {
    console.log(this.state);
    console.log("STATE ^ PROPS BELOW");
    console.log(this.props);
  }

  componentDidMount() {
    // this.props.fetchPages(this.props.match.params.place_id);
    // this.props.fetchPages(125);
    // console.log("BEGIN INDEX LOGS");
    // console.log(this.state);
    // console.log("STATE ^ PROPS BELOW");
    // console.log(this.props);
  }

  render () {

    return (
      <main className="page">
        <PageShowContainer />
        <section className="pages-index">
          <header className="pages-index-header" onClick={this.getData}>
            HEAD INDEX
          </header>
          <section className="pages-index-body">
            BODY
          </section>
        </section>
      </main>
    )
  }

}

export default withRouter(PageIndex);