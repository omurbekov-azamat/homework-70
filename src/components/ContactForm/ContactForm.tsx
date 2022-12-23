import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {selectSendLoading} from "../../store/contactSlice";
import ButtonSpinner from "../Spinner/ButtonSpiner";
import {SendContact} from "../../types";

interface Props {
  onSubmit: (contact: SendContact) => void;
}

const ContactForm: React.FC<Props> = ({onSubmit}) => {
  const loading = useAppSelector(selectSendLoading);
  const navigate = useNavigate();
  const imageUrl = 'https://thumbs.dreamstime.com/b/no-user-profile-picture-24185395.jpg';

  const [contact, setContact] = useState<SendContact>({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const userPhoto = contact.photo || imageUrl;

  const onContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setContact(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({
      name: '',
      phone: '',
      email: '',
      photo: '',
    });
  };

  return (
    <div className='container' style={{width: '800px'}}>
      <form onSubmit={onFormSubmit}>
        <div className='border border-light p-5'>
          <h4 className='mb-3 text-center'>Add new contact</h4>
          <div className='mb-4'>
            <label htmlFor="name" className='mb-2'>Name</label>
            <input
              placeholder='name...'
              id='name'
              name='name'
              type="text"
              className='form-control'
              required
              value={contact.name}
              onChange={onContactChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="phone" className='mb-2'>Phone</label>
            <input
              placeholder='phone...'
              id='phone'
              name='phone'
              type='text'
              className='form-control'
              required
              value={contact.phone}
              onChange={onContactChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='mb-2'>Email</label>
            <input
              placeholder='email...'
              id='email'
              name='email'
              type="email"
              className='form-control'
              value={contact.email}
              onChange={onContactChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="photo" className='mb-2'>Photo</label>
            <input
              placeholder='photo...'
              id='photo'
              name='photo'
              type="text"
              className='form-control'
              value={contact.photo}
              onChange={onContactChange}
            />
          </div>
          <p>Photo preview</p>
          <img src={userPhoto} alt="" style={{width: '150px', height: '150px'}}/>
          <div className='d-flex align-items-center justify-content-around mt-4'>
            <button
              type='submit'
              className='btn btn-info'
              disabled={loading}
            >
              {loading && <ButtonSpinner/>}
              Save
            </button>
            <button
              className='btn btn-success'
              disabled={loading}
              onClick={() => navigate('/')}
            >
              Back to contacts
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;