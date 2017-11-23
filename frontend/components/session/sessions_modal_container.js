import { connect } from 'react-redux';
import { createUser, loginUser } from '../../actions/session_actions';
import { receiveErrors } from '../../actions/error_actions';
import SessionsModal from './sessions_modal';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  createUser: (user) => dispatch(createUser(user)),
  clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionsModal);