import React from 'react';
import { ContactDisplay } from '../Contact';
import avatar from '../../images/avatar.png';

const ContactsAreaDisplay = () => (
  <>
    <ContactDisplay avatar={avatar} name="John Marry" lastMessage="Hello, you" />
    <ContactDisplay avatar={avatar} name="John Marry" lastMessage="What's up, Joey?" />
  </>
);

export default ContactsAreaDisplay;
