import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { Button, Item, Number, Text } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContacts(id));
  };
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <Item>
      <Text>
        {name}:<Number>{number}</Number>
      </Text>
      <Button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting && 'disabled'}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
