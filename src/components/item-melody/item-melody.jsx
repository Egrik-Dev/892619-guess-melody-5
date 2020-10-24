import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ItemMelody extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onChooseMelody, id, userAnswer} = this.props;

    return (
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer"
          value={`answer-${id}`}
          checked={userAnswer}
          id={`answer-${id}`}
          onChange={(evt) => onChooseMelody(id, evt.target.checked)}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    );
  }
}

ItemMelody.propTypes = {
  onChooseMelody: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  userAnswer: PropTypes.bool.isRequired
};

export default ItemMelody;
