import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/filtersSlice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="🔎 find a contact..."
      value={filter}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
