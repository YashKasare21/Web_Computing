import React, { useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const addContact = () => {
    setContacts([...contacts, { name, phone, email }]);
    setName(""); setPhone(""); setEmail("");
  };

  const removeContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Contact List</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={addContact}>Add</button>
      <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
      {contacts.filter(c => c.name.includes(search)).map((c, i) => (
        <div key={i}>{c.name} – {c.phone} – {c.email}
          <button onClick={() => removeContact(i)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default ContactList;
