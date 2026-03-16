import '../styles/Home.css'
import Navbar from '../components/Navbar'
import RecentFetch from '../components/home/RecentFetch'

export default function Home() {
  document.body.style.overflowY = "hidden";
  return (
    <>
      <Navbar highlight="home" disabled="home" />
      <div className="home-content">
        
        <div className="home-card home-recent">
          <h1 className="recent-header">Recent</h1>
          <RecentFetch />

        </div>

        <div className="home-right">
          <div className="home-card home-profile-card">
            {/* Insert profile shtuff */}
            <div className="profile-header">
              <img className="profile-pic" src="/src/assets/pfp.png" alt="Profile Picture" />
              <div className="profile-nametags">
                <h1>Sam Smithers</h1>
                <h3>@Tebs</h3>
              </div>
            </div>
            <p className="profile-bio">
              I'm a computer science student and developer who loves creating.
              I build small apps, games, and devices, 
              always exploring new ideas and learning through projects.</p>
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