import React from 'react';

const Mistakes = (props) => {
  const {mistakes} = props;
  const mistakesArr = new Array(mistakes).fill(``);

  return (
    mistakesArr.map((item, i) => (
      <div key={i} className="wrong"></div>
    ))
  );
};

export default Mistakes;
