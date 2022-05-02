import { useTodosStore } from '~/store/todos'
import { ITodo } from '~/types/todo'

type FuncReturn = {
  todos: { value: ITodo[] }
  addTodo: () => void
  onCheckTodo: (id: number) => void
  onRemoveTodo: (id: number) => void
  fetchTodos: () => Promise<ITodo[]>
}

type TFunc = (inputValue?: { value: string }) => FuncReturn

export const useTodos: TFunc = inputValue => {
  const todosState = useTodosStore()

  const fetchTodos = (): Promise<ITodo[]> => {
    return new Promise(resolve => {
      todosState.fetchTodos().then(() => {
        resolve(todosState.todos)
      })
    })
  }

  const addTodo = (): void => {
    if (!inputValue.value.trim()) {
      return
    }

    todosState.addTodo(inputValue.value.trim())

    inputValue.value = ''
  }

  const onCheckTodo = (id: number): void => {
    todosState.updateTodo(id)
  }

  const onRemoveTodo = (id: number): void => {
    todosState.removeTodo(id)
  }

  const todos = computed(() => {
    return todosState.todos
  })

  return { todos, addTodo, onCheckTodo, onRemoveTodo, fetchTodos }
}
