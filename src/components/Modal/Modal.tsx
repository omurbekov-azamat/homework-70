import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectOneContact, selectShowModal, closeModal} from "../../store/contactSlice";
import Backdrop from "../Backdrop/Backdrop";

const Modal = () => {
  const oneContact = useAppSelector(selectOneContact);
  const showModal = useAppSelector(selectShowModal);
  const dispatch = useAppDispatch();

  return (
    <>
      <Backdrop show={showModal}/>
      <div className='modal show' style={{display: showModal ? 'block' : 'none'}}>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-content'>
            <div className='modal-header d-flex'>
              <button className='ms-auto btn btn-primary' onClick={() => dispatch(closeModal())}>close</button>
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
              <button className='btn btn-info'>edit</button>
              <button className='btn btn-danger'>delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;