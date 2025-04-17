import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact'; 
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/selectors'; 
import styles from './ContactList.module.css'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts); 
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.contactList}>
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        contacts.map((contact) => <Contact key={contact.id} contact={contact} />)
      )}
    </div>
  );
};

export default ContactList;
