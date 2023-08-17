import { PropTypes } from 'prop-types';
import { useState } from 'react';

const SelectFilter = ({ setGenreFilterHandler }) => {
  const genresArr = [
    { value: '', text: 'All' },
    { value: 'Fantasy', text: 'Fantasy' },
    { value: 'Sci-Fi', text: 'Sci-Fi' },
    { value: 'Zombies', text: 'Zombies' },
    { value: 'Horror', text: 'Horror' },
  ];

  const [genre, setGenre] = useState('');
  const onChangeSelectFilter = (e) => {
    const genreValue = e.target.value;
    setGenre(genreValue);
    setGenreFilterHandler(genreValue);
  };

  return (
    <>
      <div className="box__filter">
        <h5>GENRES</h5>
        <ul>
          { genresArr && genresArr.map(({ value, text }) => (
            <li key={text}>
              <button
                type="button"
                className={`select-btn
                  ${genre === value
                  ? 'select-btn--pressed'
                  : ''}`}
                value={value}
                onClick={onChangeSelectFilter}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

SelectFilter.propTypes = {
  setGenreFilterHandler: PropTypes.func.isRequired,
};

export default SelectFilter;
