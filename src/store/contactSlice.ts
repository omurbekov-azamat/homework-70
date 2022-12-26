import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {createContact, deleteContact, fetchContact, fetchContacts, updateContact} from "./contactsThunks";
import {ContactsFromApi} from "../types";

interface ContactsState {
  items: ContactsFromApi[],
  sendLoading: boolean;
  fetchLoading: boolean;
  showModal: boolean;
  getOneContact: ContactsFromApi;
  oneContact: null | ContactsFromApi;
  fetchOneLoading: boolean;
  deleteOneLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  sendLoading: false,
  fetchLoading: false,
  showModal: false,
  oneContact: null,
  fetchOneLoading: false,
  deleteOneLoading: false,
  getOneContact: {
    name: '',
    phone: 0,
    email: '',
    photo: '',
    id: '',
  }
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    showModal: (state, {payload: contact}: PayloadAction<ContactsFromApi>) => {
      state.showModal = true;
      state.getOneContact = contact;
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
      state.deleteOneLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, state => {
      state.showModal = false;
      state.deleteOneLoading = false;
    });
    builder.addCase(deleteContact.rejected, state => {
      state.showModal = true;
      state.deleteOneLoading = false;
    });
    builder.addCase(fetchContact.pending, (state) => {
      state.oneContact = null;
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, {payload: contact}) => {
      state.fetchOneLoading = false;
      state.oneContact = contact;
    });
    builder.addCase(fetchContact.rejected, (state) => {
      state.fetchOneLoading = false;
    });
    builder.addCase(updateContact.pending, (state) => {
      state.sendLoading = true;
    });
    builder.addCase(updateContact.fulfilled, (state) => {
      state.sendLoading = false;
    });
    builder.addCase(updateContact.rejected, (state) => {
      state.sendLoading = false;
    });
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectSendLoading = (state: RootState) => state.contacts.sendLoading;
export const selectContacts = (state: RootState) => state.contacts.items;
export const selectFetchLoading = (state: RootState) => state.contacts.fetchLoading;
export const {showModal, closeModal} = contactSlice.actions;
export const selectOneContact = (state: RootState) => state.contacts.oneContact;
export const selectShowModal = (state: RootState) => state.contacts.showModal;
export const selectOneContactFetchLoading = (state: RootState) => state.contacts.fetchOneLoading;
export const selectGetOneContact = (state: RootState) => state.contacts.getOneContact;
export const selectDeleteOneContactLoading = (state: RootState) => state.contacts.deleteOneLoading;