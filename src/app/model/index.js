import store from '../store'
import view from '../view'
import { getRandomNum } from '../utils'

import * as actions from '../actions'

const { addBook, deleteBook, saveBook, getLocalBooks } = actions;

class Model {

  submitForm() {
    const inputs = document.querySelectorAll('.form input');
    const formData = {};
    [].forEach.call(inputs, (i) => {
        formData[i.name] = i.value;
        formData.id = `${getRandomNum(1, 988)}${i.name}${i.value}`
    })

    const { author, bookName } = formData;

    if (author === "" || bookName === "")  {
      alert('Поля "Автор" и "Название книги" обязательны для заполнения')
      return
    }

    store.dispatch(addBook(formData))
  };

  deleteBook(bookId) {
    store.dispatch(deleteBook(bookId))
  }

  editBook(bookId, button) {
    const books = store.getState().books;
    const findBook = books.find((b) => b.id === bookId);

    view.moveValuesToInputs(findBook)
  }

  saveEditBook(book, bookId) {
    const inputs = document.querySelectorAll('.form input');
    const formData = {};
    [].forEach.call(inputs, (i) => {
        formData[i.name] = i.value;
    })
    store.dispatch(saveBook(book, bookId, formData))
    view.render();
  }

  getRemoteData() {
    const localData = JSON.parse(localStorage.getItem("store"));

    if (!localData) return;

    store.dispatch(getLocalBooks(localData.books))
  }

  componentDidMount() {
    this.getRemoteData()
    view.render()
  }
}

const model = new Model();

export default model;
