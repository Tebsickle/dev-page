import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WIP from './pages/InDevelopment'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Background from './components/Background'
import './styles/Background.css'

function App() {
  return (
    <>
      <div className="background-container">
        <Background />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/wip" element={<WIP />} />
      </Routes>
    </>
  )
}

export default App
