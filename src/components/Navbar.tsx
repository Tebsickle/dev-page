import '../styles/Navbar.css';

export default function Navbar({ highlight }: { highlight: string }) {
    return (
        <nav className="navbar">
            <button className={highlight === "blog" ? "nav-button highlighted" : "nav-button"}>Blog</button>
            <button className={highlight === "home" ? "nav-button highlighted" : "nav-button"}>Home</button>
            <button className={highlight === "projects" ? "nav-button highlighted" : "nav-button"}>Projects</button>
        </nav>
    );
}