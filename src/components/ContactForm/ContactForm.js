import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  FormSection,
  Input,
  Label,
  Section,
} from './ContactForm.styled';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const initialValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContacts(values));
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormSection autoComplete="of">
        <Section>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </Section>
        <Button type="submit">Add contact</Button>
      </FormSection>
    </Formik>
  );
};
