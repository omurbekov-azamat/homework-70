import React, {useEffect} from 'react';
import ContactForm from "../../components/ContactForm/ContactForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOneContact, selectOneContactFetchLoading} from "../../store/contactSlice";
import {SendContact} from "../../types";
import {fetchContact, updateContact} from "../../store/contactsThunks";
import {useParams} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const EditContact = () => {
  const {id} = useParams() as {id: string};
  const oneContact = useAppSelector(selectOneContact);
  const fetchOneLoading = useAppSelector(selectOneContactFetchLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContact(id));
  }, [id, dispatch]);

  const onEdit = async (contact: SendContact) => {
    await dispatch(updateContact({
      id: id,
      contact: contact,
    }));
  };

  const existingContact = oneContact && {
    ...oneContact,
    phone: oneContact.phone.toString(),
  };

  return (
    <div className='bg-success bg-opacity-25'>
      {fetchOneLoading && <Spinner/>}
      {existingContact && (
        <ContactForm
          onSubmit={onEdit}
          existingContact={existingContact}
          isEdit
        />
      )}
    </div>
  );
};

export default EditContact;