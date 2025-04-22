import css from "./Contact.module.css";
import { BiSolidUser, BiPhone } from "react-icons/bi"; 
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ user: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.card} id={id}>
      <div>
        <div className={css.boxName}>
          <BiSolidUser className={css.iconUser} />
          <p className={css.title}>{name}</p>
        </div>
        <div className={css.boxName}>
          <BiPhone className={css.iconUser} />
          <p>{number}</p>
        </div>
      </div>

      <button className={css.button} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}