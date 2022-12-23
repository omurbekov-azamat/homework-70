import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {createContact} from "./contactsThunks";
import {ApiContactList} from "../types";

interface ContactsState {
  items: ApiContactList[],
  sendLoading: boolean;
}

const initialState: ContactsState = {
  items: [],
  sendLoading: false,
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
  },
});

export const contactsReducer = contactSlice.reducer;
export const selectSendLoading = (state: RootState) => state.contacts.sendLoading;