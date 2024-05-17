<template>
  <div>
    <h1>ExamTwo</h1>
    <table>
      <tr><td>ID</td><td>이름</td><td>나이</td><td></td></tr>
      <tr v-for="(todo, index) in todos" v-bind:key="todo.id">
        <td>{{ todo.id }}</td>
        <td>
          {{ todo.name }}
        </td>
        <td>{{ todo.old }}</td>
        <td><button type="button" @click="deleteTodo(index)">삭제</button></td>
      </tr>
    </table>
    <input type="text" v-model="name" />
    <button type="button" v-on:click="addTodo">추가</button>
  </div>
</template>

<script>

export default {
  name: "twoView",
  data() {
    return {
      todos: [
        { id: 101, name: "김창현", old: 24 },
        { id: 102, name: "김밀초", old: 22},
        { id: 103, name: "고강아지", old: 1 }
      ],
      name: "",
      old: "",
      lastId: 103
    }
  },
  methods: {
    addTodo: function() {
      this.todos.push({id: ++this.lastId, name: this.name});
      this.name = "";
    },
    deleteTodo(index) {
      if (confirm("삭제하시겠습니까?"))
        this.todos.splice(index, 1);
    }
  }
}
</script>

<style scoped>
h1 { border-bottom: 1px solid gray; }
div { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
table { border-collapse: collapse; margin: 20px 0; width: 100%; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
input[type=text] { padding: 5px; margin-right: 5px; width: 300px; }
button { padding: 0.4em 1em; margin-right: 5px; }
span { font-weight: bold; margin-left: 10px; cursor: pointer; float: right; }
</style>
