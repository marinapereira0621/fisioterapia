
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Pacientes from './pages/Pacientes'
import Fisioterapeutas from './pages/Fisioterapeutas'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/pacientes"
          element={
            <Layout>
              <Pacientes />
            </Layout>
          }
        />

        <Route
          path="/fisioterapeutas"
          element={
            <Layout>
              <Fisioterapeutas />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
