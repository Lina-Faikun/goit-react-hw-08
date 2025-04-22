import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Занадто коротке ім’я!")
      .max(50, "Занадто довге ім’я!")
      .required("Обов’язково до заповнення"),
    number: Yup.string()
      .matches(/^\d+$/, "Тільки цифри!")
      .required("Обов’язково до заповнення"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <h2>Форма додавання контактів</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formik}>
          <label htmlFor="name">Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor="number">Number</label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
