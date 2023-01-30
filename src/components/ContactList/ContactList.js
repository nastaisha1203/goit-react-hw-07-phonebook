// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
