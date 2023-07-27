import { EpicTitle } from "../components/EpicTitle";
import { Link } from "react-router-dom";
import sonrisa from '../assets/sonrisa.avif'

export function HomePage() {
  return (
    <div>
      <EpicTitle />
      <Link to="/login">Login</Link>
      <img src={sonrisa} alt="hola" style={{width: "30vw"}}/>
    </div>
  );
}
