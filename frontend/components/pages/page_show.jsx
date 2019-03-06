import React from 'react';
import PageIndexContainer from './page_index_container';
import { withRouter } from 'react-router-dom';


class PageShow extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  getData () {
    console.log(this.props.viewState);
    console.log("STATE ^ PROPS BELOW");
    console.log(this.props);
  }

  // componentDidMount() {
  //   this.props.fetchPages(this.props.match.params.placeId);
  // }


  render () {
    return (
        <section className="page-show">
          <header className="page-show-header" onClick={this.getData}>
            HEAD
          </header>
          <section className="page-show-body">
            BODY
          </section>
        </section>
    )
  }

}


//   render () {
//     return (
//       <main className="page">
//         <section className="page-show">
//           <header className="page-show-header" onClick={this.getData}>
//             HEAD
//           </header>
//           <section className="page-show-body">
//             BODY
//           </section>
//         </section>
//         <section className="pages-index-sidebar">
//           <PageIndexContainer />
//         </section>
//       </main>
//     )
//   }

// }

export default withRouter(PageShow);