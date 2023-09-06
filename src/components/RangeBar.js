import { PropTypes } from 'prop-types';
import { useState } from 'react';
import Slider from 'react-slider';
import '../css/range-bar.css';

const MIN = 1;
const MAX = 1500;

const RangeBar = ({ setPagesFilterHandler }) => {
  const [rangeValue, setRangeValue] = useState([MIN, MAX]);

  const onChangeMinRangeBar = (e) => {
    let minValue = Number(e.target.value);
    setRangeValue([minValue, rangeValue[1]]);
    if (minValue.toString() === '') minValue = MIN;
    setPagesFilterHandler([minValue, rangeValue[1]]);
  };
  const onChangeMaxRangeBar = (e) => {
    let maxValue = Number(e.target.value);
    setRangeValue([rangeValue[0], maxValue]);
    if (maxValue.toString() === '') maxValue = MAX;
    setPagesFilterHandler([rangeValue[0], maxValue]);
  };

  const onChangeRangeValue = (e) => {
    setRangeValue(e);
    setPagesFilterHandler(e);
  };

  return (
    <div className="box__filter">
      <h2>Page range</h2>
      <div className="box__range-slider">
        <div className="range__field">
          <input
            type="number"
            name="field-min"
            value={rangeValue[0]}
            onChange={onChangeMinRangeBar}
          />
          <input
            type="number"
            name="field-max"
            value={rangeValue[1]}
            onChange={onChangeMaxRangeBar}
          />
        </div>
        <Slider
          className="range__slider1"
          value={rangeValue}
          min={MIN}
          max={MAX}
          onChange={onChangeRangeValue}
        />
      </div>
    </div>
  );
};

RangeBar.propTypes = {
  setPagesFilterHandler: PropTypes.func.isRequired,
};

export default RangeBar;
