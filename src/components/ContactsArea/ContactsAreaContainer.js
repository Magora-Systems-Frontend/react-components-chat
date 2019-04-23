import { connect } from 'react-redux';
import ContactsAreaDisplay from './ContactsAreaDisplay';
import { contactsSelector } from '../../selectors';

function mapStateToProps(state) {
  return {
    contacts: contactsSelector(state),
    loading: state.loading.contactsLoading,
  };
}

export default connect(mapStateToProps)(ContactsAreaDisplay);
