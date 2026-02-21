import { useNavigate } from 'react-router-dom'
import '../styles/InDevelopment.css'

export default function Base() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="content">
        <h1 className="heading">🚧 In Development</h1>
        <p className="message">
          This page is not finished. Check back soon!
        </p>

        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}
