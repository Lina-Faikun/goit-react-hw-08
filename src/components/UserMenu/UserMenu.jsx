import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; // логічно, що тут logOut
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userText}>Вітаю, {name}!</p>
      <button onClick={() => dispatch(logOut())} className={css.logoutButton}>
        Вийти
      </button>
    </div>
  );
};

export default UserMenu;
