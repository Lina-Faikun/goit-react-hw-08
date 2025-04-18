import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <>
      <RegistrationForm />
      <p>Спочатку реєстрація, потім вводьте логін</p>
      <p>Ім’я — вводьте англійською мовою.</p>
      <p>Пароль має складатися лише з цифр (не менше 8).</p>
    </>
  );
}