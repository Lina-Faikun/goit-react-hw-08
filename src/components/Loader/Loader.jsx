import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <RingLoader
        size={60}
        color="#fff"
        className={css.loader}
      />
    </>
  );
}