<script setup lang="ts">
import { useTodos } from '~/composables/todos'
import gsap from 'gsap'

const inputValue = ref<string>('')
const isLoading = ref<boolean>(true)

const { todos, addTodo, onCheckTodo, onRemoveTodo, fetchTodos } =
  useTodos(inputValue)

onMounted(async () => {
  isLoading.value = true
  await fetchTodos()
  isLoading.value = false
})

definePageMeta({
  pageTransition: {
    mode: 'out-in',
    css: false,
    appear: true,
    onEnter(el, done) {
      gsap.fromTo(
        el,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, onComplete: done }
      )
      done()
    },
    onLeave(el, done) {
      gsap.fromTo(
        el,
        { opacity: 1 },
        { duration: 0.5, opacity: 0, onComplete: done }
      )
    },
  },
})
</script>

<template>
  <main ref="el">
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
      <div v-if="isLoading">Loading...</div>
      <ul
        v-else-if="todos.length && !isLoading"
        id="todo-list"
        class="todo-list list-group mt-3"
      >
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @checkTodo="onCheckTodo"
          @removeTodo="onRemoveTodo"
        />
      </ul>
      <p v-else class="mt-3">нет записей</p>
    </div>
  </main>
</template>
