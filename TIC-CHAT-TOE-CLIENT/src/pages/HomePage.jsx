import { EpicTitle } from "../components/EpicTitle";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <EpicTitle/>
      <Link to="/login">Login</Link>
    </div>
  );
}
