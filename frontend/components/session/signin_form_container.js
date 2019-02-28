import React from 'react';
import { connect}  from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Log In',
  shouldHide: true,
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);