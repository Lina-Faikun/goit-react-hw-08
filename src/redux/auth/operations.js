import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// реєстрація
export const register = createAsyncThunk(
  "auth/register",
  async (valueForm, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", valueForm);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// логін
export const logIn = createAsyncThunk(
  "auth/login",
  async (valueFormLogIn, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", valueFormLogIn);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// вийти
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// оновлення користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      if (reduxState.auth.token === null) {
        return false;
      }
      return reduxState.auth.token !== null;
    },
  }
);
