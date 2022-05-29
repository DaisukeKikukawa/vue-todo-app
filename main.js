var app = new Vue({
  el: "#app",
  data: {
    storageKey: "todolist",
    isEditing: false,
    todo: "",
    todos: [],
    selectedTodo: null,
  },
  mounted () {
    let dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todos = JSON.parse(dataStr);
    }
  },

  methods: {
    storeTodo() {
      if (this.todo == "") return;

      this.todos.push({ text: this.todo });
      this.todo = "";
      localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, { text: this.todo });
      this.todo = "";
      this.isEditing = false;
      localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
    },

    editTodo(index, todo) {
      this.isEditing = true;
      this.todo = todo.text;
      this.selectedIndex = index;
    },
  }
});
