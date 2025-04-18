import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Min 2 characters').required("Name required"),
  email: Yup.string().email('Wrong Email').required('Email required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Password required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <div className={css.wrapper}>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <h2 className={css.title}>Registration</h2>

        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className={css.error}>{formik.errors.name}</p>
          )}
        </label>

        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={css.error}>{formik.errors.email}</p>
          )}
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className={css.error}>{formik.errors.password}</p>
          )}
        </label>

        <button type="submit" className={css.button}>
          Sign up
        </button>
      </form>
    </div>
  );
}
