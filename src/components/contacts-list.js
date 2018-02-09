import { Link } from 'react-router-dom';
import React from 'react';

const ContactsList = (props) => (
  <div>
    {
      props.contacts.map(c => (
        <div key={c.number}>
          <p>{c.name}</p>
          <Link to={`/contacts/${c.number}`}>edit</Link>
          <button className="btn-link">delete</button>
          <hr/>
        </div>
      ))
    }
  </div>
)

export default ContactsList;