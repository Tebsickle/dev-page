import '../styles/Home.css'
import Background from '../components/Background'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <div className="background-container">
        <Background />
      </div>
      <Navbar highlight="home" />
      <div className="container">

      </div>
    </>
  )
}