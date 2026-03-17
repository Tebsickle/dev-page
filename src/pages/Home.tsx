import '../styles/Home.css'
import Navbar from '../components/Navbar'
import RecentFetch from '../components/home/RecentFetch'
import fallbackPfp from '../assets/home/pfp.png'
import GitHubIcon from '../assets/home/github.svg'
import LinkedInIcon from '../assets/home/linkedin.png'

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

        {/* Right Cards */}
        <div className="home-right">
          {/* Profile card */}
          <div className="home-card home-profile-card">
            <div className="profile-header">
              <img className="profile-pic" src={`https://github.com/Tebsickle.png`} alt="Profile Picture" onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackPfp }} />
              <div className="profile-nametags">
                <h1>Sam Smithers</h1>
                <h3>@Tebs/@Tebsickle</h3>
              </div>
            </div>
            <p className="profile-bio">
              I'm a computer science student and developer who loves creating.
              I build small apps, games, and devices, 
              always exploring new ideas and learning through projects.
            </p>
            <div className="contact-icons-div">
              <img className="contact-icons" src={GitHubIcon} alt="GitHub" onClick={() => window.open('https://github.com/Tebsickle', '_blank')} />
              <img className="contact-icons" src={LinkedInIcon} alt="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/samuel-smithers-833451346', '_blank')} />
            </div>
          </div>
          
          {/* Uptime card */}
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