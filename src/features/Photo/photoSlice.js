const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    deletePhoto: (state, action) => {
      const newState = state.filter((photo) => photo.id !== action.payload);
      return newState;
    },
    editPhoto: (state, action) => {
      const newPhoto = action.payload;
      const findIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (findIndex >= 0) {
        state[findIndex] = newPhoto;
      }
    },
  },
});
const { reducer, actions } = photo;
export const { addPhoto, deletePhoto, editPhoto } = actions;
export default reducer;
