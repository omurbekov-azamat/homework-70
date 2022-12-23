import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ApiContactList, SendContact} from "../types";
import {ContactsFromApi} from "../types";

export const createContact = createAsyncThunk<void, SendContact>(
  'contacts/create',
  async (contact) => {
    await axiosApi.post('/contacts.json', contact);
  }
);

export const fetchContacts = createAsyncThunk<ContactsFromApi[], undefined>(
  'contacts/fetchAll',
  async () => {
    const contactsResponse = await axiosApi.get<ApiContactList | null>('/contacts.json');
    const contacts = contactsResponse.data;

    let newContacts: ContactsFromApi[] = [];

    if (contacts) {
      newContacts = Object.keys(contacts).map(id => {
        const contact = contacts[id];
        return {
          ...contact,
          id,
        }
      });
    }

    return newContacts;
  }
)