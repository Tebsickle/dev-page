import '../styles/Home.css'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import RecentFetch from '../components/home/RecentFetch'

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
          <h1 className="recent-header">Recent</h1>
          <RecentFetch />

        </div>

        <div className="home-right">
          <div className="home-card home-profile-card">
            {/* Insert profile shtuff */}
            <h1 className="recent-header">Tebs</h1>
            <p style={{ textAlign: "center" }}>Not implemented yet!</p>
          </div>
          <div className="home-card home-uptime-card">
            {/* Insert uptime fetch of current projects. */}
            {/* Prioritize recently updated projects when choosing 
            which to show uptime for, if not enough space */}
            <h1 className="recent-header">Uptimes</h1>
            <p style={{ textAlign: "center" }}>Not implemented yet!</p>
          </div>
        </div>
        
      </div>
    </>
  )
}