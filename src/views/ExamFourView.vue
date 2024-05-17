<template>
    <div>
      <h1>ExamFour</h1>
      <table>
        <tr><td>Index</td><td>value</td></tr>
        <tr v-for="todo in todos" v-bind:key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
        </tr>
      </table>
<table>
    <div class="box" v-bind:class="color">
        <p>ExamFourChild</p>
        <input type="text" v-model="name" />
      <button type="button" v-on:click="addTodo">전달</button>
  </div>
</table>
    </div>
  
  </template>
  
  <script>
  
  export default {
    name: "fourView",
    data() {
      return {
        todos: [
      ],
        name: "",
        lastId: -1
      }
    },
    methods: {
      addTodo: function() {
        this.todos.push({id: ++this.lastId, name: this.name});
        this.name = "";
      }
    }
  }
  </script>
  
  <style scoped>
  h1 { border-bottom: 1px solid gray; }
  div { padding: 30px; margin: 30px auto; width: 500px; height: auto;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  table { border-collapse: collapse; margin: 20px 0; width: 100%; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; }
  td:nth-child(1) { text-align: center; }
  input[type=text] { padding: 5px; margin-right: 5px; width: 200px; }
  button { padding: 0.3em 1.5em; }
  div.box { display: inline-block; padding: 20px; width: 350px; 
        border: 1px solid gray; box-shadow: 5px 5px 5px #aaa;  background-color: #ffa; }
  </style>
  