import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact Book</h1>

      <ContactForm />
      <SearchBox />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ContactList />
    </div>
  );
};

export default App;
