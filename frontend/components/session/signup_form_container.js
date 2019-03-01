import React from 'react';
import { connect}  from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formType: 'Sign Up',
  otherFormType: 'Sign in',
  otherModalType: 'login',
  shouldHide: false,
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(createNewUser(formUser)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Sign in
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);