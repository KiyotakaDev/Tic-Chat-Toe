import { useState } from "react";
import eyeFill from "../assets/eye-fill.svg";
import eyeSlash from "../assets/eye-slash-fill.svg";

export function InputPassword({ register }) {
  const [view, setView] = useState(true);

  const viewPassword = (e) => {
    e.preventDefault();
    setView(!view);
  };

  return (
    <div className="inputField">
      <label htmlFor="passwordInput" className="bloque labels">
        Contraseña
      </label>

      <input
        type={view ? "password" : "text"}
        id="passwordInput"
        style={{ width: "250px", color: "white" }}
        {...register("password", {
            required: true,
          })}
      />

      {/* Button View Password */}

      <button
        className="eye"
        style={{
          backgroundImage: `url(${view ? eyeSlash : eyeFill})`,
        }}
        onClick={viewPassword}
      ></button>
    </div>
  );
}
