import { createSlice } from "@reduxjs/toolkit";

const initialBooksState = {
  books: [
    { id: 1, title: "Learn Javascript", author: "Douglas Crockford" },
    { id: 2, title: "Learn Rect", author: "Mark Myers" },
    { id: 3, title: "Learn Node", author: "Jon Duckett" },
    { id: 4, title: "Learn MongoDB", author: "velin Demirov" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
