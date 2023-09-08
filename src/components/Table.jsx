import React, { useEffect, useState } from "react";
import Contact from "./Contact";

const Table = ({ contactsList, num }) => {
  // console.log("This is props from Table: ", contactsList)
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsList.slice(5, contactsList.length)
  );

  const addRandomContact = () => {
    const updateRemaining = [...remainingContacts];

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNum, 1)[0];

    const updatedContacts = [...contacts, randomContact];
    console.log("rem contacts: ", updatedContacts);

    setContacts(updatedContacts);
    setRemainingContacts(updateRemaining);
  };

  const sortPopularity = () => {
    const toSortPopularity = [...contacts];
    const sortedByPopularity = toSortPopularity.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  };

  const sortName = () => {
    const toSortName = [...contacts];
    const sortedByName = toSortName.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);

    setContacts(updatedContacts);
  };

  return (
    <div>
      <div className="container text-center">
        <h1>Iron Contacts</h1>
        <button onClick={() => addRandomContact()}>Add Random Contacts</button>
        <button onClick={() => sortPopularity()}>Sort By Popularity</button>
        <button onClick={() => sortName()}>Sort By Name</button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, k) => (
            <Contact
              contactInfo={contact}
              key={k}
              num={k}
              deleteFunction={() => deleteContact(k)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
