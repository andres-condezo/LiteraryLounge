import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SelectFilter = ({ setGenreFilterHandler }) => {
  const [genre, setGenre] = useState('');
  const [genreList, setGenreList] = useState([]);
  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    const genreSet = new Set();
    bookList.forEach((book) => {
      genreSet.add(book.genre);
    });
    setGenreList(Array.from(genreSet));
  }, [bookList, setGenreList]);

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
        {
          genreList && genreList.map((gen) => (
            <option key={gen} value={gen}>{gen}</option>
          ))
        }

      </select>
    </div>
  );
};

SelectFilter.propTypes = {
  setGenreFilterHandler: PropTypes.func.isRequired,
};

export default SelectFilter;
