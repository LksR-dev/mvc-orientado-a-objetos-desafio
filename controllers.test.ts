import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as jsonfile from "jsonfile";

// test("Testeo el constructor del controller", (t) => {});
test("Testeo el constructor del controller", (t) => {
  const contactControll = new ContactsController();
  const contactColl = new ContactsCollection();

  contactColl.load();

  t.deepEqual(contactColl, contactControll.contacts);
});

// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");

  const mockOptions = new ContactsControllerOptions();
  mockOptions.action = "get";
  mockOptions.params = false;

  t.deepEqual(model.processOptions(mockOptions), fileContent);
});
