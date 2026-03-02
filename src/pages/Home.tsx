import '../styles/Home.css'
import Background from '../components/Background'
import Navbar from '../components/Navbar'

export default function Home() {
  document.body.style.overflowY = "hidden";
  return (
    <>
      <Navbar highlight="home" disabled="home" />
      <div className="background-container">
        <Background />
      </div>
      <div className="home-content">
        
        <div className="home-card home-recent">
          {/* Insert recent content additions info fetch */}
          <h1>Recent</h1>
        </div>

        <div className="home-right">
          <div className="home-card home-profile-card">
            {/* Insert profile shtuff */}
            <h1>Profile Card</h1>
          </div>
          <div className="home-card home-uptime-card">
            {/* Insert uptime fetch of current projects. */}
            {/* Prioritize recently updated projects when choosing 
            which to show uptime for, if not enough space */}
            <h1>Uptime Card</h1>
          </div>
        </div>
        
      </div>
    </>
  )
}