import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ApiContactList, SendContact} from "../types";
import {ContactsFromApi} from "../types";
import {AppDispatch} from "../app/store";

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
);

export const deleteContact = createAsyncThunk<void, string, {dispatch: AppDispatch}> (
  'contacts/deleteContact',
  async (id, thunkAPI)=> {
    await axiosApi.delete('/contacts/' + id + '.json');
    thunkAPI.dispatch(fetchContacts());
  }
);

interface UpdateContactParams {
  id: string;
  contact: SendContact;
}

export const updateContact = createAsyncThunk<void, UpdateContactParams>(
  'contacts/update',
  async (params) => {
    await axiosApi.put('/contacts/' + params.id + '.json', params.contact);
  }
)