import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User, FilterState } from "../types/types";

const initialState: FilterState = {
  users: [],
  searchQuery: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchQuery(
      state,
      action: PayloadAction<{
        column: keyof FilterState["searchQuery"];
        query: string;
      }>
    ) {
      state.searchQuery[action.payload.column] = action.payload.query;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.filter(
          (user) =>
            user.name
              .toLowerCase()
              .includes(state.searchQuery.name.toLowerCase()) &&
            user.username
              .toLowerCase()
              .includes(state.searchQuery.username.toLowerCase()) &&
            user.email
              .toLowerCase()
              .includes(state.searchQuery.email.toLowerCase()) &&
            user.phone
              .toLowerCase()
              .includes(state.searchQuery.phone.toLowerCase())
        );
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setSearchQuery } = userSlice.actions;
export default userSlice.reducer;
