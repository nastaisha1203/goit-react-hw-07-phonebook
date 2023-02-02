import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts, Container, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
      </div>
      <div>
        <Contacts>Contacts</Contacts>
        {isLoading && <Loader />}
        {error && <b>{error}</b>}
        {filterContacts.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </Container>
  );
};
