import { connect } from 'react-redux';
import ContactsAreaDisplay from './ContactsAreaDisplay';
import { filteredContactsSelector } from '../../selectors';

function mapStateToProps(state) {
  return {
    contacts: filteredContactsSelector(state),
    loading: state.loading.contactsLoading,
  };
}

export default connect(mapStateToProps)(ContactsAreaDisplay);
