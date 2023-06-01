export default class Collection {
  constructor() {
    this.collection = [];
  }

  addItem(item) {
    this.collection.push(item);
  }
  removeList(item) {
    const index = this.collection.indexOf(item);

    if (index != -1) {
      //if collection is found remove it
      this.collection.splice(index, 1); //splice at index and remove 1 element
    }
  }
}
