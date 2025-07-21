import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './app/layout'
import Dashboard from './app/dashboard/page'
import Tasks from './app/tasks/page'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
