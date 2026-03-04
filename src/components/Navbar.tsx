import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

interface params {
    highlight: string;
    disabled: string;
}

export default function Navbar(params: params) {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <button 
            className={params.highlight === "blog" ? "nav-button highlighted" : "nav-button"} 
            disabled={params.disabled === "blog"}
            onClick={() => navigate("/blog")}
                >Blog</button>
            <button 
            className={params.highlight === "home" ? "nav-button highlighted" : "nav-button"} 
            disabled={params.disabled === "home"}
            onClick={() => navigate("/")}
                >Home</button>
            <button 
            className={params.highlight === "projects" ? "nav-button highlighted" : "nav-button"} 
            disabled={params.disabled === "projects"}
            onClick={() => navigate("/projects")}
                >Projects</button>
        </nav>
    );
}