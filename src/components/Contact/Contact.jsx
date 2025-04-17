import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <span className={css.name}>
        {name}: <span className={css.number}>{number}</span>
      </span>
      <button
        className={css.button}
        onClick={handleDelete}
        aria-label={`Delete contact ${name}`}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
