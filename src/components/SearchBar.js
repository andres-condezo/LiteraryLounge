import { PropTypes } from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ setTitleFilterHandler }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchBar = (e) => {
    const titleValue = e.target.value.toLowerCase();
    setSearchValue(titleValue);
    setTitleFilterHandler(titleValue.trim());
  };

  return (
    <div className="box__filter">
      <h2>Browser</h2>
      <input
        type="search"
        name="input__search-title"
        id="input__search-title"
        placeholder="Book title"
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
