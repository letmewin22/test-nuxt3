import { defineStore } from 'pinia'
import { ITodo } from '~~/types/todo'

interface ITodosState {
  todos: ITodo[]
}

const state = (): ITodosState => ({
  todos: [],
})

const actions = {
  async fetchTodos() {
    const URL = 'https://jsonplaceholder.typicode.com/todos'
    const todos: ITodo[] = await $fetch(URL)
    this.todos = [...todos, ...this.todos]
  },
  addTodo(title: string) {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.todos = [newTodo, ...this.todos]
  },
  updateTodo(id: number) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
  },
  removeTodo(id: number) {
    const todos: ITodo[] = this.todos
    this.todos = todos.filter(todo => todo.id !== id)
  },
}

const getters = {
  todoById: (state: ITodosState) => (id: number) =>
    state.todos.find(todo => todo.id === id),
}

export const useTodosStore = defineStore({
  id: 'todos-store',
  state,
  actions,
  getters,
})
