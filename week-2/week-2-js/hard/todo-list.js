class Todo {
  constructor() {
    this.list = []; // Initialize the todos list as an empty array
  }

  // Adds a todo to the list
  add(todo) {
    this.list.push(todo);
  }

  // Removes a todo by index
  remove(index) {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1); // Use splice to remove the item at the given index
    } else {
      console.error("Invalid index. Unable to remove item.");
    }
  }

  // Updates a todo at the given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.list.length) {
      this.list[index] = updatedTodo;
    } else {
      console.error("Invalid index. Unable to update item.");
    }
  }

  // Returns all todos
  getAll() {
    return this.list;
  }

  // Returns a todo at the given index
  get(index) {
    if (index >= 0 && index < this.list.length) {
      return this.list[index];
    } else {
      console.error("Invalid index. Unable to retrieve item.");
      return null;
    }
  }

  // Clears all todos
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
