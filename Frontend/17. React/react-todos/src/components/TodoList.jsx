import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';

// const initialTodos = [
//     {id: 1, text: 'Walk the dog', completed:true},
//     {id: 2, text: 'Complete Coding', completed:false},
//     {id: 3, text: 'Do some exersices', completed:true},
//     {id: 4, text: 'Meditation or Book Reading', completed:false},
// ]


const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'))
  if(!data) return [];
  return data;
}
export default function TodoList(){
    const [todos, setTodos] = useState(getInitialData)

    // Add Local Storage
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // Remove ToDos
    const removeTodo = (id) => {
      setTodos(prevTodos => {
        return prevTodos.filter((t) => t.id !== id)
      })
    }

    // Toggle ToDOs
    const toggleTodo = (id) => {
      setTodos(prevTodos => {
        return prevTodos.map(todo => {
          if(todo.id === id){
            return { ...todo, completed: !todo.completed }
          } else {
            return todo;
          }
        })
      })  
    } 

    // Add ToDos
    const addTodo = (text) => {
      setTodos((prevTodos) => {
        return [...prevTodos, 
          {
            id: crypto.randomUUID(),
            text: text,
            completed: false,
          },
        ]
      });
    };


    return (
    <>
    <Box sx={{
      display: 'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      m: 9

    }}>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            ToDos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem 
          todo={todo} 
          key={todo.id}
          remove={removeTodo}  
          toggle={ () => toggleTodo(todo.id)}
        />
      ))}
    </List>
    <TodoForm addTodo={addTodo}/>
    </Box>
    </>
    )
}