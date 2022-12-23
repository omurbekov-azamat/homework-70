import React from 'react';
import {Link} from "react-router-dom";

const ContactForm = () => {
  return (
    <div className='container' style={{width: '800px'}}>
      <form>
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
            />
          </div>
          <div className='d-flex align-items-center justify-content-around'>
            <button className='btn btn-info'>Save</button>
            <Link className='btn btn-success' to='/'>Back to contacts</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;