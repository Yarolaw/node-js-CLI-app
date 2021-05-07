import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';

import program from './helpers/commander.js';

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(Number(id));
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(Number(id));
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
