var app = new Vue({
  el: "#app",
  data: {
    storageKey: "todolist",
    isEditing: false,
    todo: "",
    todos: [],
    selectedTodo: null,
  },

  methods: {
    storeTodo() {
      if (this.todo == "") return;

      this.todos.push({text: this.todo});
      this.todo = "";
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, { text: this.todo });
      this.todo = "";
      this.isEditing = false;
    },

    editTodo(index, todo) {
      this.isEditing = true;
      this.todo = todo.text;
      this.selectedIndex = index;
    },
  },
  created: function () {
    let dataStr = localStorage.getItem(this.storageKey);
    if (dataStr) {
      this.todos = JSON.parse(dataStr);
    }
  },
  watch: {
    todos: {
      handler: function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
});
