import React from 'react';
import PropTypes from 'prop-types';
import { ContactContainer } from '../Contact';
import Loader from '../_common/Loader';

const ContactsAreaDisplay = ({ contacts, loading }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      contacts.map(contact => <ContactContainer contact={contact} key={contact.id} />)
    )}
  </>
);

ContactsAreaDisplay.propTypes = {
  contacts: PropTypes.array,
  loading: PropTypes.bool,
};

export default ContactsAreaDisplay;
