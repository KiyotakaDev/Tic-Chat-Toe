import { Login } from "../components/Login";
import { EpicTitle } from "../components/EpicTitle";

export function LoginPage() {
  return (
    <div>
      <EpicTitle />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </div>
    </div>
  );
}
