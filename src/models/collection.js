export default class Collection {
  constructor() {
    this._name;
    this.collection = [];
  }

  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
  addItem(item) {
    this.collection.push(item);
  }
  removeItem(item) {
    const index = this.collection.indexOf(item);

    if (index != -1) {
      //if collection is found remove it
      this.collection.splice(index, 1); //splice at index and remove 1 element
    }
  }
}
