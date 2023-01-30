import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = { items: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            name: values.name,
            number: values.number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
