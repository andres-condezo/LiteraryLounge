import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SelectFilter from './SelectFilter';
import RangeBar from './RangeBar';

const FilterAside = ({ filterHandler }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [pagesFilter, setPagesFilter] = useState([]);

  const setTitleFilterHandler = (title) => setTitleFilter(title);
  const setGenreFilterHandler = (genre) => setGenreFilter(genre);
  const setPagesFilterHandler = (pages) => setPagesFilter(pages);

  useEffect(() => {
    filterHandler(titleFilter, genreFilter, pagesFilter);
  }, [titleFilter, genreFilter, pagesFilter]);

  return (
    <aside className="aside__filter">
      <div className="browser">
        <h3>BROWSER</h3>
        <SearchBar setTitleFilterHandler={setTitleFilterHandler} />
      </div>
      <div className="filters">
        <h3>FILTERS</h3>
        <RangeBar setPagesFilterHandler={setPagesFilterHandler} pagesFilter={pagesFilter} />
        <SelectFilter setGenreFilterHandler={setGenreFilterHandler} />
      </div>
    </aside>
  );
};

FilterAside.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default FilterAside;
