import view from '../view'

import { reducer } from '../reducers'

class Store {
  constructor() {
    this.state = {
      books: []
    }
  }

  getState () {
    return this.state;
  }

  dispatch(action) {
    this.state = reducer(this.state, action);
    localStorage.setItem("store", JSON.stringify(this.state));
    view.render()
  }
}

const store = new Store();

export default store;
