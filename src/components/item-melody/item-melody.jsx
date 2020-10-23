import React from 'react';
import PropTypes from 'prop-types';

const ItemMelody = (props) => {
  const {onChooseMelody, id} = props;

  return (
    <div className="game__answer">
      <input className="game__input visually-hidden" type="checkbox" name="answer"
        value={`answer-${id}`}
        id={`answer-${id}`}
        onChange={(evt) => onChooseMelody(id, evt.target.checked)}
      />
      <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
    </div>
  );
};

ItemMelody.propTypes = {
  onChooseMelody: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ItemMelody;
