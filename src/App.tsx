import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './app/layout'
import Dashboard from './app/dashboard/page'
import Tasks from './app/tasks/page'
import Projects from './app/projects/page'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
