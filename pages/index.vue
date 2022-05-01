<script setup lang="ts">
import { useTodos } from '~/composables/todos'

const inputValue = ref<string>('')
const { todos, addTodo, onCheckTodo, onRemoveTodo, fetchTodos } =
  useTodos(inputValue)

onMounted(async () => {
  const fetchedTodos = await fetchTodos()

  todos.value = fetchedTodos
})

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  document.body.style.opacity = '0'
})
nuxtApp.hook('page:finish', () => {
  document.body.style.opacity = '0'
})
</script>

<template>
  <main>
    <div class="container-sm todo-app">
      <h1 class="h1">Todo List</h1>
      <div class="input-wrapper mt-4">
        <input
          id="todo-input"
          v-model="inputValue"
          type="email"
          class="form-control"
          placeholder="Describe your task..."
          aria-describedby="todo"
          @keypress.enter="addTodo"
        />
        <button
          id="add"
          type="button"
          class="btn btn-primary"
          @click="addTodo()"
        >
          +
        </button>
      </div>

      <ul v-if="todos.length" id="todo-list" class="todo-list list-group mt-3">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @checkTodo="onCheckTodo()"
          @removeTodo="onRemoveTodo()"
        />
      </ul>
      <p v-else class="mt-3">нет записей</p>
    </div>
  </main>
</template>
