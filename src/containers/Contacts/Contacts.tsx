import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectContacts, selectFetchLoading} from "../../store/contactSlice";
import {fetchContacts} from "../../store/contactsThunks";
import {useLocation} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ContactItem from "../../components/ContactItem/ContactItem";

const Contacts = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const contacts = useAppSelector(selectContacts);
  const fetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(fetchContacts());
    }
  }, [dispatch, location])

  return (
    <div className='container' style={{width: '800px'}}>
      {fetchLoading ? <Spinner/> : contacts.map((item) => (
        <ContactItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Contacts;