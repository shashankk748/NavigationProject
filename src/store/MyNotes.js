import {makeObservable, observable, action} from 'mobx';

class MyNotes {
  notes = [];
  constructor() {
    //initializes MyNotes class and sets up MobX to make certain properties observable and actions within the class.
    makeObservable(
      this, // for current instance of Notes
      {
        addMyNotes: action, //here,action,observable are state and this file is a collection of these states
        deleteMyNote: action, // so, this file  is a store
        notes: observable,
      },
      {
        autoBind: true, //ensures that methods inside the class are automatically bound to the class instance
      },
    );
  }
  addMyNotes(note) {
    this.notes = [...this.notes, {...note, id: Math.random()}];
  }
  deleteMyNote(id) {
    this.notes = this.notes.filter(item => item.id !== id);
  }
}
const mynotesStore = new MyNotes();
export default mynotesStore;
