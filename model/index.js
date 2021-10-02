const { constants } = require('buffer');
const crypto = require('crypto');
const DB = require('./db');
const db = new DB('contacts.json');

const listContacts = async () => {
  return await db.read();
};

const getContactById = async contactId => {};

const removeContact = async contactId => {};

const addContact = async body => {
  const contacts = await db.read();
  const newContact = {
    id: crypto.randomUUID(),
    isFavorite: false,
    ...body,
  };

  contacts.push(newContact);

  await db.write(contacts);

  return newContact;
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
