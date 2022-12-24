import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOneContact} from "../../store/contactSlice";
import {SendContact} from "../../types";
import {updateContact} from "../../store/contactsThunks";

const EditContact = () => {
  const oneContact = useAppSelector(selectOneContact);
  const dispatch = useAppDispatch();

  let editPerson:SendContact = {
    name: oneContact.name,
    phone: oneContact.phone,
    email: oneContact.email,
    photo: oneContact.photo,
  };

  const onEdit = async (contact: SendContact) => {
    await dispatch(updateContact({
      id: oneContact.id,
      contact: contact,
    }));
  };

  return (
    <div className='bg-success bg-opacity-25'>
      <ContactForm onSubmit={onEdit} existingContact={editPerson} isEdit/>
    </div>
  );
};

export default EditContact;