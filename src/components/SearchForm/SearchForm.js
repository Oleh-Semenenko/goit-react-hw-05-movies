export const SearchForm = ({ handleSubmit, value, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie"
        onChange={onChange}
        value={value}
      />
      <button>Submit</button>
    </form>
  );
};
