import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.homeWrapper}>
      <h1>Welcome to PhoneBook 💚</h1>
      <p>This is your personal contact management app.</p>
      <p>Log in or register to start managing your contacts easily and securely!</p>
    </div>
  );
}