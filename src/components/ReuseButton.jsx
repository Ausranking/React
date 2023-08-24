export default function Button({ id, text, className }) {
  return (
    <button className={className} id={id}>
      {text}
    </button>
  );
}
