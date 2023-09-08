import React from "react";

const Contact = ({
  contactInfo: { name, pictureUrl, popularity, wonOscar, wonEmmy },
  num,
  deleteFunction,
}) => {
  return (
    <tr>
      <th scope="row">{++num}</th>
      <td>
        <img src={pictureUrl} alt="error" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{wonOscar && <p>Yes</p>}</td>
      <td>{wonEmmy && <p>Yes</p>}</td>
      <td>
        <button onClick={deleteFunction}>Delete</button>
      </td>
    </tr>
  );
};

export default Contact;
