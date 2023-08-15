import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/range-bar.css';

const getMaxPages = (books) => {
  let maxPages = 0;
  books.forEach((book) => {
    if (book.pages > maxPages) maxPages = book.pages;
  });
  return maxPages;
};

const RangeBar = ({ setPagesFilterHandler }) => {
  const books = useSelector((state) => state.books);

  const [minRangeValue, setMinRangeValue] = useState(1);
  const [maxRangeValue, setMaxRangeValue] = useState(10000);

  const onChangeMinRangeBar = (e) => {
    let minValue = e.target.value;
    setMinRangeValue(minValue);
    if (minValue.toString() === '') minValue = 1;
    setPagesFilterHandler([minValue, maxRangeValue]);
  };
  const onChangeMaxRangeBar = (e) => {
    let maxValue = e.target.value;
    setMaxRangeValue(maxValue);
    if (maxValue.toString() === '') maxValue = 10000;
    setPagesFilterHandler([minRangeValue, maxValue]);
  };

  useEffect(() => {
    setMaxRangeValue(getMaxPages(books));
  }, [books]);

  return (
    <div className="box__filter">
      <h5>PAGES&apos; RANGE</h5>
      <div className="box__range-slider">
        <div className="range__field">
          <input type="number" name="field-min" value={minRangeValue} onChange={onChangeMinRangeBar} />
        </div>
        <div className="range__slider">
          <div className="slider">
            <div className="progress-bar" />
          </div>
          <div className="range__input">
            <input type="range" name="range-min" id="range-min" min="0" max="1000" className="minimo" value={minRangeValue} onChange={onChangeMinRangeBar} />
            <input type="range" name="range-max" id="range-max" min="0" max="1000" value={maxRangeValue} onChange={onChangeMaxRangeBar} />
          </div>
        </div>
        <div className="range__field">
          <input type="number" name="field-max" value={maxRangeValue} onChange={onChangeMaxRangeBar} />
        </div>
      </div>
    </div>
  );
};

RangeBar.propTypes = {
  setPagesFilterHandler: PropTypes.func.isRequired,
};

export default RangeBar;
