import { ITodo } from '~~/types/todo'

type FuncReturn = {
  todos: { value: ITodo[] }
  addTodo: () => void
  onCheckTodo: (id: number) => void
  onRemoveTodo: (id: number) => void
  fetchTodos: () => Promise<ITodo[]>
}

type TFunc = (inputValue?: { value: string }) => FuncReturn

export const useTodos: TFunc = inputValue => {
  const todos = useState<ITodo[]>('todos', () => [])

  const fetchTodos = (): Promise<ITodo[]> => {
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
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
  }

  const onRemoveTodo = (id: number): void => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  return { todos, addTodo, onCheckTodo, onRemoveTodo, fetchTodos }
}
