import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations'; 

const validationSchema = Yup.object({
  email: Yup.string().email('Wrong email').required('Email required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Password required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  return (
    <div className={css.wrapper}>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <h2 className={css.title}>Log in</h2>

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
          Log in
        </button>
      </form>
    </div>
  );
}
