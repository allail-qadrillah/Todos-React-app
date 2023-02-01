import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Heading } from '@chakra-ui/react';
import { VStack, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from 'react';

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'get water ',
    }, 
    {
      id: 2,
      body: 'get bread',
    },
  ]
  const [todos, setTodos] = useState(initialTodos)

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }


  return (
    <VStack p={4}>
      <IconButton icon={<FaSun />} isRound='True' size='lg' alignSelf='flex-end'/>
      <Heading mb="10" fontWeight="extrabold" size="2xl" 
        bgGradient="linear(to-r, purple.600, red.400, pink.500)"
        bgClip="text"> Todo Aplication
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <AddTodo/>
    </VStack>
  );
}

export default App;
