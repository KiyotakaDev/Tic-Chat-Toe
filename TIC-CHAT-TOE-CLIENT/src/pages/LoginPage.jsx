import { EpicTitle } from "../components/EpicTitle";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputPassword } from "../components/InputPassword";

export function LoginPage() {
  const { user, isAuth, onLogin, loginErrors } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
      onLogin(data);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div>
      <EpicTitle />

      <div className="center">
        <div className="divForm">
          <h2
            style={{ color: "white", fontSize: "40px", marginBottom: "40px" }}
          >
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
                {...register("username", {
                  required: true,
                  maxLength: 15,
                  minLength: 3,
                })}
              />
            </div>

            <div className="errors">
              {/* Validacion errores de usuario */}

              {errors.user?.type === "required" && (
                <span className="errorNotification">
                  El usuario es requerido
                </span>
              )}

              {errors.user?.type === "maxLength" && (
                <span className="errorNotification">
                  El usuario supero el limite de caracteres
                </span>
              )}

              {errors.user?.type === "minLength" && (
                <span className="errorNotification">
                  El usuario tiene pocos caracteres
                </span>
              )}
            </div>

            {/* Password Input */}

            <InputPassword register={register} />

            {/* Validacion errores de contraseña */}

            <div className="errors">
              {errors.password?.type === "required" && (
                <span className="errorNotification">
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
      </div>
    </div>
  );
}
