import PropTypes from 'prop-types';

export const SearchForm = ({ handleSubmit, value, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movie" onChange={onChange} value={value} />
      <button>Submit</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
