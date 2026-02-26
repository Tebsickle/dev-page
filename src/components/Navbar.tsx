import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ highlight }: { highlight: string }) {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <button 
            className={highlight === "blog" ? "nav-button highlighted" : "nav-button"} 
            onClick={() => navigate("/blog")}
                >Blog</button>
            <button 
            className={highlight === "home" ? "nav-button highlighted" : "nav-button"} 
            onClick={() => navigate("/")}
                >Home</button>
            <button 
            className={highlight === "projects" ? "nav-button highlighted" : "nav-button"} 
            onClick={() => navigate("/projects")}
                >Projects</button>
        </nav>
    );
}