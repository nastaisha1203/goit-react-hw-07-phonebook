export const getFilteredContacts = state => {
  const normalize = state.filter.toLowerCase();
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalize)
  );
};

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
