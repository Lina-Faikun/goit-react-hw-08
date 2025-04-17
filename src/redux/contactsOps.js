import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://67fe520b58f18d7209edb4a7.mockapi.io/contacts';



export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts', 
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id; 
  }
);
