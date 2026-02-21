import { Routes, Route } from 'react-router-dom'
import InDevelopment from './pages/InDevelopment'

function App() {
  return (
    <Routes>
      <Route path="/" element={<InDevelopment />} />
    </Routes>
  )
}

export default App
