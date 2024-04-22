<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import Todo from '../interfaces/Todo';
import Status from '../interfaces/Status';
import TodoManagement from '../utils/TodoManagement';

const props = defineProps<{
  todoManager: TodoManagement;
}>();

const newTodo = ref<Todo>({
  title: '',
  content: '',
  status: Status.TODO,
  createdAt: new Date(),
});

const addTodo = () => {
  props.todoManager.add(newTodo.value);
  console.log('Todo added');
};

defineEmits(['addTodoEvent']);
</script>

<template>
  <div>
    <form action="">
        <label for="todo-title">Title</label>
      <input type="text" id="todo-title" v-model="newTodo.title" />
        <label for="todo-content">Content</label>
      <input type="text" id="todo-content" v-model="newTodo.content" />
        <label for="todo-status">Status</label>
      <select name="todo-status" id="todo-status" v-model="newTodo.status">
        <option :value="Status.TODO">Todo</option>
        <option :value="Status.DOING">Doing</option>
        <option :value="Status.DONE">Done</option>
      </select>
      <button type="button" @click.prevent="$emit('addTodoEvent', addTodo)">Add</button>
    </form>
  </div>
</template>

<style scoped></style>
