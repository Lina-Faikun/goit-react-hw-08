import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../Layout";

import css from "./AppBar.module.css";
export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}