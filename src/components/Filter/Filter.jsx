import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./Filter.module.css"; 

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filter;
