export const addBook = book => {
  return {
    type: 'add_book',
    payload: book
  }
}

export const deleteBook = bookId => {
  return {
    type: 'delete_book',
    payload: bookId
  }
}

export const saveBook = (book, bookId, formData) => {
  return {
    type: 'save_book',
    payload: book,
    bookId,
    formData
  }
}

export const getLocalBooks = books => {
  return {
    type: 'get_local_books',
    payload: books
  }
}
