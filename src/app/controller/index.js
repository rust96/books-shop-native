class Controller {

  addListenerToFoundEl(fn, element) {
    element.addEventListener('click', (e) => {
     e.preventDefault();
     fn()
   });
  }

  addListenerToUnfoundEl(fn, element) {
    document.querySelector(element).addEventListener('click', (e) => {
     e.preventDefault();
     fn()
   });
  }
}

const controller = new Controller();

export default controller;
