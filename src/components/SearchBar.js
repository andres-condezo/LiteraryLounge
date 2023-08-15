import { PropTypes } from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ setTitleFilterHandler }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchBar = (e) => {
    const titleValue = e.target.value.trim().toLowerCase();
    setSearchValue(titleValue);
    setTitleFilterHandler(titleValue);
  };

  return (
    <div className="box__filter">
      <input
        type="search"
        name="input__search-title"
        id="input__search-title"
        placeholder="Título de libro"
        className="form-control"
        onChange={onChangeSearchBar}
        value={searchValue}
      />
    </div>
  );
};

SearchBar.propTypes = {
  setTitleFilterHandler: PropTypes.func.isRequired,
};

export default SearchBar;
