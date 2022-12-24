import React from 'react';
import {useAppDispatch} from "../../app/hooks";
import {showModal} from "../../store/contactSlice";
import {ContactsFromApi} from "../../types";

interface Props {
  item: ContactsFromApi;
}

const ContactItem: React.FC<Props> = ({item}) => {
  const dispatch = useAppDispatch();

  const showContact = (contact: ContactsFromApi) => {
    dispatch(showModal(contact));
  };

  return (
    <div
      className='d-flex align-items-center border border-light w-50 mb-3'
      onClick={() => showContact(item)}
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