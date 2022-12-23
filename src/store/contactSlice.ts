import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {createContact, fetchContacts} from "./contactsThunks";
import {ContactsFromApi} from "../types";

interface ContactsState {
  items: ContactsFromApi[],
  sendLoading: boolean;
  fetchLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  sendLoading: false,
  fetchLoading: false,
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createContact.pending, (state) => {
      state.sendLoading = true;
    });
    builder.addCase(createContact.fulfilled, (state) => {
      state.sendLoading = false;
    });
    builder.addCase(createContact.rejected, (state) => {
      state.sendLoading = false;
    });
    builder.addCase(fetchContacts.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, {payload: contacts}) => {
      state.fetchLoading = false;
      state.items = contacts;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.fetchLoading = false;
    })
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectSendLoading = (state: RootState) => state.contacts.sendLoading;
export const selectContacts = (state: RootState) => state.contacts.items;
export const selectFetchLoading = (state: RootState) => state.contacts.fetchLoading;