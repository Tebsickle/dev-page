import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WIP from './pages/InDevelopment'
import Blog from './pages/Blog'
import Projects from './pages/Projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/wip" element={<WIP />} />
    </Routes>
  )
}

export default App
