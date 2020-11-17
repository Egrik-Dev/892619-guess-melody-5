import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withAudioPlayer from './with-audio-player';

const questions = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: PropTypes.element.isRequired
};

const MockComponentWrapped = withAudioPlayer(MockComponent);

it(`withAudioPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onAnswer={() => {}}
      quantityAnswersChoice={4}
      questions={questions}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
