import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const file = "./contacts.json";
    const contacts = jsonfile.readFileSync(file);
    this.data = contacts;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    return this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    return this.data.find((i) => {
      return i.id == id;
    });
  }
}
export { ContactsCollection };
