import React from 'react';
import {ContactsFromApi} from "../../types";

interface Props {
  item: ContactsFromApi;
}

const ContactItem: React.FC<Props> = ({item}) => {
  return (
    <div
      className='d-flex align-items-center border border-light w-50 mb-3'
    >
      <img
        src={item.photo}
        alt={item.name}
        style={{width: '150px', height: '150px'}}
        className='me-5'
      />
      <p>Name: {item.name}</p>
    </div>
  );
};

export default ContactItem;