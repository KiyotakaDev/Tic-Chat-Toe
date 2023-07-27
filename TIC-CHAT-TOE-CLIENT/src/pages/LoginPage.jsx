import { LoginForm } from "../components/LoginForm";
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
        <LoginForm />
      </div>
    </div>
  );
}
