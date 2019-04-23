import { connect } from 'react-redux';
import MessagesAreaDisplay from './MessagesAreaDisplay';
import { contactByIdSelector, chatSelector } from '../../selectors';

function mapStateToProps(state) {
  return {
    contact: contactByIdSelector(state),
    chat: chatSelector(state),
    loading: state.loading.chatLoading,
  };
}

export default connect(mapStateToProps)(MessagesAreaDisplay);
