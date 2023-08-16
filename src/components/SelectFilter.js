import { PropTypes } from 'prop-types';
import { useState } from 'react';

const SelectFilter = ({ setGenreFilterHandler }) => {
  const [genre, setGenre] = useState('');

  const onChangeSelectFilter = (e) => {
    const genreValue = e.target.value;
    setGenre(genreValue);
    setGenreFilterHandler(genreValue);
  };

  return (
    <div className="box__filter">
      <h5>GENRES</h5>
      <select
        name="genre"
        id="genre"
        className="form-control"
        onChange={onChangeSelectFilter}
        value={genre}
      >
        <option value="">Select an Option</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>
      </select>
    </div>
  );
};

SelectFilter.propTypes = {
  setGenreFilterHandler: PropTypes.func.isRequired,
};

export default SelectFilter;
