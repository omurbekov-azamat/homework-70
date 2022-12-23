import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {SendContact} from "../types";

export const createContact = createAsyncThunk<void, SendContact>(
  'contacts/create',
  async (contact) => {
    await axiosApi.post('/contacts.json', contact);
  }
)