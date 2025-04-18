import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Мінімум 2 символи').required("Ім'я обов'язкове"),
  email: Yup.string().email('Некоректна пошта').required('Email обовʼязковий'),
  password: Yup.string().min(6, 'Мінімум 6 символів').required('Пароль обовʼязковий'),
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
        <h2 className={css.title}>Реєстрація</h2>

        <label className={css.label}>
          Імʼя
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
          Пароль
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
          Зареєструватися
        </button>
      </form>
    </div>
  );
}
