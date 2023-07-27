import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginRequets } from "../api/auth";
import { useNavigate } from "react-router-dom";
import eyeFill from "../assets/eye-fill.svg";
import eyeSlash from "../assets/eye-slash-fill.svg";

export function LoginForm() {
  const [view, setView] = useState(true);
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loginErrors, setLoginErrors] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const viewPassword = (e) => {
    e.preventDefault();
    setView(!view);
  };

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await loginRequets(data);

      if (res.status === 200) {
        setUser(res.data);
        setIsAuth(true);
      }
    } catch (error) {
      setLoginErrors(error.response.data.message);
      //esto no lo voy a quitar
      console.log("Algo paso :O", error);
    }
    console.log(data);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [isAuth]);

  return (
    <div className="divForm">
      <h2 style={{ color: "white", fontSize: "40px", marginBottom: "40px" }}>
        LOGIN
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User Input */}

        <div className="inputField">
          <label htmlFor="userInput" className="bloque labels">
            Usuario
          </label>

          <input
            type="text"
            id="userInput"
            className="bloque"
            style={{ color: "white" }}
            {...register("user", {
              required: true,
              maxLength: 15,
              minLength: 3,
            })}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* Validacion errores de usuario */}

          {errors.user?.type === "required" && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              El usuario es requerido
            </span>
          )}

          {errors.user?.type === "maxLength" && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              El usuario supero el limite de caracteres
            </span>
          )}

          {errors.user?.type === "minLength" && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              El usuario tiene pocos caracteres
            </span>
          )}
        </div>

        {/* Password Input */}

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

        {/* Validacion errores de contraseña */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {errors.password?.type === "required" && (
            <span style={{ color: "red", fontWeight: "bold" }}>
              La constraseña es requerida
            </span>
          )}
        </div>

        {/* Button Submit */}
        <button type="submit" className="sing-btn">
          Login
        </button>
      </form>
      <hr />
      {/* Redireccion hacia create account */}

      <span style={{ color: "white" }}>No tienes una cuenta?</span>
      <Link to={"/createAccount"} style={{ color: "#8a36d2" }}>
        Crear una cuenta :D
      </Link>
    </div>
  );
}
