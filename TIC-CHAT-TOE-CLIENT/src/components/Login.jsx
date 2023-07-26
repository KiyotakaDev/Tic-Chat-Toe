import { useState } from "react";
import { Link } from "react-router-dom";
import eyeFill from "../assets/eye-fill.svg";
import eyeSlash from "../assets/eye-slash-fill.svg";

export function Login() {
  const [view, setView] = useState(true);

  const viewPassword = (e) => {
    e.preventDefault();
    setView(!view);
  };

  return (
    <div className="divForm">
      <h2 style={{color: "white"}}>LOGIN</h2>
      <form>
        <div className="inputField">
          <label htmlFor="userInput" className="bloque labels">
            Usuario o Direccion de correo
          </label>
          <input type="text" id="userInput" className="bloque" style={{color: "white"}}/>
        </div>
        <div className="inputField">
          <label htmlFor="passwordInput" className="bloque labels">
            Contraseña
          </label>
          <input
            type={view ? "password" : "text"}
            id="passwordInput"
            style={{ width: "250px", color: "white" }}
          />
          <button
            className="eye"
            style={{
              backgroundImage: `url(${view ? eyeSlash : eyeFill})`,
            }}
            onClick={viewPassword}
          ></button>
        </div>
        <button type="submit" className="sing-btn">
          Login
        </button>
      </form>
      <hr />
      <span style={{color: "white"}}>No tienes una cuenta?</span>
      <Link to={"/createAccount"} style={{color: "#8a36d2"}}>Crear una cuenta :D</Link>
    </div>
  );
}

export default Login;
