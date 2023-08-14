import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SelectFilter from './SelectFilter';

const FilterAside = ({ filterHandler }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  // const [pagesFilter, setPagesFilter] = useState('');

  const setTitleFilterHandler = (title) => setTitleFilter(title);
  const setGenreFilterHandler = (genre) => setGenreFilter(genre);
  // const setPagesFilterHandler = (pages) => setPagesFilter(pages);

  useEffect(() => {
    filterHandler(titleFilter, genreFilter);
  }, [titleFilter, genreFilter]);

  return (
    <aside className="aside__filter">
      <h3>BROWSER</h3>
      <SearchBar setTitleFilterHandler={setTitleFilterHandler} />
      <h3>FILTERS</h3>
      <SelectFilter setGenreFilterHandler={setGenreFilterHandler} />
    </aside>
  );
};

FilterAside.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default FilterAside;
