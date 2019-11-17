import { sliceArr } from '../utils'

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'add_book':
      return {
        ...state,
        books: [
          ...state.books,
          payload
        ]
      }

    case 'delete_book':
      const deleteIdx = state.books
        .findIndex((b) => b.id === payload)

      return {
        ...state,
        books: sliceArr(state.books, deleteIdx)
      }

    case 'save_book':
      const findIndex = state.books.findIndex((b) => b.id === action.bookId);
      const newBooks = [...state.books];
      for (let key in state.books[findIndex]) {
        if (key !== 'id') {
          state.books[findIndex][key] = action.formData[key];
        }
      }

      return { ...state, books: newBooks }

    case 'get_local_books':
      return { ...state, books: payload }
      
    default: return state;
  }
}
