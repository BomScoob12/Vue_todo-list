<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TodoManagement from './utils/TodoManagement';
import Todo from './interfaces/Todo';
import FormTodo from './components/FormTodo.vue';

const todoManagement = new TodoManagement();

const todos = ref(new Array<Todo>());

todos.value = todoManagement.getTodos();

const getLocalDateTime = () => {
  const date = new Date();
  return date.toLocaleString();
};

const updateTodos = () => {
  todos.value = todoManagement.getTodos();
};

(() => {
  console.log('Effect triggered');
});
</script>

<template>
  <div>
    <p>Local date and time: {{ getLocalDateTime() }}</p>
    <FormTodo :todoManager="todoManagement" />
    <div @addTodoEvent="updateTodos">
      {{ todos }}
    </div>
  </div>
</template>
