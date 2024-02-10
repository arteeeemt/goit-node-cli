const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list": {
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    }
    case "get": {
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    }
    case "remove": {
      const deletedContact = await contacts.removeContact(id);
      return console.log(deletedContact);
    }
    case "add": {
      const addedContact = await contacts.addContact(name, email, phone);
      return console.log(addedContact);
    }
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const options = program.opts();
invokeAction(options)