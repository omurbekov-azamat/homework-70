import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {createContact, deleteContact, fetchContacts, updateContact} from "./contactsThunks";
import {ContactsFromApi} from "../types";

interface ContactsState {
  items: ContactsFromApi[],
  sendLoading: boolean;
  fetchLoading: boolean;
  item: ContactsFromApi;
  showModal: boolean;
}

const initialState: ContactsState = {
  items: [],
  sendLoading: false,
  fetchLoading: false,
  item: {
    name: '',
    phone: '',
    email: '',
    photo: '',
    id: '',
  },
  showModal: false,
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    showModal: (state, {payload: contact}: PayloadAction<ContactsFromApi>) => {
      state.item = contact;
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
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
    });
    builder.addCase(deleteContact.pending, state => {
      state.showModal = true;
    });
    builder.addCase(deleteContact.fulfilled, state => {
      state.showModal = false;
    });
    builder.addCase(deleteContact.rejected, state => {
      state.showModal = true;
    });
    builder.addCase(updateContact.pending, (state) => {
      state.sendLoading = true;
    });
    builder.addCase(updateContact.fulfilled, (state) => {
      state.sendLoading = false;
    });
    builder.addCase(updateContact.rejected, (state) => {
      state.sendLoading = false;
    })
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectSendLoading = (state: RootState) => state.contacts.sendLoading;
export const selectContacts = (state: RootState) => state.contacts.items;
export const selectFetchLoading = (state: RootState) => state.contacts.fetchLoading;
export const {showModal, closeModal} = contactSlice.actions;
export const selectOneContact = (state: RootState) => state.contacts.item;
export const selectShowModal = (state: RootState) => state.contacts.showModal;