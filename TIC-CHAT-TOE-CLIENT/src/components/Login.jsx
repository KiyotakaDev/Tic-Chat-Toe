import { useState } from "react";
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
      <form>
        <div className="inputField">
          <label htmlFor="userInput" className="bloque">
            Usuario o Direccion de correo
          </label>
          <input type="text" id="userInput" className="bloque" />
        </div>
        <div className="inputField">
          <label htmlFor="passwordInput" className="bloque">
            Contraseña
          </label>
          <input
            type={view ? "password" : "text"}
            id="passwordInput"
            style={{ width: "250px" }}
          />
          <button
            className="eye"
            style={{
              backgroundImage: `url(${view ? eyeSlash : eyeFill})`
            }}
            onClick={viewPassword}
          ></button>
        </div>
        <button className="sing-btn">SingIn</button>
      </form>
    </div>
  );
}

export default Login;
