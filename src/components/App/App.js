import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts, Layout, Title } from './App..styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export const App = () => {
  const filterContacts = useSelector(getFilteredContacts);
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <Contacts>Contacts</Contacts>
      {filterContacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Layout>
  );
};
