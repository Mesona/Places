import React from 'react';
import { connect } from 'react-redux';
import PageShow from './page_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageShow);