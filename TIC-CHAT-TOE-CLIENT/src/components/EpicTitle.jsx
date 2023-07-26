import { Link } from "react-router-dom";

export function EpicTitle() {
  return (
    <h1 className="epicTitleContainer">
      <Link to="/" className="epicTitle">
        👻 WASSA
      </Link>
    </h1>
  );
}
