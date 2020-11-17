import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = (props) => {
  const {mistakes} = props;
  const mistakesArr = new Array(mistakes).fill(``);

  return (
    mistakesArr.map((item, i) => (
      <div key={i} className="wrong"></div>
    ))
  );
};

Mistakes.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default Mistakes;
