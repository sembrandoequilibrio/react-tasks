import React from 'react'
import TaskList from "./components/TaskList";
import TaskForm from './components/TaskForm';

function App() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container flex justify-center'>
        <TaskForm />
        </div>
      <div className='container flex justify-center py-2'>
        <TaskList />
      </div>  
    </main>
  )
}

export default App
