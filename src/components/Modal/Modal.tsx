import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteContact} from "../../store/contactsThunks";
import {
  selectShowModal,
  closeModal,
  selectGetOneContact,
  selectDeleteOneContactLoading
} from "../../store/contactSlice";
import Backdrop from "../Backdrop/Backdrop";
import ButtonSpinner from "../Spinner/ButtonSpiner";

const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const oneContact = useAppSelector(selectGetOneContact)!;
  const showModal = useAppSelector(selectShowModal);
  const deleteLoading = useAppSelector(selectDeleteOneContactLoading);

  const onDeleteContact = async (id: string) => {
    await dispatch(deleteContact(id));
  };

  const coverModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Backdrop show={showModal}/>
      <div className='modal show' style={{display: showModal ? 'block' : 'none'}}>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-content'>
            <div className='modal-header d-flex'>
              <button className='ms-auto btn btn-primary' onClick={coverModal}>close</button>
            </div>
            <div className='d-flex p-2 align-items-center'>
              <img
                src={oneContact.photo}
                alt={oneContact.name}
                style={{width: '150px', height: '150px'}}
                className='me-3'
              />
              <div className='text-capitalize'>
                <p>name: {oneContact.name}</p>
                <p>phone number: {oneContact.phone}</p>
                <p>email: {oneContact.email}</p>
              </div>
            </div>
            <div className='d-flex modal-footer'>
              <button
                className='btn btn-info'
                onClick={() => {
                  navigate('/edit-contact/' + oneContact.id)
                  coverModal();
                }}
                disabled={deleteLoading}
              >
                {deleteLoading && <ButtonSpinner/>}
                Edit
              </button>
              <button
                className='btn btn-danger'
                onClick={() => onDeleteContact(oneContact.id)}
                disabled={deleteLoading}
              >
                {deleteLoading && <ButtonSpinner/>}
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;