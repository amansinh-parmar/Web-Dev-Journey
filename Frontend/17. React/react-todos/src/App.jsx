import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './components/NavBar'
import TodoList from './components/TodoList'


function App() {

  return (
    <>
      <NavBar />
    <div className="container">
      <CssBaseline />
        {/* <h1>ToDos</h1> */}
      < TodoList/>
    </div>
    </>
  )
}

export default App
