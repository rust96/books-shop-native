import store from '../store'
import controller from '../controller'
import model from '../model'

class View {

  mapElements() {
    const books = store.getState().books;
    const results = books.map((book) => {
      return this.createBookElement('div', book, ['books__item'])
    })

    return results;
  }

  createBookElement(type, book, className) {
    const el = this.createElement(type, className)

    const deleteButton = this.createButton(['button', 'button_delete'], 'Удалить');
    const editButton = this.createButton(['button', 'button_edit'], 'Редактировать');

    el.innerHTML = `<p>Автор: ${book.author}</p> <p>Название книги: ${book.bookName}</p>`;
    el.appendChild(editButton)
    el.appendChild(deleteButton)

    controller.addListenerToFoundEl(() => model.deleteBook(book.id), deleteButton)
    controller.addListenerToFoundEl(() => this.onEditClick(book.id, editButton, book), editButton)

    return el;
  }

  createElement(type, className) {
    const el = document.createElement(type);
    el.classList.add(...className);

    return el;
  }

  createButton(className, text) {
    const button = this.createElement('button', className);
    button.textContent = text;

    return button;
  }

  clearView() {
    document.querySelector('.books__list').innerHTML = ''
  }

  clearInputs() {
    [].forEach.call(document.querySelectorAll('.form input'), (inp) => inp.value = "")
  }

  onEditClick(bookId, button, book) {
    if (button.innerHTML === 'Редактировать') {
      [].forEach.call(
        document.querySelectorAll('.button_edit'),
        (btn) => btn.innerHTML = 'Редактировать'
      )
      button.innerHTML = 'Сохранить'
      button.classList.add('button_save')
      model.editBook(bookId, button, book)
    } else {
      button.innerHTML = 'Редактировать'
      button.classList.remove('button_save')
      model.saveEditBook(book, bookId)
      this.clearInputs()
    }
  }

  moveValuesToInputs(book) {
    const inputs = document.querySelectorAll('.form input');
    inputs.forEach((inp) => {
      const inputName = inp.getAttribute("name");
      return book[inputName] ? inp.value = book[inputName] : inp.value = ""
    })
  }

  render() {
    this.clearInputs()
    this.clearView()
    const results = this.mapElements()
    
    return results
      .forEach((item) => document.querySelector('.books__list').appendChild(item))
  }
}

const view = new View();

export default view;
