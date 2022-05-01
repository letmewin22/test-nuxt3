import {ITodo} from '~~/types/todo'

type TFunc = (inputValue?: {value: string}) => any

export const useTodos: TFunc = inputValue => {
  const todos = ref<ITodo[]>([])

  const fetchTodos = async () => {
    return new Promise(resolve => {
      $fetch('https://jsonplaceholder.typicode.com/todos').then(resolve)
    })
  }

  const addTodo = (): void => {
    if (!inputValue.value.trim()) {
      return
    }

    const newTodo: ITodo = {
      id: Date.now(),
      title: inputValue.value,
      completed: false,
    }
    todos.value = [newTodo, ...todos.value]

    inputValue.value = ''
  }

  const onCheckTodo = (id: number): void => {
    todos.value = todos.value.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
  }

  const onRemoveTodo = (id: number): void => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  return {todos, addTodo, onCheckTodo, onRemoveTodo, fetchTodos}
}
