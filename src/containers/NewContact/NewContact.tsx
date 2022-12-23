import React from 'react';
import {createContact} from "../../store/contactsThunks";
import {useAppDispatch} from "../../app/hooks";
import ContactForm from "../../components/ContactForm/ContactForm";
import {SendContact} from "../../types";

const NewContact = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (contact: SendContact) => {
    await dispatch(createContact(contact));
  };

  return (
    <div>
      <ContactForm onSubmit={onSubmit}/>
    </div>
  );
};

export default NewContact;