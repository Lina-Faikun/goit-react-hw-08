import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <p>Спочатку реєстрація, потім вводьте логін</p>
      <h2>Login</h2>
      <LoginForm />
    </>
  );
}